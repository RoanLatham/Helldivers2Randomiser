import { Component, OnInit } from '@angular/core';
import { Booster, boosters } from '../boosters';
import { CommonModule } from '@angular/common';
import { BoosterFilterStateService } from '../booster-filter-state.service';
import { WarbondFilterStateService } from '../warbond-filter-state.service';
import { CollapsibleSectionComponent } from '../shared/collapsible-section/collapsible-section.component';

@Component({
  selector: 'app-booster-filters',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent],
  templateUrl: './booster-filters.component.html',
  styleUrl: './booster-filters.component.scss',
})
export class BoosterFiltersComponent implements OnInit {
  boosters = boosters;
  disabledIds: number[] = [];
  boosterCollapsed: boolean = false;

  constructor(
    private boosterState: BoosterFilterStateService,
    private warbondState: WarbondFilterStateService
  ) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.boosterState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });
  }

  toggleBoosterCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.boosterCollapsed = collapsed;
    } else {
      this.boosterCollapsed = !this.boosterCollapsed;
    }
  }

  toggleBooster(id: number): void {
    // console.log("Filter component:  Dissabling id: " + id)
    this.boosterState.toggleBooster(id);
    // The subscription in ngOnInit will update disabledIds
  }
}
