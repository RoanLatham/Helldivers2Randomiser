// Simple script to update the build timestamp during the build process
const fs = require("fs");
const path = require("path");

// Get current timestamp
const now = new Date();
const timestamp = now.toISOString().replace("T", " ").substring(0, 19);

// Create the TypeScript content with the build timestamp
const tsContent = `
// This file is auto-generated during the build process
// Contains the build timestamp for the application

export const BUILD_TIMESTAMP = '${timestamp}';
`;

// Write to file
const outputFile = path.join(__dirname, "src", "app", "build-timestamp.ts");
fs.writeFileSync(outputFile, tsContent);

console.log(
  `Updated build timestamp file: ${outputFile} with timestamp: ${timestamp}`
);
