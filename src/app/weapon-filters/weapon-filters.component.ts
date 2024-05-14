import { Component, OnInit } from '@angular/core';
import { primaryWeapons, secondaryWeapons, grenades } from '../weapons';
import { CommonModule } from '@angular/common';
import { WeaponFilterStateService } from '../weapon-filter-state.service';

@Component({
  selector: 'app-weapon-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon-filters.component.html',
  styleUrls: ['./weapon-filters.component.scss'],
})
export class WeaponFiltersComponent implements OnInit {
  primaryWeapons = primaryWeapons;
  secondaryWeapons = secondaryWeapons;
  grenades = grenades;
  weaponCategories: string[] = [];
  disabledIds: number[] = [];

  constructor(private weaponState: WeaponFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.weaponState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    // Extract all categories from primary weapons, secondary weapons, and grenades
    this.weaponCategories = Array.from(
      new Set([
        ...this.primaryWeapons.map((s) => s.category),
      ])
    );
  }

  toggleWeapon(id: number): void {
    this.weaponState.toggleWeapon(id);
  }

  toggleCategory(category: string): void {
    this.weaponState.toggleCategory(category);
  }

  isCategoryDissabled(category: string): boolean {
    const categoryWeaponIds = [
      ...this.primaryWeapons.filter((weapon) => weapon.category === category).map((weapon) => weapon.id),
      ...this.secondaryWeapons.filter((weapon) => weapon.category === category).map((weapon) => weapon.id),
      ...this.grenades.filter((weapon) => weapon.category === category).map((weapon) => weapon.id),
    ];

    return categoryWeaponIds.every((id) => this.disabledIds.includes(id));
  }

  primaryWeaponsForCategory(category: string): { id: number; name: string; category: string; warbond: string; iconPath: string; }[] {
    return this.primaryWeapons.filter((weapon) => weapon.category === category);
  }
}
