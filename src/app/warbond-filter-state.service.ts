import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoosterFilterStateService } from './booster-filter-state.service';
import { WeaponFilterStateService } from './weapon-filter-state.service';
import { StratagemFilterStateService } from './stratagem-filter-state.service';
import { Warbond, warbonds, getWarbondById } from './new-warbonds';
import { Weapon } from './new-weapons';
import { Stratagem } from './new-stratagems';
import { Booster } from './boosters';
import { getWarbondContent } from './data-relationships';

@Injectable({
  providedIn: 'root',
})
export class WarbondFilterStateService {
  boosterDisabledIds: string[] = [];
  weaponDisabledIds: string[] = [];
  stratagemDisabledIds: string[] = [];

  constructor(
    private boosterState: BoosterFilterStateService,
    private weaponState: WeaponFilterStateService,
    private stratagemState: StratagemFilterStateService
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

    // Subscribe to the disabledIds$ observable for stratagems
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.stratagemDisabledIds = ids;
      this.checkDisabledWarbonds();
    });
  }

  // BehaviorSubject for individual Warbonds the user disabled
  private disabledIds = new BehaviorSubject<string[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  isWarbondDisabled(warbondId: string): boolean {
    const content = getWarbondContent(warbondId);
    if (!content) return false;

    // Check if all weapons, stratagems, and boosters of this warbond are disabled
    const allWeaponsDisabled = [
      ...content.primaryWeapons,
      ...content.secondaryWeapons,
      ...content.throwableWeapons,
    ].every((weapon: Weapon) => this.weaponDisabledIds.includes(weapon.id));

    const allStratagemsDisabled = content.stratagems.every(
      (stratagem: Stratagem) => this.stratagemDisabledIds.includes(stratagem.id)
    );

    const allBoostersDisabled = content.boosters.every((booster: Booster) =>
      this.boosterDisabledIds.includes(booster.id)
    );

    // A warbond is considered disabled if all its items are disabled
    return allWeaponsDisabled && allStratagemsDisabled && allBoostersDisabled;
  }

  checkDisabledWarbonds(): void {
    let disabledWarbondIds: string[] = [];

    // Check each warbond
    warbonds.forEach((warbond) => {
      if (this.isWarbondDisabled(warbond.id)) {
        disabledWarbondIds.push(warbond.id);
      }
    });

    // Update the BehaviorSubject with the new list of disabled warbond IDs
    this.disabledIds.next(disabledWarbondIds);
  }

  // Toggle warbond
  toggleWarbond(id: string): void {
    // Find the warbond by ID
    const warbond = getWarbondById(id);
    if (!warbond) {
      console.error('Warbond not found');
      return;
    }

    // Check if the warbond is currently disabled
    const isWarbondDisabled = this.isWarbondDisabled(id);

    // Get all items from this warbond
    const content = getWarbondContent(id);
    if (!content) {
      console.error('Warbond content not found');
      return;
    }

    if (isWarbondDisabled) {
      // If the warbond is disabled, enable all children
      const allWeaponIds = [
        ...content.primaryWeapons.map((w: Weapon) => w.id),
        ...content.secondaryWeapons.map((w: Weapon) => w.id),
        ...content.throwableWeapons.map((w: Weapon) => w.id),
      ];

      allWeaponIds.forEach((weaponId) =>
        this.weaponState.enableWeapon(weaponId)
      );
      content.stratagems.forEach((s: Stratagem) =>
        this.stratagemState.enableStratagem(s.id)
      );
      content.boosters.forEach((b: Booster) =>
        this.boosterState.enableBooster(b.id)
      );
    } else {
      // If the warbond is enabled, disable all children
      const allWeaponIds = [
        ...content.primaryWeapons.map((w: Weapon) => w.id),
        ...content.secondaryWeapons.map((w: Weapon) => w.id),
        ...content.throwableWeapons.map((w: Weapon) => w.id),
      ];

      allWeaponIds.forEach((weaponId) =>
        this.weaponState.disableWeapon(weaponId)
      );
      content.stratagems.forEach((s: Stratagem) =>
        this.stratagemState.disableStratagem(s.id)
      );
      content.boosters.forEach((b: Booster) =>
        this.boosterState.disableBooster(b.id)
      );
    }

    // Update the list of disabled warbonds
    this.checkDisabledWarbonds();
  }
}
