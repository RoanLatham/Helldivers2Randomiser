import { Component, OnInit } from '@angular/core';
import { Stratagem, stratagems } from '../stratagems';
import { CommonModule } from '@angular/common';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';

@Component({
  selector: 'app-stratagem-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stratagem-filters.component.html',
  styleUrl: './stratagem-filters.component.scss',
})
export class StratagemFiltersComponent implements OnInit {
  stratagems = stratagems;
  shipModules: string[] = [];
  disabledIds: number[] = [];

  constructor(private stratagemState: StratagemFilterStateService) {}

  ngOnInit(): void {
    // Extract all shipoModules form stratagems.ts
    this.shipModules = Array.from(
      new Set(this.stratagems.map((s) => s.shipModule))
    );

    // Subscribe to the disabledIds$ observable
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });
  }

  toggleStratagem(id: number): void {
    this.stratagemState.toggleStratagem(id);
  }

  toggleOnlyOneBackpack(): void {
    this.stratagemState.toggleOnlyOneBackpack();
  }
  
  toggleOnlyOneSupport(): void {
    this.stratagemState.toggleOnlyOneSupport();
  }
}
