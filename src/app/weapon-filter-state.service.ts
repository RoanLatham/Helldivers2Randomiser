import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeaponFilterStateService {
  //BehaviorSubject for individual Weapons the user dissabled
  private disabledIds = new BehaviorSubject<number[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableWeapon(id: number) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableWeapon(id: number) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  toggleWeapon(id: number) {
    if (this.disabledIds.value.includes(id)) {
      this.enableWeapon(id);
    } else {
      this.disableWeapon(id);
    }

    console.log('Weapon filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  //TODO Catergory toggles will proabbly go here, take name of acategor as paramater? iterate throguh weapons.ts, each weapon in the category has its ID added to teh dissabled IDS list

}
