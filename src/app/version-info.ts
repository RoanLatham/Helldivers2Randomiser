/**
 * This file contains version information for the application
 * It is used by the storage service to handle version compatibility
 */

// The current application version (follows extended semver: MAJOR.MINOR.INFO.PATCH)
// MAJOR - Incompatible changes requiring reset (structural changes)
// MINOR - Potentially incompatible changes requiring warning (new attributes)
// INFO - Compatible changes requiring notification (new content added)
// PATCH - Compatible changes with no notification needed (bug fixes, text changes)
export const APP_VERSION = '1.0.1.3';

// The current schema versions for different data types
// These should be updated when the structure of the data changes
export const SCHEMA_VERSIONS = {
  warbond: '1.0.0',
  weapon: '1.0.0',
  stratagem: '1.0.0',
  booster: '1.0.0',
};

/**
 * Version history and migration notes
 *
 * v1.0.1.0 - Added info version number
 *   - Extended version format to MAJOR.MINOR.INFO.PATCH
 *   - Added info notifications for content updates
 *   - Automatic handling of version format migration
 *
 * v1.0.0 - Initial versioned local storage implementation
 *   - Added version fields to storage structure
 *   - Implemented version comparison logic
 *   - Created StorageService abstraction
 *   - Added warning UI for version mismatches
 *   - Implemented per-item error handling for graceful degradation
 *   - Added partial loading capability for error recovery
 *   - Created UI for displaying error summaries
 */
