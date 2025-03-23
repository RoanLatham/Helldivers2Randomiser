import { Component, OnInit } from '@angular/core';
import { WeaponDisplayComponent } from '../weapon-display/weapon-display.component';
import { Weapon } from '../services/weapons';
import { WeaponFilterStateService } from '../services/weapon-filter-state.service';
import { getRandomWeapons, getWeaponsByType } from '../services/data-access';

@Component({
  selector: 'app-weapon-randomiser',
  standalone: true,
  imports: [WeaponDisplayComponent],
  templateUrl: './weapon-randomiser.component.html',
  styleUrls: ['./weapon-randomiser.component.scss'],
})
export class WeaponRandomiserComponent implements OnInit {
  primaryWeaponId!: string;
  secondaryWeaponId!: string;
  grenadeId!: string;

  disabledIds: string[] = [];

  constructor(private weaponState: WeaponFilterStateService) {}

  ngOnInit() {
    // Subscribe to the disabledIds$ observable
    this.weaponState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    this.randomise();
  }

  randomise(): void {
    const weapons = getRandomWeapons({
      excludedWeaponIds: this.disabledIds,
    });

    // Set the weapon IDs from the randomized weapons
    this.primaryWeaponId = weapons.primary?.id || '';
    this.secondaryWeaponId = weapons.secondary?.id || '';
    this.grenadeId = weapons.throwable?.id || '';
  }
}
