import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarbondFiltersComponent } from '../warbond-filters/warbond-filters.component';
import { WeaponFiltersComponent } from '../weapon-filters/weapon-filters.component';
import { StratagemFiltersComponent } from '../stratagem-filters/stratagem-filters.component';
import { BoosterFiltersComponent } from '../booster-filters/booster-filters.component';
import { CollapsibleSectionComponent } from '../shared/collapsible-section/collapsible-section.component';
import { WarbondFilterStateService } from '../warbond-filter-state.service';
import { WeaponFilterStateService } from '../weapon-filter-state.service';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';
import { BoosterFilterStateService } from '../booster-filter-state.service';
import { GtagService } from '../gtag-service.service';
import {
  StorageService,
  VersionComparisonResult,
  LoadingReport,
} from '../services/storage.service';

@Component({
  selector: 'app-filter-container',
  standalone: true,
  imports: [
    CommonModule,
    CollapsibleSectionComponent,
    WarbondFiltersComponent,
    WeaponFiltersComponent,
    StratagemFiltersComponent,
    BoosterFiltersComponent,
  ],
  templateUrl: './filter-container.component.html',
  styleUrl: './filter-container.component.scss',
})
export class FilterContainerComponent implements OnInit {
  filtersCollapsed = false;
  settingsCollapsed = false; // For settings section collapsible
  hasStoredSettings = false;
  lastSaved: string | null = null;
  showSaveSuccess = false; // Flag to control showing the success indicator
  versionWarning: string | null = null; // New property to display version warnings
  partialLoadWarning: string | null = null; // New property for partial load warnings
  loadingReport: LoadingReport | null = null; // New property to track loading issues

  // TESTING ONLY: Set to true to simulate a version warning
  testVersionWarning = false;

  constructor(
    private warbondFilterState: WarbondFilterStateService,
    private weaponFilterState: WeaponFilterStateService,
    private stratagemFilterState: StratagemFilterStateService,
    private boosterFilterState: BoosterFilterStateService,
    private gtagService: GtagService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    // Check for stored settings on initialization
    this.checkForStoredSettings();

    // Auto-load settings if available
    if (this.hasStoredSettings) {
      this.loadSettings();
    }

    // TESTING ONLY: Uncomment to simulate a partial load warning
    // this.testPartialLoadWarning();
  }

  toggleFiltersCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.filtersCollapsed = collapsed;
    } else {
      this.filtersCollapsed = !this.filtersCollapsed;
    }

    // Track this interaction
    this.gtagService.trackEvent(
      'toggle_filters_section',
      this.filtersCollapsed ? 'collapsed' : 'expanded',
      'UI_INTERACTION'
    );
  }

  /**
   * Toggle collapsed state of the settings section
   */
  toggleSettingsCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.settingsCollapsed = collapsed;
    } else {
      this.settingsCollapsed = !this.settingsCollapsed;
    }

    // Track this interaction
    this.gtagService.trackEvent(
      'toggle_settings_section',
      this.settingsCollapsed ? 'collapsed' : 'expanded',
      'UI_INTERACTION'
    );
  }

  /**
   * Save current filter settings to localStorage using the StorageService
   */
  saveSettings(): void {
    // Use the storage service to save settings
    const result = this.storageService.saveSettings();

    if (result.success) {
      // Update UI state
      this.hasStoredSettings = true;
      this.lastSaved = result.timestamp
        ? this.formatDate(result.timestamp)
        : null;

      // Show success indicator
      this.showSaveSuccess = true;

      // Hide success indicator after 3 seconds
      setTimeout(() => {
        this.showSaveSuccess = false;
      }, 3000);

      // Track event (already done in service)
    }
  }

  /**
   * Load saved filter settings from localStorage using the StorageService
   */
  loadSettings(): void {
    // Use the storage service to load settings
    const result = this.storageService.loadSettings();

    if (result.success) {
      // Update last saved date if available
      if (result.timestamp) {
        this.lastSaved = this.formatDate(result.timestamp);
      }

      this.hasStoredSettings = true;

      // Handle version warnings if needed
      if (this.testVersionWarning || result.versionResult?.warningNeeded) {
        this.versionWarning =
          'Your settings were created with an older version of the app. Some new features may not be configured.';

        // Track version warning event
        this.gtagService.trackEvent(
          'version_warning_shown',
          'Settings loaded with minor version difference',
          'VERSION'
        );
      } else {
        this.versionWarning = null;
      }

      // Handle partial loading report
      if (result.loadingReport && result.loadingReport.totalSkipped > 0) {
        this.loadingReport = result.loadingReport;
        this.partialLoadWarning = `Some items (${result.loadingReport.totalSkipped}) could not be loaded and were skipped.`;

        // Auto-hide the partial load warning after 8 seconds
        setTimeout(() => {
          this.partialLoadWarning = null;
        }, 8000);
      } else {
        this.loadingReport = null;
        this.partialLoadWarning = null;
      }
    } else if (result.versionResult?.resetRequired) {
      // Handle incompatible versions
      this.clearSettings();

      // Track version incompatibility
      this.gtagService.trackEvent(
        'version_incompatible',
        'Settings reset due to major version difference',
        'VERSION'
      );
    }
  }

  /**
   * Reset all filters to default settings
   */
  clearSettings(): void {
    // Use the storage service to clear settings
    if (this.storageService.clearSettings()) {
      // Reset UI state
      this.hasStoredSettings = false;
      this.lastSaved = null;
      this.versionWarning = null;
      this.partialLoadWarning = null;
      this.loadingReport = null;
    }
  }

  /**
   * Clear localStorage without resetting current filters
   */
  clearStorage(): void {
    // Use the storage service to clear storage only
    if (this.storageService.clearStorage()) {
      // Update UI state
      this.hasStoredSettings = false;
      this.lastSaved = null;
      this.versionWarning = null;
      this.partialLoadWarning = null;
      this.loadingReport = null;
    }
  }

  /**
   * Check if there are stored settings in localStorage
   */
  private checkForStoredSettings(): void {
    this.hasStoredSettings = this.storageService.hasStoredSettings();
  }

  /**
   * Format ISO date string to more readable format
   */
  private formatDate(isoString: string): string {
    try {
      const date = new Date(isoString);
      return date.toLocaleString();
    } catch (e) {
      return isoString;
    }
  }

  /**
   * FOR DEVELOPMENT TESTING ONLY
   * Creates a mock loading report with random numbers of skipped items
   * and triggers the partial load warning display
   */
  testPartialLoadWarning(): void {
    // Create a mock loading report with random numbers
    this.loadingReport = {
      skippedItems: {
        warbond: Math.floor(Math.random() * 3),
        weapon: Math.floor(Math.random() * 5),
        stratagem: Math.floor(Math.random() * 4),
        booster: Math.floor(Math.random() * 2),
      },
      totalSkipped: 0, // Will be calculated below
    };

    // Calculate total skipped items
    this.loadingReport.totalSkipped =
      this.loadingReport.skippedItems.warbond +
      this.loadingReport.skippedItems.weapon +
      this.loadingReport.skippedItems.stratagem +
      this.loadingReport.skippedItems.booster;

    // Display the warning message
    this.partialLoadWarning = `Some items (${this.loadingReport.totalSkipped}) could not be loaded and were skipped.`;

    // Log the mock report for debugging
    console.log('TESTING: Mock Loading Report', this.loadingReport);

    // Auto-hide the warning after 8 seconds (same as in loadSettings)
    setTimeout(() => {
      this.partialLoadWarning = null;
    }, 8000);
  }

  /**
   * FOR DEVELOPMENT TESTING ONLY
   * Creates a mock loading report with specific skipped item counts
   * @param warbond Number of skipped warbond items
   * @param weapon Number of skipped weapon items
   * @param stratagem Number of skipped stratagem items
   * @param booster Number of skipped booster items
   * @param autoHide Whether to auto-hide the warning after 8 seconds
   */
  testPartialLoadWarningWithValues(
    warbond: number = 0,
    weapon: number = 0,
    stratagem: number = 0,
    booster: number = 0,
    autoHide: boolean = true
  ): void {
    // Create a mock loading report with specified numbers
    this.loadingReport = {
      skippedItems: {
        warbond,
        weapon,
        stratagem,
        booster,
      },
      totalSkipped: warbond + weapon + stratagem + booster,
    };

    // Only show warning if there are skipped items
    if (this.loadingReport.totalSkipped > 0) {
      this.partialLoadWarning = `Some items (${this.loadingReport.totalSkipped}) could not be loaded and were skipped.`;

      // Log the mock report for debugging
      console.log('TESTING: Custom Mock Loading Report', this.loadingReport);

      // Auto-hide the warning after 8 seconds if requested
      if (autoHide) {
        setTimeout(() => {
          this.partialLoadWarning = null;
        }, 8000);
      }
    }
  }
}
