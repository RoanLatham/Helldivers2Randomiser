import { Injectable } from '@angular/core';
import { WarbondFilterStateService } from '../warbond-filter-state.service';
import { WeaponFilterStateService } from '../weapon-filter-state.service';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';
import { BoosterFilterStateService } from '../booster-filter-state.service';
import { GtagService } from '../gtag-service.service';
import { APP_VERSION, SCHEMA_VERSIONS } from '../version-info';

// Storage key for localStorage
const FILTER_SETTINGS_KEY = 'helldivers2-loadout-filter-settings';

// Use constants from version-info.ts instead of hardcoded values
const CURRENT_VERSION = APP_VERSION;
const CURRENT_SCHEMAS = SCHEMA_VERSIONS;

/**
 * Represents the version information
 */
export interface VersionInfo {
  version: string;
  schemas: {
    warbond: string;
    weapon: string;
    stratagem: string;
    booster: string;
  };
}

/**
 * Represents the full storage data structure
 */
export interface StorageData {
  version: string; // e.g. "1.0.0"
  timestamp: string; // ISO timestamp
  schemas: {
    warbond: string; // Schema version
    weapon: string;
    stratagem: string;
    booster: string;
  };
  data: {
    warbond: any;
    weapon: any;
    stratagem: any;
    booster: any;
  };
}

/**
 * Interface for reporting skipped items during loading
 */
export interface LoadingReport {
  skippedItems: {
    warbond: number;
    weapon: number;
    stratagem: number;
    booster: number;
  };
  totalSkipped: number;
}

/**
 * Result of comparing two versions
 */
