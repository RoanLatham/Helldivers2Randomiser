import { Component, OnInit } from '@angular/core';
import { Stratagem, stratagems } from '../stratagems';
import { CommonModule } from '@angular/common';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';
import { CollapsibleSectionComponent } from '../shared/collapsible-section/collapsible-section.component';

@Component({
  selector: 'app-stratagem-filters',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent],
  templateUrl: './stratagem-filters.component.html',
  styleUrl: './stratagem-filters.component.scss',
})
export class StratagemFiltersComponent implements OnInit {
  stratagems = stratagems;
  shipModules: string[] = [];
  disabledIds: number[] = [];
  onlyOneBackpack: boolean = false;
  onlyOneSupport: boolean = false;
  stratagemCollapsed: boolean = false;

  constructor(private stratagemState: StratagemFilterStateService) {}

  ngOnInit(): void {
    // Extract all shipoModules from stratagems.ts
    this.shipModules = Array.from(
      new Set(this.stratagems.map((s) => s.shipModule))
    );

    // Subscribe to the disabledIds$ observable
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    // Subscribe to the onlyOneBackpack$ observable
    this.stratagemState.onlyOneBackpack$.subscribe((ids) => {
      this.onlyOneBackpack = ids;
    });

    // Subscribe to the onlyOneSupport$ observable
    this.stratagemState.onlyOneSupport$.subscribe((ids) => {
      this.onlyOneSupport = ids;
    });
  }

  toggleStratagem(id: number): void {
    this.stratagemState.toggleStratagem(id);
  }

  toggleOnlyOneBackpack(): void {
    this.stratagemState.toggleOnlyOneBackpack();
  }

  toggleGuatenteeBackpack(): void {
    this.stratagemState.toggleGuatenteeBackpack();
  }

  toggleOnlyOneSupport(): void {
    this.stratagemState.toggleOnlyOneSupport();
  }

  toggleGuatenteeSupport(): void {
    this.stratagemState.toggleGuatenteeSupport();
  }

  toggleStratagemCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.stratagemCollapsed = collapsed;
    } else {
      this.stratagemCollapsed = !this.stratagemCollapsed;
    }
  }
}
