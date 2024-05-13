import { Component, OnInit } from '@angular/core';
import { Weapon, weapons } from '../weapons';
import { CommonModule } from '@angular/common';
import { WeaponFilterStateService } from '../weapon-filter-state.service';

@Component({
  selector: 'app-weapon-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon-filters.component.html',
  styleUrl: './weapon-filters.component.scss',
})
export class WeaponFiltersComponent implements OnInit {
  weapons = weapons;
  // weaponTypes: string[] = [];
  weaponTypes = ['Primary Weapons', 'Secondary Weapons', 'Grenades'];
  weaponCategories: string[] = [];
  disabledIds: number[] = [];

  constructor(
    private weaponState: WeaponFilterStateService // private warbondState: WarbondFilterStateService
  ) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.weaponState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    // Extract all teh types from weapons.ts
    // this.weaponTypes = Array.from(
    //   new Set(this.weapons.map((s) => s.type))
    // );

    // Extract all categories from weapons.ts
    this.weaponCategories = Array.from(
      new Set(this.weapons.map((s) => s.category))
    );
  }

  toggleWeapon(id: number): void {
    // console.log("Filter component:  Dissabling id: " + id)
    this.weaponState.toggleWeapon(id);
  }

  // ... inside your component class ...

  hasWeaponsOfTypeAndCategory(type: string, category: string): boolean {
    return this.weapons.some(
      (weapon) => weapon.type === type && weapon.category === category
    );
  }
}
