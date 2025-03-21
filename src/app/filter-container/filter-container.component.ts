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

// Storage key for localStorage
const FILTER_SETTINGS_KEY = 'helldivers2-loadout-filter-settings';

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

  constructor(
    private warbondFilterState: WarbondFilterStateService,
    private weaponFilterState: WeaponFilterStateService,
    private stratagemFilterState: StratagemFilterStateService,
    private boosterFilterState: BoosterFilterStateService,
    private gtagService: GtagService
  ) {}

  ngOnInit(): void {
    // Check if there are stored settings
    this.checkForStoredSettings();

    // Load settings from localStorage if they exist
    this.loadSettings();
  }

  toggleFiltersCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.filtersCollapsed = collapsed;
    } else {
      this.filtersCollapsed = !this.filtersCollapsed;
    }
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
  }

  /**
   * Save current filter settings to localStorage
   */
  saveSettings(): void {
    try {
      // Collect state from all filter services
      const settings = {
        timestamp: new Date().toISOString(), // Add a timestamp
        warbond: this.warbondFilterState.getState(),
        weapon: this.weaponFilterState.getState(),
        stratagem: this.stratagemFilterState.getState(),
        booster: this.boosterFilterState.getState(),
      };

      // Save to localStorage
      localStorage.setItem(FILTER_SETTINGS_KEY, JSON.stringify(settings));

      // Update UI state
      const timestamp = settings.timestamp;
      this.hasStoredSettings = true;
      this.lastSaved = this.formatDate(timestamp);

      // Show success indicator with smooth animation
      this.showSaveSuccess = true;

      // Hide success indicator after 3 seconds
      setTimeout(() => {
        this.showSaveSuccess = false;
      }, 3000);

      // Track event
      this.gtagService.trackEvent(
        'save_filter_settings',
        'User saved filter settings to localStorage',
        'FILTERS'
      );
    } catch (error) {
      console.error('Failed to save settings to localStorage:', error);
    }
  }

  /**
   * Load saved filter settings from localStorage
   */
  loadSettings(): void {
    try {
      const settingsJson = localStorage.getItem(FILTER_SETTINGS_KEY);
      if (!settingsJson) return;

      const settings = JSON.parse(settingsJson);

      // Update last saved date if available
      if (settings.timestamp) {
        this.lastSaved = this.formatDate(settings.timestamp);
      }

      // Apply settings to each service
      this.warbondFilterState.setState(settings.warbond);
      this.weaponFilterState.setState(settings.weapon);
      this.stratagemFilterState.setState(settings.stratagem);
      this.boosterFilterState.setState(settings.booster);

      this.hasStoredSettings = true;

      // Track event
      this.gtagService.trackEvent(
        'load_filter_settings',
        'Filter settings loaded from localStorage',
        'FILTERS'
      );
    } catch (error) {
      console.error('Failed to load settings from localStorage:', error);
    }
  }

  /**
   * Clear saved filter settings from localStorage
   */
  clearSettings(): void {
    try {
      // Remove from localStorage
      localStorage.removeItem(FILTER_SETTINGS_KEY);

      // Reset all services to default state
      this.warbondFilterState.resetState();
      this.weaponFilterState.resetState();
      this.stratagemFilterState.resetState();
      this.boosterFilterState.resetState();

      this.hasStoredSettings = false;
      this.lastSaved = null;

      // Track event
      this.gtagService.trackEvent(
        'clear_filter_settings',
        'User cleared saved filter settings',
        'FILTERS'
      );
    } catch (error) {
      console.error('Failed to clear settings:', error);
    }
  }

  /**
   * Clear only the localStorage without resetting current filters
   */
  clearStorage(): void {
    try {
      // Remove from localStorage
      localStorage.removeItem(FILTER_SETTINGS_KEY);

      this.hasStoredSettings = false;
      this.lastSaved = null;

      // Track event
      this.gtagService.trackEvent(
        'clear_filter_storage',
        'User cleared saved filter storage without resetting filters',
        'FILTERS'
      );
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  }

  /**
   * Check if there are any saved settings in localStorage
   */
  private checkForStoredSettings(): void {
    this.hasStoredSettings = !!localStorage.getItem(FILTER_SETTINGS_KEY);
  }

  /**
   * Format ISO date to a more readable format
   */
  private formatDate(isoString: string): string {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    } catch (e) {
      return isoString;
    }
  }
}
