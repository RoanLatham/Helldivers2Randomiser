#!/usr/bin/env python3
"""
Image Optimizer for Helldivers Loadout Site

This script optimizes images by:
1. Converting to WebP format with high-quality compression
2. Resizing images based on configurable rules for different asset types
3. Maintaining the original folder structure in the output

Usage:
    python image_optimizer.py [--quality QUALITY] [--lossless] [--method METHOD] [--workers WORKERS]

Examples:
    python image_optimizer.py --quality 90 --lossless
    python image_optimizer.py --method 4 --workers 4
"""

import os
import sys
from pathlib import Path
import shutil
from PIL import Image
from tqdm import tqdm
import concurrent.futures
import argparse
import logging

# Default configuration
DEFAULT_CONFIG = {
    # Source directories relative to script location
    'SOURCE_DIRS': {
        'Weapons': '../Weapons',
        'Stratagems': '../Stratagems',
        'Warbonds': '../Warbonds'
    },
    # Output base directory relative to script location
    'OUTPUT_DIR': '../src/assets',
    
    # Resizing rules
    'RESIZE_RULES': {
        'weapons': {'height': 128, 'keep_aspect': True},
        'stratagems': {'keep_original': True},
        'warbonds': {'height': 72, 'keep_aspect': True}
    },
    
    # WebP compression settings
    'WEBP_QUALITY': 85,      # 0-100, higher is better quality but larger file
    'LOSSLESS': False,       # True for lossless compression, False for lossy
    'METHOD': 6,             # Compression method (0-6), 6 is slowest but best compression
    
    # Processing settings
    'MAX_WORKERS': 8,        # Number of parallel processes
    'PRESERVE_STRUCTURE': True,  # Preserve folder structure in output
}

def setup_logging():
    """Configure logging"""
    log_dir = Path(__file__).parent.resolve()
    log_file = log_dir / 'image_optimization.log'
    
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.StreamHandler(),
            logging.FileHandler(log_file)
        ]
    )
    return logging.getLogger(__name__)

logger = setup_logging()

def parse_args():
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(description='Optimize images for web using WebP format')
    
    parser.add_argument('--quality', type=int, default=DEFAULT_CONFIG['WEBP_QUALITY'],
                        help=f'WebP quality (0-100, default: {DEFAULT_CONFIG["WEBP_QUALITY"]})')
    
    parser.add_argument('--lossless', action='store_true', default=DEFAULT_CONFIG['LOSSLESS'],
                        help='Use lossless compression')
    
    parser.add_argument('--method', type=int, choices=range(0, 7), default=DEFAULT_CONFIG['METHOD'],
                        help=f'Compression method (0-6, default: {DEFAULT_CONFIG["METHOD"]})')
    
    parser.add_argument('--workers', type=int, default=DEFAULT_CONFIG['MAX_WORKERS'],
                        help=f'Number of worker processes (default: {DEFAULT_CONFIG["MAX_WORKERS"]})')
    
    parser.add_argument('--no-preserve-structure', action='store_false', dest='preserve_structure',
                        default=DEFAULT_CONFIG['PRESERVE_STRUCTURE'],
                        help='Don\'t preserve folder structure in output')
    
    parser.add_argument('--force', action='store_true', dest='force_overwrite',
                        default=False,
                        help='Force overwrite of existing files')
    
    parser.add_argument('--single-image', type=str, dest='single_image_path',
                        help='Process a single image file instead of directories')
    
    return parser.parse_args()

def get_asset_type(path):
    """Determine the asset type based on the path"""
    path_lower = str(path).lower()
    
    if 'weapons' in path_lower:
        return 'weapons'
    elif 'stratagems' in path_lower:
        return 'stratagems'
    elif 'warbonds' in path_lower:
        return 'warbonds'
    else:
        return 'unknown'

def resize_image(img, asset_type, config):
    """Resize image based on the asset type rules"""
    rules = config['RESIZE_RULES'].get(asset_type, {'keep_original': True})
    
    if rules.get('keep_original', False):
        return img
    
    original_width, original_height = img.size
    
    if 'height' in rules:
        target_height = rules['height']
        if rules.get('keep_aspect', True):
            aspect_ratio = original_width / original_height
            target_width = int(target_height * aspect_ratio)
        else:
            target_width = original_width
            
        return img.resize((target_width, target_height), Image.LANCZOS)
    
    elif 'width' in rules:
        target_width = rules['width']
        if rules.get('keep_aspect', True):
            aspect_ratio = original_height / original_width
            target_height = int(target_width * aspect_ratio)
        else:
            target_height = original_height
            
        return img.resize((target_width, target_height), Image.LANCZOS)
    
    return img

def optimize_image(source_path, output_path, config):
    """Optimize a single image"""
    # Check if the output file already exists - skip if it does
    if os.path.exists(output_path) and not config.get('FORCE_OVERWRITE', False):
        return "skipped"  # Return "skipped" status instead of True/False
        
    asset_type = get_asset_type(source_path)
    
    try:
        # Ensure output directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        # Open and optimize image
        with Image.open(source_path) as img:
            # Convert to RGB if needed (WebP doesn't support all modes)
            if img.mode in ('RGBA', 'LA'):
                optimized_img = img.convert('RGBA')
            else:
                optimized_img = img.convert('RGB')
            
            # Resize based on asset type
            optimized_img = resize_image(optimized_img, asset_type, config)
            
            # Save as WebP with optimized settings
            optimized_img.save(
                output_path, 
                format='WEBP',
                quality=config['WEBP_QUALITY'],
                lossless=config['LOSSLESS'],
                method=config['METHOD']
            )
            
        return "success"  # Return "success" status
    except Exception as e:
        logger.error(f"Error optimizing {source_path}: {str(e)}")
        return "failed"  # Return "failed" status

