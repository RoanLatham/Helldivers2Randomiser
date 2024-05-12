import { Component, OnInit } from '@angular/core';
import { WeaponDisplayComponent } from '../weapon-display/weapon-display.component';
import { Weapon, weapons } from '../weapons';
import { BoosterFilterStateService } from '../booster-filter-state.service';

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

  ngOnInit() {
    this.getRandomIds()
  }

  randomise(): void {
    this.getRandomIds()
  }

  getRandomIds(): void {
    this.primaryWeaponId = this.getRandomWeaponId(this.primaryWeaponIds);
    this.secondaryWeaponId = this.getRandomWeaponId(this.secondaryWeaponIds);
    this.grenadeId = this.getRandomWeaponId(this.grenadeIds);
  }

  getRandomWeaponId(weaponIds: number[]): number {
    const randomIndex = Math.floor(Math.random() * weaponIds.length);
    return weaponIds[randomIndex];
  }
}
