import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stratagem } from './stratagems';
import { getStratagemsByShipModule } from './data-access';

@Injectable({
  providedIn: 'root',
})
export class StratagemFilterStateService {
  //BehaviorSubject for individual stratagems the user dissabled
  private disabledIds = new BehaviorSubject<string[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableStratagem(id: string) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableStratagem(id: string) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  toggleStratagem(id: string) {
    if (this.disabledIds.value.includes(id)) {
      this.enableStratagem(id);
    } else {
      this.disableStratagem(id);
    }

    // console.log('stratagem filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  //BehaviorSubject for the onlyOneBackpack setting
  private onlyOneBackpack = new BehaviorSubject<boolean>(false);
  onlyOneBackpack$ = this.onlyOneBackpack.asObservable();

  setOnlyOneBackpack(value: boolean) {
    // console.log('setting only one backpack: ' + value);
    this.onlyOneBackpack.next(value);

    // If turning off onlyOneBackpack, also turn off guaranteeBackpack
    if (!value) {
      this.setGuaranteeBackpack(false);
    }
  }

  toggleOnlyOneBackpack() {
    const currentValue = this.onlyOneBackpack.value;
    this.setOnlyOneBackpack(!currentValue);
    // console.log('Strategem Filter Service: onlyOneBackpack is: '+ this.onlyOneBackpack.value)
  }

  //BehaviorSubject for the guaranteeBackpack setting
  private guaranteeBackpack = new BehaviorSubject<boolean>(false);
  guaranteeBackpack$ = this.guaranteeBackpack.asObservable();

  setGuaranteeBackpack(value: boolean) {
    // console.log('setting guarantee backpack: ' + value);
    // If enabling guarantee, ensure onlyOne is also enabled
    if (value && !this.onlyOneBackpack.value) {
      this.setOnlyOneBackpack(true);
    }
    this.guaranteeBackpack.next(value);
  }

  toggleGuaranteeBackpack() {
    const currentValue = this.guaranteeBackpack.value;
    this.setGuaranteeBackpack(!currentValue);
  }

  //BehaviorSubject for the onlyOneSupport setting
  private onlyOneSupport = new BehaviorSubject<boolean>(false);
  onlyOneSupport$ = this.onlyOneSupport.asObservable();

  setOnlyOneSupport(value: boolean) {
    // console.log('setting only one support: ' + value);
    this.onlyOneSupport.next(value);

    // If turning off onlyOneSupport, also turn off guaranteeSupport
    if (!value) {
      this.setGuaranteeSupport(false);
    }
  }

  toggleOnlyOneSupport() {
    const currentValue = this.onlyOneSupport.value;
    this.setOnlyOneSupport(!currentValue);
    // console.log('Strategem Filter Service: onlyOneSupport is: '+ this.onlyOneSupport.value)
  }

  //BehaviorSubject for the guaranteeSupport weapon setting
  private guaranteeSupport = new BehaviorSubject<boolean>(false);
  guaranteeSupport$ = this.guaranteeSupport.asObservable();

  setGuaranteeSupport(value: boolean) {
    // console.log('setting guarantee support: ' + value);
    // If enabling guarantee, ensure onlyOne is also enabled
    if (value && !this.onlyOneSupport.value) {
      this.setOnlyOneSupport(true);
    }
    this.guaranteeSupport.next(value);
  }

  toggleGuaranteeSupport() {
    const currentValue = this.guaranteeSupport.value;
    this.setGuaranteeSupport(!currentValue);
  }

  // Serialization for local storage
  getState(): any {
    return {
      disabledIds: this.disabledIds.value,
      onlyOneBackpack: this.onlyOneBackpack.value,
      guaranteeBackpack: this.guaranteeBackpack.value,
      onlyOneSupport: this.onlyOneSupport.value,
      guaranteeSupport: this.guaranteeSupport.value,
    };
  }

  // Load from serialized state
  setState(state: any): void {
    if (!state) return;

    try {
      // Fast path - try to set all settings at once
      if (state.disabledIds) {
        this.disabledIds.next(state.disabledIds);
      }

      // Load checkbox states
      if (state.onlyOneBackpack !== undefined) {
        this.onlyOneBackpack.next(state.onlyOneBackpack);
      }

      if (state.guaranteeBackpack !== undefined) {
        this.guaranteeBackpack.next(state.guaranteeBackpack);
      }

      if (state.onlyOneSupport !== undefined) {
        this.onlyOneSupport.next(state.onlyOneSupport);
      }

      if (state.guaranteeSupport !== undefined) {
        this.guaranteeSupport.next(state.guaranteeSupport);
      }
    } catch (error) {
      console.warn(
        'Error loading stratagem filter state, attempting per-item loading:',
        error
      );

      // Fallback for disabled IDs - load one by one
      if (state.disabledIds && Array.isArray(state.disabledIds)) {
        const validIds: string[] = [];
        const skippedIds: string[] = [];

        // Process each ID individually
        for (const id of state.disabledIds) {
          try {
            // Validate the ID (must be a string)
            if (typeof id === 'string') {
              validIds.push(id);
            } else {
              skippedIds.push(String(id));
            }
          } catch (itemError) {
            skippedIds.push(String(id));
            console.warn(`Skipped invalid stratagem ID: ${id}`, itemError);
          }
        }

        // Update state with valid IDs only
        if (validIds.length > 0 || this.disabledIds.value.length > 0) {
          this.disabledIds.next(validIds);
        }

        // Log information about skipped items
        if (skippedIds.length > 0) {
          console.info(
            `Skipped ${skippedIds.length} invalid stratagem IDs during load`
          );
        }
      }

      // Safe fallback for checkbox states
      try {
        if (
          state.onlyOneBackpack !== undefined &&
          typeof state.onlyOneBackpack === 'boolean'
        ) {
          this.onlyOneBackpack.next(state.onlyOneBackpack);
        }
      } catch (e) {
        console.warn('Error loading onlyOneBackpack setting', e);
      }

      try {
        if (
          state.guaranteeBackpack !== undefined &&
          typeof state.guaranteeBackpack === 'boolean'
        ) {
          this.guaranteeBackpack.next(state.guaranteeBackpack);
        }
      } catch (e) {
        console.warn('Error loading guaranteeBackpack setting', e);
      }

      try {
        if (
          state.onlyOneSupport !== undefined &&
          typeof state.onlyOneSupport === 'boolean'
        ) {
          this.onlyOneSupport.next(state.onlyOneSupport);
        }
      } catch (e) {
        console.warn('Error loading onlyOneSupport setting', e);
      }

      try {
        if (
          state.guaranteeSupport !== undefined &&
          typeof state.guaranteeSupport === 'boolean'
        ) {
          this.guaranteeSupport.next(state.guaranteeSupport);
        }
      } catch (e) {
        console.warn('Error loading guaranteeSupport setting', e);
      }
    }
  }

  // Reset to default values
  resetState(): void {
    this.disabledIds.next([]);
    this.setOnlyOneBackpack(false);
    this.setGuaranteeBackpack(false);
    this.setOnlyOneSupport(false);
    this.setGuaranteeSupport(false);
  }
}
