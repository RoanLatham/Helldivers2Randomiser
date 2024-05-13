import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoosterFilterStateService } from './booster-filter-state.service';
import { WeaponFilterStateService } from './weapon-filter-state.service';
import { Warbond, warbonds } from './warbonds';

@Injectable({
  providedIn: 'root',
})
export class WarbondFilterStateService {
  //Keep track of all dissabled boosters adn weapons for displaying dissabled warbonds dynamilcally
  boosterDisabledIds: number[] = [];
  weaponDisabledIds: number[] = [];

  constructor(
    private boosterState: BoosterFilterStateService,
    private weaponState: WeaponFilterStateService
  ) {
    // Subscribe to the disabledIds$ observable for boosters
    this.boosterState.disabledIds$.subscribe((ids) => {
      this.boosterDisabledIds = ids;
      this.checkDisabledWarbonds();
    });

    // Subscribe to the disabledIds$ observable for weapons
    this.weaponState.disabledIds$.subscribe((ids) => {
      this.weaponDisabledIds = ids;
      this.checkDisabledWarbonds();
    });
  }

  warbonds = warbonds;

  // BehaviorSubject for individual Warbonds the user disabled
  private disabledIds = new BehaviorSubject<number[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  checkDisabledWarbonds(): void {
    let disabledWarbondIds: number[] = [];

    // Check each warbond
    this.warbonds.forEach((warbond) => {
      // Check if all weapons and boosters of this warbond are disabled
      const isWarbondDisabled =
        warbond.WeaponIds.every((id) => this.weaponDisabledIds.includes(id)) &&
        warbond.BoosterIds.every((id) => this.boosterDisabledIds.includes(id));

      if (isWarbondDisabled) {
        disabledWarbondIds.push(warbond.id);
      }

      // console.log('warbond: ' + warbond.name + ' is ' + isWarbondDisabled);
      // console.log(
      //   warbond.WeaponIds.every((id) => this.weaponDisabledIds.includes(id))
      // );
      // console.log(
      //   warbond.BoosterIds.every((id) => this.boosterDisabledIds.includes(id))
      // );
    });

    // Update the BehaviorSubject with the new list of disabled warbond IDs
    this.disabledIds.next(disabledWarbondIds);
    // console.log(
    //   'Warbond filter service: Disabled warbonds:' + this.disabledIds.value
    // );
  }

  // Toggle warbond,
  // If all children are enabled, dissable all
  // If only some chileren are enabled, still dissable all
  // If all children are  dissabled already, enable all
  // Warbond icons should also appear dissabed only when all chidldren are dissabled,
  // even if they were all disabbled manually

  // Toggle warbond
  toggleWarbond(id: number): void {
    // Find the warbond by ID
    const warbond = this.warbonds.find((w) => w.id === id);
    if (!warbond) {
      console.error('Warbond not found');
      return;
    }

    // Check if all children (weapons and boosters) are currently disabled
    const allWeaponsDisabled = warbond.WeaponIds.every((wId) =>
      this.weaponDisabledIds.includes(wId)
    );
    const allBoostersDisabled = warbond.BoosterIds.every((bId) =>
      this.boosterDisabledIds.includes(bId)
    );

    if (allWeaponsDisabled && allBoostersDisabled) {
      // If all children are disabled, enable all
      warbond.WeaponIds.forEach((wId) => this.weaponState.enableWeapon(wId));
      warbond.BoosterIds.forEach((bId) => this.boosterState.enableBooster(bId));
    } else {
      // If any child is enabled, disable all
      warbond.WeaponIds.forEach((wId) => this.weaponState.disableWeapon(wId));
      warbond.BoosterIds.forEach((bId) =>
        this.boosterState.disableBooster(bId)
      );
    }

    // Update the list of disabled warbonds
    this.checkDisabledWarbonds();
  }
}
