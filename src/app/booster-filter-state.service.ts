import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booster } from './boosters';

@Injectable({
  providedIn: 'root',
})
export class BoosterFilterStateService {
  //BehaviorSubject for individual Boosters the user disabled
  private disabledIds = new BehaviorSubject<string[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableBooster(id: string) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableBooster(id: string) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  disableBoosters(ids: string[]) {
    let newDisabledIds = new Set([...this.disabledIds.value, ...ids]);
    this.disabledIds.next(Array.from(newDisabledIds));
  }

  enableBoosters(ids: string[]) {
    let newDisabledIds = new Set(this.disabledIds.value);
    ids.forEach((id) => newDisabledIds.delete(id));
    this.disabledIds.next(Array.from(newDisabledIds));
  }

  toggleBooster(id: string) {
    if (this.disabledIds.value.includes(id)) {
      this.enableBooster(id);
    } else {
      this.disableBooster(id);
    }

    // console.log(
    //   'Booster filter service: dissabled IDs: ' + this.disabledIds.value
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
        'Error loading booster filter state, attempting per-item loading:',
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
            console.warn(`Skipped invalid booster ID: ${id}`, itemError);
          }
        }

        // Update state with valid IDs only
        if (validIds.length > 0 || this.disabledIds.value.length > 0) {
          this.disabledIds.next(validIds);
        }

        // Log information about skipped items
        if (skippedIds.length > 0) {
          console.info(
            `Skipped ${skippedIds.length} invalid booster IDs during load`
          );
        }
      }
    }
  }

  // Reset to default values
  resetState(): void {
    this.disabledIds.next([]);
  }
}
