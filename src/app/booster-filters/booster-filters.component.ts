import { Component, OnInit } from '@angular/core';
import { Booster, boosters } from '../boosters';
import { CommonModule } from '@angular/common';
import { BoosterFilterStateService } from '../booster-filter-state.service';

@Component({
  selector: 'app-booster-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booster-filters.component.html',
  styleUrl: './booster-filters.component.scss',
})
export class BoosterFiltersComponent implements OnInit {
  boosters = boosters;
  disabledIds: number[] = [];

  constructor(private boosterState: BoosterFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.boosterState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });
  }

  togglebooster(id: number): void {
    // console.log("Filter component:  Dissabling id: " + id)
    this.boosterState.toggleBooster(id);
  }
}
