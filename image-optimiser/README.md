# Helldivers 2 Image Optimizer

This tool optimizes image assets for the Helldivers Loadout website by:

1. Converting images to WebP format for better web performance
2. Applying appropriate resizing based on asset type:
   - Weapons: Height of 128px with proportional width
   - Stratagems: Original size preserved
   - Warbonds: Height of 72px with proportional width
3. Using optimal compression settings for web delivery
4. Preserving the original folder structure in the output
5. Skipping already processed images for faster subsequent runs

## Setup

1. Create a virtual environment:

   ```
   python -m venv venv
   ```

2. Activate the virtual environment:

   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

Run the script with default settings to process all images in configured directories:

```
python image_optimizer.py
```

Process a single image file:

```
python image_optimizer.py --single-image "path/to/your/image.png"
```

### Command-line Options

- `--single-image PATH`: Process a single image file and save the result in the same folder
- `--quality QUALITY`: WebP quality (0-100, default: 85)
- `--lossless`: Use lossless compression (default: False)
- `--method METHOD`: Compression method (0-6, default: 6)
- `--workers WORKERS`: Number of worker processes (default: 8)
- `--no-preserve-structure`: Don't preserve folder structure in output
- `--force`: Force overwrite of existing files (by default, existing files are skipped)

### Examples

With high quality and lossless compression:

```
python image_optimizer.py --quality 90 --lossless
```

Faster but less efficient compression:

```
python image_optimizer.py --method 4 --workers 4
```

Force reprocessing of all images:

```
python image_optimizer.py --force
```

Process a single image with custom settings:

```
python image_optimizer.py --single-image "screenshots/gameplay.png" --quality 95 --lossless
```

## Configuration

You can modify the following settings in the script:

1. Source directories (relative to script location):

   - `DEFAULT_CONFIG['SOURCE_DIRS']`

2. Output directory (relative to script location):

   - `DEFAULT_CONFIG['OUTPUT_DIR']`

3. Resizing rules for each asset type:

   - `DEFAULT_CONFIG['RESIZE_RULES']`

4. WebP compression settings:

   - `DEFAULT_CONFIG['WEBP_QUALITY']`
   - `DEFAULT_CONFIG['LOSSLESS']`
   - `DEFAULT_CONFIG['METHOD']`

5. Processing settings:
   - `DEFAULT_CONFIG['MAX_WORKERS']`
   - `DEFAULT_CONFIG['PRESERVE_STRUCTURE']`

## Optimization Features

- **Skip Existing Files**: The script automatically skips processing images that already exist in the output location, making subsequent runs much faster.
- **Force Overwrite Mode**: Use the `--force` flag to reprocess all images, even if they already exist in the output location.
- **Single Image Processing**: Process one image at a time using the `--single-image` option, useful for quick tests or processing individual files.

## Output

When processing directories, the optimized images will be saved to `../src/assets` with the same folder structure as the input, but with `.webp` extensions.

When processing a single image with `--single-image`, the output will be saved in the same directory as the input, with the same name but a `.webp` extension.

A log file (`image_optimization.log`) will be created in the script directory to track the optimization process.
