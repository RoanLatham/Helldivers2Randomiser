import { Component, OnInit } from '@angular/core';
import { BoosterDisplayComponent } from '../booster-display/booster-display.component';
import { Booster } from '../services/boosters';
import { BoosterFilterStateService } from '../services/booster-filter-state.service';
import { getRandomLoadout } from '../services/data-access';

@Component({
  selector: 'app-booster-randomiser',
  standalone: true,
  imports: [BoosterDisplayComponent],
  templateUrl: './booster-randomiser.component.html',
  styleUrl: './booster-randomiser.component.scss',
})
export class BoosterRandomiserComponent implements OnInit {
  id: string = '';
  disabledIds: string[] = [];

  constructor(private boosterState: BoosterFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.boosterState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    this.randomise();
  }

  randomise(): void {
    const loadout = getRandomLoadout({
      excludedBoosterIds: this.disabledIds,
    });

    // Set the booster ID from the randomized loadout
    this.id = loadout.booster?.id || '';
  }
}
