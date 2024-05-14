import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap } from 'rxjs';
import { primaryWeapons, secondaryWeapons, grenades } from './weapons';

@Injectable({
  providedIn: 'root',
})
export class WeaponFilterStateService {
  // BehaviorSubject for individual Weapons the user disabled
  private disabledIds = new BehaviorSubject<number[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableWeapon(id: number) {
    this.disabledIds.next([...this.disabledIds.value, id]);
    // console.log('Weapon filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  enableWeapon(id: number) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
    // console.log('Weapon filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  toggleWeapon(id: number) {
    if (this.disabledIds.value.includes(id)) {
      this.enableWeapon(id);
    } else {
      this.disableWeapon(id);
    }

    // console.log('Weapon filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  disableCategory(category: string): void {
    const categoryWeaponIds = [
      ...primaryWeapons.filter(weapon => weapon.category === category).map(weapon => weapon.id),
      ...secondaryWeapons.filter(weapon => weapon.category === category).map(weapon => weapon.id),
      ...grenades.filter(weapon => weapon.category === category).map(weapon => weapon.id)
    ];

    // Ensure no duplicates when adding to disabledIds
    this.disabledIds.next([...new Set([...this.disabledIds.value, ...categoryWeaponIds])]);
  }

  enableCategory(category: string): void {
    const categoryWeaponIds = [
      ...primaryWeapons.filter(weapon => weapon.category === category).map(weapon => weapon.id),
      ...secondaryWeapons.filter(weapon => weapon.category === category).map(weapon => weapon.id),
      ...grenades.filter(weapon => weapon.category === category).map(weapon => weapon.id)
    ];

    // Remove the IDs of the enabled category from disabledIds
    this.disabledIds.next(this.disabledIds.value.filter(id => !categoryWeaponIds.includes(id)));
  }

  toggleCategory(category: string): void {
    // console.log('Weapon Filter Service: Attempting to toggle category: ' + category);

    const categoryWeaponIds = [
      ...primaryWeapons.filter(weapon => weapon.category === category).map(weapon => weapon.id),
      ...secondaryWeapons.filter(weapon => weapon.category === category).map(weapon => weapon.id),
      ...grenades.filter(weapon => weapon.category === category).map(weapon => weapon.id)
    ];

    console.log(categoryWeaponIds);

    // Check if the category is currently disabled
    const isDisabled = categoryWeaponIds.every(id => this.disabledIds.value.includes(id));

    console.log(isDisabled);
    // Toggle the state based on the current state
    if (isDisabled) {
      this.enableCategory(category);
    } else {
      this.disableCategory(category);
    }

    // console.log('Weapon filter service: dissabled IDs: ' + this.disabledIds.value);
  }
}
