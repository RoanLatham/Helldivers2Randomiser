import { Component, OnInit } from '@angular/core';
import { WeaponDisplayComponent } from '../weapon-display/weapon-display.component';
import { Weapon } from '../weapons';
import { WeaponFilterStateService } from '../weapon-filter-state.service';
import { getRandomLoadout, getWeaponsByType } from '../data-access';

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
    const loadout = getRandomLoadout({
      excludedWeaponIds: this.disabledIds,
    });

    // Set the weapon IDs from the randomized loadout
    this.primaryWeaponId = loadout.primary?.id || '';
    this.secondaryWeaponId = loadout.secondary?.id || '';
    this.grenadeId = loadout.throwable?.id || '';
  }
}
