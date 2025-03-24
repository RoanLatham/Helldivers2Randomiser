/**
 * This script replaces the Google Analytics tracking ID placeholder
 * with the actual ID from Cloudflare Pages environment variables.
 */

const fs = require("fs");
const path = require("path");

// Get the tracking ID from the environment variable
const GTAG_ID = process.env.GTAG_ID || "";

if (!GTAG_ID) {
  console.warn(
    "\x1b[33m%s\x1b[0m",
    "Warning: GTAG_ID environment variable is not set. Google Analytics will not work."
  );
  console.warn(
    "\x1b[33m%s\x1b[0m",
    "Set this in your Cloudflare Pages environment variables."
  );
  // Still continue with the build, but analytics won't work
}

// Path to the index.html file
const INDEX_PATH = path.join(__dirname, "src", "index.html");

// Read the index.html file
try {
  console.log("Replacing Google Analytics tracking ID placeholder...");

  let content = fs.readFileSync(INDEX_PATH, "utf8");

  // Replace all occurrences of the placeholder with the actual tracking ID
  content = content.replace(/__GTAG_ID__/g, GTAG_ID);

  // Write the modified content back to the file
  fs.writeFileSync(INDEX_PATH, content);

  console.log(
    "\x1b[32m%s\x1b[0m",
    "Successfully replaced Google Analytics tracking ID."
  );
} catch (err) {
  console.error(
    "\x1b[31m%s\x1b[0m",
    `Error replacing Google Analytics tracking ID: ${err.message}`
  );
  process.exit(1);
}
