const fs = require("fs");
const path = require("path");

// Input file containing the preload tags
const PRELOAD_LINKS_FILE = "preload-links.html";

// Angular build output directories - handles both server-side rendered and client-side paths
const INDEX_FILES = [
  "dist/helldivers-loadout/browser/index.html",
  "dist/helldivers-loadout/index.html",
];

// Inject preload links into the built index.html file
function injectPreloadLinks() {
  // Check if preload links file exists
  if (!fs.existsSync(PRELOAD_LINKS_FILE)) {
    console.error(`Preload links file not found: ${PRELOAD_LINKS_FILE}`);
    console.error('Please run "npm run generate-preload-links" first');
    return;
  }

  // Read the preload links file
  const preloadLinks = fs.readFileSync(PRELOAD_LINKS_FILE, "utf8");

  // Process each possible index file
  let injectedCount = 0;

  INDEX_FILES.forEach((indexFile) => {
    if (fs.existsSync(indexFile)) {
      // Read the index.html file
      let indexContent = fs.readFileSync(indexFile, "utf8");

      // Check if preload links are already injected
      if (indexContent.includes("<!-- Image preload tags")) {
        console.log(`Preload links already exist in ${indexFile}, updating...`);
        // Replace existing preload tags with new ones
        indexContent = indexContent.replace(
          /<!-- Image preload tags.*?-->\n.*?(?=<\/head>)/s,
          preloadLinks
        );
      } else {
        // Inject preload links before closing head tag
        indexContent = indexContent.replace(
          "</head>",
          `  ${preloadLinks}\n  </head>`
        );
      }

      // Write the modified index.html file
      fs.writeFileSync(indexFile, indexContent);
      console.log(`Injected preload links into ${indexFile}`);
      injectedCount++;
    }
  });

  if (injectedCount === 0) {
    console.error("No index.html files found in the dist directory.");
    console.error('Make sure you run "npm run build" first.');
  } else {
    console.log(
      `Successfully injected preload links into ${injectedCount} files`
    );
  }
}

// Run the script
injectPreloadLinks();
