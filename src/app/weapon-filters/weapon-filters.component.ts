import { Component, OnInit, OnDestroy } from '@angular/core';
import { primaryWeapons, secondaryWeapons, grenades } from '../weapons';
import { CommonModule } from '@angular/common';
import { WeaponFilterStateService } from '../weapon-filter-state.service';
import { Subscription } from 'rxjs';
import { CollapsibleSectionComponent } from '../shared/collapsible-section/collapsible-section.component';

@Component({
  selector: 'app-weapon-filters',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent],
  templateUrl: './weapon-filters.component.html',
  styleUrls: ['./weapon-filters.component.scss'],
})
export class WeaponFiltersComponent implements OnInit, OnDestroy {
  primaryWeapons = primaryWeapons;
  secondaryWeapons = secondaryWeapons;
  grenades = grenades;
  weaponCategories: string[] = [];
  disabledIds: number[] = [];

  // Subscription to track for cleanup
  private subscription: Subscription | null = null;

  // Properties for collapsible sections
  weaponCollapsed = false;
  primaryCollapsed = false;
  secondaryCollapsed = false;
  grenadesCollapsed = false;

  constructor(private weaponState: WeaponFilterStateService) {}

  ngOnInit(): void {
    // Extract all categories from primary weapons, secondary weapons, and grenades
    this.weaponCategories = Array.from(
      new Set([...this.primaryWeapons.map((s) => s.category)])
    );

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

  toggleWeapon(id: number): void {
    this.weaponState.toggleWeapon(id);
  }

  toggleCategory(category: string): void {
    this.weaponState.toggleCategory(category);
  }

  isCategoryDissabled(category: string): boolean {
    const categoryWeaponIds = [
      ...this.primaryWeapons
        .filter((weapon) => weapon.category === category)
        .map((weapon) => weapon.id),
      ...this.secondaryWeapons
        .filter((weapon) => weapon.category === category)
        .map((weapon) => weapon.id),
      ...this.grenades
        .filter((weapon) => weapon.category === category)
        .map((weapon) => weapon.id),
    ];

    return categoryWeaponIds.every((id) => this.disabledIds.includes(id));
  }

  primaryWeaponsForCategory(category: string): {
    id: number;
    name: string;
    category: string;
    warbond: string;
    iconPath: string;
  }[] {
    return this.primaryWeapons.filter((weapon) => weapon.category === category);
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
