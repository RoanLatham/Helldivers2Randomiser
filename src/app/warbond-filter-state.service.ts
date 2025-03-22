import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoosterFilterStateService } from './booster-filter-state.service';
import { WeaponFilterStateService } from './weapon-filter-state.service';
import { StratagemFilterStateService } from './stratagem-filter-state.service';
import { Warbond, warbonds, getWarbondById } from './warbonds';
import { getWarbondContent } from './data-relationships';
import { Weapon } from './weapons';
import { Stratagem } from './stratagems';
import { Booster } from './boosters';

@Injectable({
  providedIn: 'root',
})
export class WarbondFilterStateService {
  boosterDisabledIds: string[] = [];
  weaponDisabledIds: string[] = [];
  stratagemDisabledIds: string[] = [];

  constructor(
    private boosterState: BoosterFilterStateService,
    private weaponState: WeaponFilterStateService,
    private stratagemState: StratagemFilterStateService
  ) {
    // Initialize services and setup subscriptions
    this.initializeServices();
  }

  private initializeServices(): void {
    // Subscribe to weapon state
    this.weaponState.disabledIds$.subscribe((ids) => {
      this.weaponDisabledIds = ids;
      this.checkDisabledWarbonds();
    });

    // Subscribe to stratagem state
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.stratagemDisabledIds = ids;
      this.checkDisabledWarbonds();
    });

    // Subscribe to booster state
    this.boosterState.disabledIds$.subscribe((ids) => {
      this.boosterDisabledIds = ids;
      this.checkDisabledWarbonds();
    });
  }

  private disabledIds = new BehaviorSubject<string[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  isWarbondDisabled(warbondId: string): boolean {
    return this.disabledIds.value.includes(warbondId);
  }

  // Check if all weapons/stratagems/boosters from a warbond are disabled
  checkDisabledWarbonds(): void {
    // For each warbond, check if all its items are disabled
    const disabledWarbondIds = warbonds
      .map((warbond: Warbond) => {
        // Get all items from this warbond
        const content = getWarbondContent(warbond.id);
        if (!content) return null;

        // Check if all weapons/stratagems/boosters from this warbond are disabled
        const allWeaponIds = [
          ...content.primaryWeapons.map((w) => w.id),
          ...content.secondaryWeapons.map((w) => w.id),
          ...content.throwableWeapons.map((w) => w.id),
        ];

        // If the warbond has any items and all of them are disabled, the warbond is disabled
        const hasItems =
          allWeaponIds.length > 0 ||
          content.stratagems.length > 0 ||
          content.boosters.length > 0;

        const allItemsDisabled =
          (!allWeaponIds.length ||
            allWeaponIds.every((id) => this.weaponDisabledIds.includes(id))) &&
          (!content.stratagems.length ||
            content.stratagems.every((s) =>
              this.stratagemDisabledIds.includes(s.id)
            )) &&
          (!content.boosters.length ||
            content.boosters.every((b) =>
              this.boosterDisabledIds.includes(b.id)
            ));

        return hasItems && allItemsDisabled ? warbond.id : null;
      })
      .filter((id): id is string => id !== null);

    // Update the list of disabled warbonds
    this.disabledIds.next(disabledWarbondIds);
  }

  // Toggle warbond
  toggleWarbond(id: string): void {
    // Find the warbond by ID
    const warbond = getWarbondById(id);
    if (!warbond) {
      console.error('Warbond not found');
      return;
    }

    // Check if the warbond is currently disabled
    const isWarbondDisabled = this.isWarbondDisabled(id);

    // Get all items from this warbond
    const content = getWarbondContent(id);
    if (!content) {
      console.error('Warbond content not found');
      return;
    }

    if (isWarbondDisabled) {
      // If the warbond is disabled, enable all children
      const allWeaponIds = [
        ...content.primaryWeapons.map((w: Weapon) => w.id),
        ...content.secondaryWeapons.map((w: Weapon) => w.id),
        ...content.throwableWeapons.map((w: Weapon) => w.id),
      ];

      allWeaponIds.forEach((weaponId) =>
        this.weaponState.enableWeapon(weaponId)
      );
      content.stratagems.forEach((s: Stratagem) =>
        this.stratagemState.enableStratagem(s.id)
      );
      content.boosters.forEach((b: Booster) =>
        this.boosterState.enableBooster(b.id)
      );
    } else {
      // If the warbond is enabled, disable all children
      const allWeaponIds = [
        ...content.primaryWeapons.map((w: Weapon) => w.id),
        ...content.secondaryWeapons.map((w: Weapon) => w.id),
        ...content.throwableWeapons.map((w: Weapon) => w.id),
      ];

      allWeaponIds.forEach((weaponId) =>
        this.weaponState.disableWeapon(weaponId)
      );
      content.stratagems.forEach((s: Stratagem) =>
        this.stratagemState.disableStratagem(s.id)
      );
      content.boosters.forEach((b: Booster) =>
        this.boosterState.disableBooster(b.id)
      );
    }

    // Update the list of disabled warbonds
    this.checkDisabledWarbonds();
  }

  // Serialization for local storage
  getState(): any {
    return {
      disabledIds: this.disabledIds.value,
    };
  }

  // Load from serialized state
  setState(state: any): void {
    if (!state) return;

    try {
      // Fast path - try to set all disabled IDs at once
      if (state.disabledIds) {
        this.disabledIds.next(state.disabledIds);
      }
    } catch (error) {
      console.warn(
        'Error loading warbond filter state, attempting per-item loading:',
        error
      );

      // Fallback - load IDs one by one, skipping invalid ones
      if (state.disabledIds && Array.isArray(state.disabledIds)) {
        const validIds: string[] = [];
        const skippedIds: string[] = [];

        // Process each ID individually
        for (const id of state.disabledIds) {
          try {
            // Validate the ID (must be a string and exist in our data)
            if (typeof id === 'string') {
              validIds.push(id);
            } else {
              skippedIds.push(String(id));
            }
          } catch (itemError) {
            skippedIds.push(String(id));
            console.warn(`Skipped invalid warbond ID: ${id}`, itemError);
          }
        }

        // Update state with valid IDs only
        if (validIds.length > 0 || this.disabledIds.value.length > 0) {
          this.disabledIds.next(validIds);
        }

        // Log information about skipped items
        if (skippedIds.length > 0) {
          console.info(
            `Skipped ${skippedIds.length} invalid warbond IDs during load`
          );
        }
      }
    }

    // Check for updates to weapon, stratagem, and booster filters
    // This is kept as-is to maintain existing logic
    this.checkDisabledWarbonds();
  }

  // Reset to default values
  resetState(): void {
    this.disabledIds.next([]);
    this.boosterDisabledIds = [];
    this.weaponDisabledIds = [];
    this.stratagemDisabledIds = [];
  }
}
