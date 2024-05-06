import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StratagemFilterStateService {
  //BehaviorSubject for individual stratagems the user dissabled
  private disabledIds = new BehaviorSubject<number[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableStratagem(id: number) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableStratagem(id: number) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  toggleStratagem(id: number) {
    if (this.disabledIds.value.includes(id)) {
      this.enableStratagem(id);
    } else {
      this.disableStratagem(id);
    }

    console.log("filter service: dissabled IDs: " + this.disabledIds.value)
  }

  //BehaviorSubject for the onlyOneBackpack setting
  private onlyOneBackpack = new BehaviorSubject<boolean>(false);
  onlyOneBackpack$ = this.onlyOneBackpack.asObservable();

  setOnlyOneBackpack(value: boolean) {
    this.onlyOneBackpack.next(value);
  }
}
