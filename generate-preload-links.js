const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Directories to scan for images
const IMAGE_DIRECTORIES = [
  "src/assets/Boosters",
  "src/assets/NewWarbonds",
  "src/assets/NewStratagems",
  "src/assets/NewWeapons",
];

// File extensions to include
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".svg"];

// Output file where preload tags will be saved
const OUTPUT_FILE = "preload-links.html";

// Get all image files from the specified directories
function getAllImagePaths() {
  let imagePaths = [];

  IMAGE_DIRECTORIES.forEach((dir) => {
    // Normalize directory path for the current OS
    const normalizedDir = path.normalize(dir);

    // Check if directory exists
    if (!fs.existsSync(normalizedDir)) {
      console.warn(`Directory not found: ${normalizedDir}`);
      return;
    }

    console.log(`Scanning directory: ${normalizedDir}`);

    // Try three different glob approaches to find any images

    // Approach 1: Use glob directly with pattern
    try {
      const pattern = `${normalizedDir}/**/*${IMAGE_EXTENSIONS.map((ext) =>
        ext.replace(".", "\\.")
      ).join("|")}`;
      console.log(`Trying glob pattern: ${pattern}`);
      const files = glob.sync(pattern);
      console.log(`Found ${files.length} files with approach 1`);
      if (files.length > 0) {
        imagePaths = imagePaths.concat(files);
        return;
      }
    } catch (err) {
      console.warn(`Error with approach 1: ${err.message}`);
    }

    // Approach 2: Use path.join for building the pattern
    try {
      // Fix the glob pattern for Windows compatibility
      const globPattern = path
        .join(normalizedDir, "**", "*")
        .replace(/\\/g, "/");
      console.log(`Trying glob pattern: ${globPattern}`);
      const files = glob
        .sync(globPattern)
        .filter((file) =>
          IMAGE_EXTENSIONS.some((ext) => file.toLowerCase().endsWith(ext))
        );
      console.log(`Found ${files.length} files with approach 2`);
      if (files.length > 0) {
        imagePaths = imagePaths.concat(files);
        return;
      }
    } catch (err) {
      console.warn(`Error with approach 2: ${err.message}`);
    }

    // Approach 3: Fallback to direct filesystem reading if glob doesn't work
    try {
      console.log("Trying direct filesystem approach");
      const files = findImagesRecursive(normalizedDir);
      console.log(`Found ${files.length} files with approach 3`);
      imagePaths = imagePaths.concat(files);
    } catch (err) {
      console.warn(`Error with approach 3: ${err.message}`);
    }
  });

  return imagePaths;
}

// Recursive function to find all images in a directory and its subdirectories
function findImagesRecursive(dir) {
  let results = [];

  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Recursive call for subdirectories
      results = results.concat(findImagesRecursive(filePath));
    } else {
      // Check if this file has an image extension
      if (IMAGE_EXTENSIONS.some((ext) => file.toLowerCase().endsWith(ext))) {
        results.push(filePath);
      }
    }
  });

  return results;
}

// Convert file paths to web paths (remove 'src' and normalize slashes)
function convertToWebPaths(filePaths) {
  return filePaths.map((filePath) => {
    // Convert Windows backslashes to forward slashes
    let normalizedPath = filePath.replace(/\\/g, "/");
    // Remove the 'src' prefix (handle both with and without leading slash)
    return normalizedPath.replace(/^src\//, "");
  });
}

// Generate preload link tags for images
function generatePreloadTags(webPaths) {
  return webPaths
    .map((webPath) => {
      return `<link rel="preload" href="${webPath}" as="image" />`;
    })
    .join("\n    ");
}

// Generate preload tags and save to a file
function generateAndSavePreloadTags() {
  // Get all image paths and convert to web paths
  console.log("Searching for images...");
  const imagePaths = getAllImagePaths();
  console.log(`Found ${imagePaths.length} total image paths`);

  if (imagePaths.length > 0) {
    console.log("Sample of found images:");
    imagePaths.slice(0, 5).forEach((path) => console.log(`  - ${path}`));
  }

  const webPaths = convertToWebPaths(imagePaths);

  // Generate preload tags
  const preloadTags = generatePreloadTags(webPaths);

  // Count how many images we're preloading
  console.log(`Generating preload tags for ${webPaths.length} images...`);

  // Create content with HTML comment
  const content = `<!-- Image preload tags - Generated on ${new Date().toISOString()} -->\n    ${preloadTags}`;

  // Write to output file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(
    `Generated ${webPaths.length} preload tags and saved to ${OUTPUT_FILE}`
  );
}

// Run the script
generateAndSavePreloadTags();
