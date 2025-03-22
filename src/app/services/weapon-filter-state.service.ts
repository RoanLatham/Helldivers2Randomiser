import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap } from 'rxjs';
import { Weapon } from './weapons';
import { getWeaponsByCategory, getWeaponsByType } from './data-access';

@Injectable({
  providedIn: 'root',
})
export class WeaponFilterStateService {
  private categoryWeaponIdsCache: Record<string, string[]> = {};

  // BehaviorSubject for individual Weapons the user disabled
  private disabledIds = new BehaviorSubject<string[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableWeapon(id: string) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableWeapon(id: string) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  toggleWeapon(id: string) {
    if (this.disabledIds.value.includes(id)) {
      this.enableWeapon(id);
    } else {
      this.disableWeapon(id);
    }

    // console.log(
    //   'Weapon filter service: dissabled IDs: ' + this.disabledIds.value
    // );
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
        'Error loading weapon filter state, attempting per-item loading:',
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
            console.warn(`Skipped invalid weapon ID: ${id}`, itemError);
          }
        }

        // Update state with valid IDs only
        if (validIds.length > 0 || this.disabledIds.value.length > 0) {
          this.disabledIds.next(validIds);
        }

        // Log information about skipped items
        if (skippedIds.length > 0) {
          console.info(
            `Skipped ${skippedIds.length} invalid weapon IDs during load`
          );
        }
      }
    }
  }

  // Reset to default values
  resetState(): void {
    this.disabledIds.next([]);
  }

  // Get all weapon IDs for a specific category and type
  getCategoryWeaponIds(
    category: string,
    type?: 'Primary' | 'Secondary' | 'Throwable'
  ): string[] {
    // Create a cache key that includes both category and type if provided
    const cacheKey = type ? `${type}_${category}` : category;

    // Cache the result to avoid repeated filtering
    if (!this.categoryWeaponIdsCache[cacheKey]) {
      // Get all weapons of the specified category
      let weapons = getWeaponsByCategory(category);

      // If type is specified, filter further by type
      if (type) {
        weapons = weapons.filter((weapon) => weapon.type === type);
      }

      this.categoryWeaponIdsCache[cacheKey] = weapons.map(
        (weapon) => weapon.id
      );
    }
    return this.categoryWeaponIdsCache[cacheKey];
  }

  disableCategory(
    category: string,
    type?: 'Primary' | 'Secondary' | 'Throwable'
  ): void {
    const categoryWeaponIds = this.getCategoryWeaponIds(category, type);

    // Ensure no duplicates when adding to disabledIds
    this.disabledIds.next([
      ...new Set([...this.disabledIds.value, ...categoryWeaponIds]),
    ]);
  }

  enableCategory(
    category: string,
    type?: 'Primary' | 'Secondary' | 'Throwable'
  ): void {
    const categoryWeaponIds = this.getCategoryWeaponIds(category, type);

    // Remove the IDs of the enabled category from disabledIds
    this.disabledIds.next(
      this.disabledIds.value.filter((id) => !categoryWeaponIds.includes(id))
    );
  }

  toggleCategory(
    category: string,
    type?: 'Primary' | 'Secondary' | 'Throwable'
  ): void {
    const categoryWeaponIds = this.getCategoryWeaponIds(category, type);

    // Check if the category is currently disabled
    const isDisabled = categoryWeaponIds.every((id) =>
      this.disabledIds.value.includes(id)
    );

    // Toggle the state based on the current state
    if (isDisabled) {
      this.enableCategory(category, type);
    } else {
      this.disableCategory(category, type);
    }
  }
}
