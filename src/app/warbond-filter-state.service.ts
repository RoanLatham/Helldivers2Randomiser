import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoosterFilterStateService } from './booster-filter-state.service';
import { WeaponFilterStateService } from './weapon-filter-state.service';
import { Warbond, warbonds } from './warbonds';

@Injectable({
  providedIn: 'root',
})
export class WarbondFilterStateService {
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

  isWarbondDisabled(warbond: Warbond): boolean {
    return (
      warbond.PrimaryWeaponIds.every((id) =>
        this.weaponDisabledIds.includes(id)
      ) &&
      warbond.SecondaryWeaponIds.every((id) =>
        this.weaponDisabledIds.includes(id)
      ) &&
      warbond.GrenadeIds.every((id) => this.weaponDisabledIds.includes(id)) &&
      warbond.BoosterIds.every((id) => this.boosterDisabledIds.includes(id))
    );
  }

  checkDisabledWarbonds(): void {
    let disabledWarbondIds: number[] = [];

    // Check each warbond
    this.warbonds.forEach((warbond) => {
      if (this.isWarbondDisabled(warbond)) {
        disabledWarbondIds.push(warbond.id);
      }
    });

    // Update the BehaviorSubject with the new list of disabled warbond IDs
    this.disabledIds.next(disabledWarbondIds);
  }

  // Toggle warbond
  toggleWarbond(id: number): void {
    // Find the warbond by ID
    const warbond = this.warbonds.find((w) => w.id === id);
    if (!warbond) {
      console.error('Warbond not found');
      return;
    }

    // Check if the warbond is currently disabled
    const isWarbondDisabled = this.isWarbondDisabled(warbond);

    if (isWarbondDisabled) {
      // If the warbond is disabled, enable all children
      warbond.PrimaryWeaponIds.forEach((wId) =>
        this.weaponState.enableWeapon(wId)
      );
      warbond.SecondaryWeaponIds.forEach((wId) =>
        this.weaponState.enableWeapon(wId)
      );
      warbond.GrenadeIds.forEach((wId) => this.weaponState.enableWeapon(wId));
      warbond.BoosterIds.forEach((bId) => this.boosterState.enableBooster(bId));
    } else {
      // If the warbond is enabled, disable all children
      warbond.PrimaryWeaponIds.forEach((wId) =>
        this.weaponState.disableWeapon(wId)
      );
      warbond.SecondaryWeaponIds.forEach((wId) =>
        this.weaponState.disableWeapon(wId)
      );
      warbond.GrenadeIds.forEach((wId) => this.weaponState.disableWeapon(wId));
      warbond.BoosterIds.forEach((bId) =>
        this.boosterState.disableBooster(bId)
      );
    }

    // Update the list of disabled warbonds
    this.checkDisabledWarbonds();
  }
}
