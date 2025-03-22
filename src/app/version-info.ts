/**
 * This file contains version information for the application
 * It is used by the storage service to handle version compatibility
 */

// The current application version (follows semver: MAJOR.MINOR.PATCH)
export const APP_VERSION = '1.0.0';

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
 * v1.0.0 - Initial versioned local storage implementation
 *   - Added version fields to storage structure
 *   - Implemented version comparison logic
 *   - Created StorageService abstraction
 *   - Added warning UI for version mismatches
 *   - Implemented per-item error handling for graceful degradation
 *   - Added partial loading capability for error recovery
 *   - Created UI for displaying error summaries
 */