def process_directory(source_dir, output_base_dir, config):
    """Process all images in a directory and its subdirectories"""
    source_path = Path(source_dir).resolve()
    
    # Extract directory name for output path
    dir_name = source_path.name
    output_path = Path(output_base_dir) / dir_name if config['PRESERVE_STRUCTURE'] else Path(output_base_dir)
    
    # Get all image files recursively
    image_files = []
    for root, _, files in os.walk(source_path):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')):
                source_file = Path(root) / file
                
                # Create output path with same structure but different extension
                if config['PRESERVE_STRUCTURE']:
                    relative_path = source_file.relative_to(source_path)
                    output_file = output_path / relative_path.with_suffix('.webp')
                else:
                    output_file = output_path / f"{source_file.stem}.webp"
                
                image_files.append((source_file, output_file))
    
    if not image_files:
        logger.warning(f"No image files found in {source_dir}")
        return 0, 0, 0  # Return zeros for success, skipped, failed
    
    logger.info(f"Found {len(image_files)} images to process in {source_dir}")
    
    # Process images in parallel
    with concurrent.futures.ProcessPoolExecutor(max_workers=config['MAX_WORKERS']) as executor:
        futures = {
            executor.submit(optimize_image, src, dst, config): src 
            for src, dst in image_files
        }
        
        succeeded = 0
        skipped = 0
        failed = 0
        
        for future in tqdm(concurrent.futures.as_completed(futures), total=len(futures), desc=f"Optimizing {dir_name} images"):
            source_file = futures[future]
            try:
                result = future.result()
                if result == "success":
                    succeeded += 1
                elif result == "skipped":
                    skipped += 1
                else:
                    failed += 1
            except Exception as e:
                logger.error(f"Exception processing {source_file}: {str(e)}")
                failed += 1
    
    return succeeded, skipped, failed

def process_single_image(image_path, config):
    """Process a single image file"""
    source_path = Path(image_path).resolve()
    
    if not source_path.exists() or not source_path.is_file():
        logger.error(f"Image file not found: {source_path}")
        return False
    
    # Check if file is an image
    if not source_path.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff']:
        logger.error(f"File is not a supported image type: {source_path}")
        return False
    
    # Create output path in the same folder as the input
    output_path = source_path.with_suffix('.webp')
    
    logger.info(f"Processing single image: {source_path}")
    logger.info(f"Output will be saved to: {output_path}")
    
    # Call optimize_image function
    result = optimize_image(source_path, output_path, config)
    
    if result == "success":
        logger.info(f"Successfully optimized image: {output_path}")
        return True
    elif result == "skipped":
        logger.info(f"Skipped already processed image: {output_path}")
        return True
    else:
        logger.error(f"Failed to optimize image: {source_path}")
        return False

def main():
    """Main function to run the optimization process"""
    args = parse_args()
    
    # Update config with command line arguments
    config = DEFAULT_CONFIG.copy()
    config.update({
        'WEBP_QUALITY': args.quality,
        'LOSSLESS': args.lossless,
        'METHOD': args.method,
        'MAX_WORKERS': args.workers,
        'PRESERVE_STRUCTURE': args.preserve_structure,
        'FORCE_OVERWRITE': args.force_overwrite
    })
    
    logger.info(f"Starting image optimization with settings: quality={config['WEBP_QUALITY']}, "
                f"lossless={config['LOSSLESS']}, method={config['METHOD']}, "
                f"workers={config['MAX_WORKERS']}, preserve_structure={config['PRESERVE_STRUCTURE']}")
    
    # Process single image if path provided
    if args.single_image_path:
        success = process_single_image(args.single_image_path, config)
        sys.exit(0 if success else 1)
    
    # Otherwise, process directories
    script_dir = Path(__file__).parent.resolve()
    output_base_dir = script_dir / Path(config['OUTPUT_DIR'])
    
    # Ensure base output directory exists
    os.makedirs(output_base_dir, exist_ok=True)
    
    total_succeeded = 0
    total_skipped = 0
    total_failed = 0
    
    # Process each source directory
    for dir_name, dir_path in config['SOURCE_DIRS'].items():
        source_dir = script_dir / dir_path
        
        if not source_dir.exists():
            logger.warning(f"Source directory not found: {source_dir}")
            continue
        
        logger.info(f"Processing {dir_name} images from {source_dir}")
        succeeded, skipped, failed = process_directory(source_dir, output_base_dir, config)
        
        total_succeeded += succeeded
        total_skipped += skipped
        total_failed += failed
    
    logger.info(f"Optimization complete: {total_succeeded} succeeded, {total_skipped} skipped, {total_failed} failed")
    
    if total_skipped > 0:
        logger.info(f"Skipped {total_skipped} images that were already processed.")
    
    if total_failed > 0:
        logger.warning(f"Some images failed to optimize. Check the log for details.")

if __name__ == "__main__":
    main() 