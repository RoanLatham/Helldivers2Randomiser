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

    if (state.disabledIds) {
      this.disabledIds.next(state.disabledIds);
    }
  }

  // Reset to default values
  resetState(): void {
    this.disabledIds.next([]);
  }
}