export interface VersionComparisonResult {
  compatible: boolean;
  warningNeeded: boolean;
  resetRequired: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private warbondFilterState: WarbondFilterStateService,
    private weaponFilterState: WeaponFilterStateService,
    private stratagemFilterState: StratagemFilterStateService,
    private boosterFilterState: BoosterFilterStateService,
    private gtagService: GtagService
  ) {}

  /**
   * Check if there are any saved settings in localStorage
   */
  hasStoredSettings(): boolean {
    return !!localStorage.getItem(FILTER_SETTINGS_KEY);
  }

  /**
   * Save current filter settings to localStorage with versioning
   */
  saveSettings(): { success: boolean; timestamp: string | null } {
    try {
      // Collect state from all filter services
      const settings: StorageData = {
        version: CURRENT_VERSION,
        timestamp: new Date().toISOString(),
        schemas: { ...CURRENT_SCHEMAS },
        data: {
          warbond: this.warbondFilterState.getState(),
          weapon: this.weaponFilterState.getState(),
          stratagem: this.stratagemFilterState.getState(),
          booster: this.boosterFilterState.getState(),
        },
      };

      // Save to localStorage
      localStorage.setItem(FILTER_SETTINGS_KEY, JSON.stringify(settings));

      // Track event
      this.gtagService.trackEvent(
        'save_filter_settings',
        'User saved filter settings to localStorage',
        'FILTERS'
      );

      return { success: true, timestamp: settings.timestamp };
    } catch (error) {
      console.error('Failed to save settings to localStorage:', error);
      return { success: false, timestamp: null };
    }
  }

  /**
   * Load saved filter settings from localStorage with version checking
   * @returns Object with loading status and any errors encountered
   */
  loadSettings(): {
    success: boolean;
    timestamp: string | null;
    versionResult: VersionComparisonResult | null;
    errors: string[];
    loadingReport?: LoadingReport;
  } {
    const errors: string[] = [];
    let timestamp: string | null = null;
    let versionResult: VersionComparisonResult | null = null;
    let loadingReport: LoadingReport | undefined = undefined;

    try {
      const settingsJson = localStorage.getItem(FILTER_SETTINGS_KEY);
      if (!settingsJson) {
        return {
          success: false,
          timestamp: null,
          versionResult: null,
          errors: ['No settings found in localStorage'],
        };
      }

      let settings: StorageData;

      try {
        settings = JSON.parse(settingsJson);
        timestamp = settings.timestamp;
      } catch (parseError) {
        return {
          success: false,
          timestamp: null,
          versionResult: null,
          errors: ['Failed to parse settings JSON: ' + parseError],
        };
      }

      // Handle data without a version number (treat as incompatible)
      if (!settings.version) {
        // Treat it as incompatible and require a reset
        return {
          success: false,
          timestamp,
          versionResult: {
            compatible: false,
            warningNeeded: false,
            resetRequired: true,
          },
          errors: ['Version information missing, reset required'],
        };
      }

      // Check version compatibility
      versionResult = this.compareVersions(CURRENT_VERSION, settings.version);

      // If major version change, return early - caller will handle the reset
      if (versionResult.resetRequired) {
        return {
          success: false,
          timestamp,
          versionResult,
          errors: ['Incompatible version detected: ' + settings.version],
        };
      }

      // Initialize loading report
      loadingReport = {
        skippedItems: {
          warbond: 0,
          weapon: 0,
          stratagem: 0,
          booster: 0,
        },
        totalSkipped: 0,
      };

      // Create a proxy handler to detect errors in console.info calls
      // This will intercept error messages from filter services during loading
      const originalConsoleInfo = console.info;
      console.info = (...args: any[]) => {
        // Check if this is a "Skipped items" message from our filter services
        const message = args[0];
        if (typeof message === 'string' && message.includes('Skipped')) {
          if (message.includes('warbond')) {
            const match = message.match(/Skipped (\d+) invalid/);
            if (match && match[1]) {
              loadingReport!.skippedItems.warbond += parseInt(match[1], 10);
              loadingReport!.totalSkipped += parseInt(match[1], 10);
            }
          } else if (message.includes('weapon')) {
            const match = message.match(/Skipped (\d+) invalid/);
            if (match && match[1]) {
              loadingReport!.skippedItems.weapon += parseInt(match[1], 10);
              loadingReport!.totalSkipped += parseInt(match[1], 10);
            }
          } else if (message.includes('stratagem')) {
            const match = message.match(/Skipped (\d+) invalid/);
            if (match && match[1]) {
              loadingReport!.skippedItems.stratagem += parseInt(match[1], 10);
              loadingReport!.totalSkipped += parseInt(match[1], 10);
            }
          } else if (message.includes('booster')) {
            const match = message.match(/Skipped (\d+) invalid/);
            if (match && match[1]) {
              loadingReport!.skippedItems.booster += parseInt(match[1], 10);
              loadingReport!.totalSkipped += parseInt(match[1], 10);
            }
          }
        }
        // Call original console.info
        originalConsoleInfo.apply(console, args);
      };

      // Apply settings to each service, with graceful error handling
      try {
        this.warbondFilterState.setState(settings.data.warbond);
      } catch (e) {
        errors.push('Failed to load warbond settings: ' + e);
      }

      try {
        this.weaponFilterState.setState(settings.data.weapon);
      } catch (e) {
        errors.push('Failed to load weapon settings: ' + e);
      }

      try {
        this.stratagemFilterState.setState(settings.data.stratagem);
      } catch (e) {
        errors.push('Failed to load stratagem settings: ' + e);
      }

      try {
        this.boosterFilterState.setState(settings.data.booster);
      } catch (e) {
        errors.push('Failed to load booster settings: ' + e);
      }

      // Restore original console.info
      console.info = originalConsoleInfo;

      // If there were any skipped items, log a summary
      if (loadingReport.totalSkipped > 0) {
        console.info(
          `Loading summary: ${loadingReport.totalSkipped} total items skipped`,
          loadingReport.skippedItems
        );

        // Track skipped items event
        this.gtagService.trackEvent(
          'load_filter_settings_partial',
          `Loaded with ${loadingReport.totalSkipped} items skipped`,
          'FILTERS'
        );
      }

      // Track event
      this.gtagService.trackEvent(
        'load_filter_settings',
        'Filter settings loaded from localStorage',
        'FILTERS'
      );

      return {
        success: errors.length === 0,
        timestamp,
        versionResult,
        errors,
        loadingReport:
          loadingReport.totalSkipped > 0 ? loadingReport : undefined,
      };
    } catch (error) {
      return {
        success: false,
        timestamp,
        versionResult,
        errors: ['Failed to load settings: ' + error],
        loadingReport,
      };
    }
  }

  /**
   * Clear saved filter settings from localStorage and reset states
   */
  clearSettings(): boolean {
    try {
      // Remove from localStorage
      localStorage.removeItem(FILTER_SETTINGS_KEY);

      // Reset all services to default state
      this.warbondFilterState.resetState();
      this.weaponFilterState.resetState();
      this.stratagemFilterState.resetState();
      this.boosterFilterState.resetState();

      // Track event
      this.gtagService.trackEvent(
        'clear_filter_settings',
        'User cleared saved filter settings',
        'FILTERS'
      );

      return true;
    } catch (error) {
      console.error('Failed to clear settings:', error);
      return false;
    }
  }

  /**
   * Clear only the localStorage without resetting current filters
   */
  clearStorage(): boolean {
    try {
      // Remove from localStorage
      localStorage.removeItem(FILTER_SETTINGS_KEY);

      // Track event
      this.gtagService.trackEvent(
        'clear_filter_storage',
        'User cleared saved filter storage without resetting filters',
        'FILTERS'
      );

      return true;
    } catch (error) {
      console.error('Failed to clear storage:', error);
      return false;
    }
  }

  /**
   * Compare two semantic versions and determine compatibility
   * @param currentVersion Current application version
   * @param storedVersion Version from stored data
   * @returns Object with compatibility flags
   */
  compareVersions(
    currentVersion: string,
    storedVersion: string
  ): VersionComparisonResult {
    // Default result for same version
    if (currentVersion === storedVersion) {
      return {
        compatible: true,
        warningNeeded: false,
        resetRequired: false,
      };
    }

    try {
      const current = this.parseSemanticVersion(currentVersion);
      const stored = this.parseSemanticVersion(storedVersion);

      // Major version change - reset required
      if (current.major > stored.major) {
        return {
          compatible: false,
          warningNeeded: false,
          resetRequired: true,
        };
      }

      // Minor version change - warning needed
      if (current.major === stored.major && current.minor > stored.minor) {
        return {
          compatible: true,
          warningNeeded: true,
          resetRequired: false,
        };
      }

      // Patch version change or older major version - fully compatible
      return {
        compatible: true,
        warningNeeded: false,
        resetRequired: false,
      };
    } catch (error) {
      console.error('Version comparison error:', error);
      // If we can't parse the version, assume incompatible to be safe
      return {
        compatible: false,
        warningNeeded: false,
        resetRequired: true,
      };
    }
  }

  /**
   * Parse a semantic version string into its components
   * @param version Version string in format "MAJOR.MINOR.PATCH"
   */
  private parseSemanticVersion(version: string): {
    major: number;
    minor: number;
    patch: number;
  } {
    const parts = version.split('.');
    if (parts.length !== 3) {
      throw new Error(`Invalid semantic version: ${version}`);
    }

    const major = parseInt(parts[0], 10);
    const minor = parseInt(parts[1], 10);
    const patch = parseInt(parts[2], 10);

    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
      throw new Error(`Invalid semantic version components: ${version}`);
    }

    return { major, minor, patch };
  }
}
