import { Component, OnInit, OnDestroy } from '@angular/core';
import { Weapon } from '../services/weapons';
import { CommonModule } from '@angular/common';
import { WeaponFilterStateService } from '../services/weapon-filter-state.service';
import { Subscription } from 'rxjs';
import { CollapsibleSectionComponent } from '../shared/collapsible-section/collapsible-section.component';
import {
  getWeaponsByType,
  getWeaponsByCategory,
} from '../services/data-access';

@Component({
  selector: 'app-weapon-filters',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent],
  templateUrl: './weapon-filters.component.html',
  styleUrls: ['./weapon-filters.component.scss'],
})
export class WeaponFiltersComponent implements OnInit, OnDestroy {
  primaryWeapons: Weapon[] = [];
  secondaryWeapons: Weapon[] = [];
  throwableWeapons: Weapon[] = [];
  primaryCategories: string[] = [];
  secondaryCategories: string[] = [];
  throwableCategories: string[] = [];
  disabledIds: string[] = [];

  // Subscription to track for cleanup
  private subscription: Subscription | null = null;

  // Properties for collapsible sections
  weaponCollapsed = false;
  primaryCollapsed = false;
  secondaryCollapsed = false;
  grenadesCollapsed = false;

  constructor(private weaponState: WeaponFilterStateService) {}

  ngOnInit(): void {
    // Get weapons by type
    this.primaryWeapons = getWeaponsByType('Primary');
    this.secondaryWeapons = getWeaponsByType('Secondary');
    this.throwableWeapons = getWeaponsByType('Throwable');

    // Extract categories for each weapon type
    this.primaryCategories = Array.from(
      new Set(this.primaryWeapons.map((weapon) => weapon.category))
    ).sort();

    this.secondaryCategories = Array.from(
      new Set(this.secondaryWeapons.map((weapon) => weapon.category))
    ).sort();

    this.throwableCategories = Array.from(
      new Set(this.throwableWeapons.map((weapon) => weapon.category))
    ).sort();

    // Subscribe to the disabledIds$ observable
    this.subscription = this.weaponState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleWeapon(id: string): void {
    this.weaponState.toggleWeapon(id);
  }

  toggleCategory(
    category: string,
    type: 'Primary' | 'Secondary' | 'Throwable'
  ): void {
    this.weaponState.toggleCategory(category, type);
  }

  isCategoryDisabled(
    category: string,
    type: 'Primary' | 'Secondary' | 'Throwable'
  ): boolean {
    const weapons = this.getWeaponsByCategoryAndType(category, type);
    const weaponIds = weapons.map((weapon) => weapon.id);

    return (
      weaponIds.length > 0 &&
      weaponIds.every((id) => this.disabledIds.includes(id))
    );
  }

  getWeaponsByCategoryAndType(
    category: string,
    type: 'Primary' | 'Secondary' | 'Throwable'
  ): Weapon[] {
    switch (type) {
      case 'Primary':
        return this.primaryWeapons.filter(
          (weapon) => weapon.category === category
        );
      case 'Secondary':
        return this.secondaryWeapons.filter(
          (weapon) => weapon.category === category
        );
      case 'Throwable':
        return this.throwableWeapons.filter(
          (weapon) => weapon.category === category
        );
      default:
        return [];
    }
  }

  // Methods for section collapse toggling
  togglePrimaryCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.primaryCollapsed = collapsed;
    } else {
      this.primaryCollapsed = !this.primaryCollapsed;
    }
  }

  toggleSecondaryCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.secondaryCollapsed = collapsed;
    } else {
      this.secondaryCollapsed = !this.secondaryCollapsed;
    }
  }

  toggleGrenadesCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.grenadesCollapsed = collapsed;
    } else {
      this.grenadesCollapsed = !this.grenadesCollapsed;
    }
  }

  // Method for component-level collapse toggling
  toggleWeaponCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.weaponCollapsed = collapsed;
    } else {
      this.weaponCollapsed = !this.weaponCollapsed;
    }
  }
}
