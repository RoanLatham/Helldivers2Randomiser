import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booster, boosters } from './boosters';

@Injectable({
  providedIn: 'root',
})
export class BoosterFilterStateService {
  //BehaviorSubject for individual Boosters the user dissabled
  private disabledIds = new BehaviorSubject<number[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableBooster(id: number) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableBooster(id: number) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  disableBoosters(ids: number[]) {
    let newDisabledIds = new Set([...this.disabledIds.value, ...ids]);
    this.disabledIds.next(Array.from(newDisabledIds));
  }

  enableBoosters(ids: number[]) {
    let newDisabledIds = new Set(this.disabledIds.value);
    ids.forEach(id => newDisabledIds.delete(id));
    this.disabledIds.next(Array.from(newDisabledIds));
  }

  toggleBooster(id: number) {
    if (this.disabledIds.value.includes(id)) {
      this.enableBooster(id);
    } else {
      this.disableBooster(id);
    }

    console.log(
      'booster filter service: dissabled IDs: ' + this.disabledIds.value
    );
  }
}
