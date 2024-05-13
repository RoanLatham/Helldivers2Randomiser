import { Component, OnInit } from '@angular/core';
import { WeaponDisplayComponent } from '../weapon-display/weapon-display.component';
import { Weapon, weapons } from '../weapons';
import { WeaponFilterStateService } from '../weapon-filter-state.service';

@Component({
  selector: 'app-weapon-randomiser',
  standalone: true,
  imports: [WeaponDisplayComponent],
  templateUrl: './weapon-randomiser.component.html',
  styleUrls: ['./weapon-randomiser.component.scss'],
})
export class WeaponRandomiserComponent implements OnInit {
  primaryWeaponIds = weapons
    .filter((weapon) => weapon.type === 'Primary Weapons')
    .map((weapon) => weapon.id);
  secondaryWeaponIds = weapons
    .filter((weapon) => weapon.type === 'Secondary Weapons')
    .map((weapon) => weapon.id);
  grenadeIds = weapons
    .filter((weapon) => weapon.type === 'Grenades')
    .map((weapon) => weapon.id);

  primaryWeaponId!: number;
  secondaryWeaponId!: number;
  grenadeId!: number;

  disabledIds: number[] = [];

  constructor(private weaponState: WeaponFilterStateService) {}


  ngOnInit() {
    // Subscribe to the disabledIds$ observable
    this.weaponState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    this.getRandomIds();
  }

  randomise(): void {
    this.getRandomIds();
  }

  getRandomIds(): void {
    this.primaryWeaponId = this.getRandomWeaponId(this.primaryWeaponIds);
    this.secondaryWeaponId = this.getRandomWeaponId(this.secondaryWeaponIds);
    this.grenadeId = this.getRandomWeaponId(this.grenadeIds);
  }

  getRandomWeaponId(weaponIds: number[]): number {
    // Filter out the disabled IDs
    const availableIds = weaponIds.filter(id => !this.disabledIds.includes(id));

    // console.log('Weapon ranodimiser: available ids:' + availableIds)
    // console.log('Weapon ranodimiser: disabeled ids:' + this.disabledIds)
    
    if (availableIds.length === 0) {
      throw new Error('No available IDs left to choose from.');
    }

    const randomIndex = Math.floor(Math.random() * availableIds.length);
    return availableIds[randomIndex];
  }
}
