import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoosterDisplayComponent } from '../booster-display/booster-display.component';
import { Booster } from '../services/boosters';
import { BoosterFilterStateService } from '../services/booster-filter-state.service';
import { getRandomBooster } from '../services/data-access';
import { InitStateService } from '../services/init-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booster-randomiser',
  standalone: true,
  imports: [BoosterDisplayComponent],
  templateUrl: './booster-randomiser.component.html',
  styleUrl: './booster-randomiser.component.scss',
})
export class BoosterRandomiserComponent implements OnInit, OnDestroy {
  id: string = '';
  disabledIds: string[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private boosterState: BoosterFilterStateService,
    private initStateService: InitStateService
  ) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.subscription.add(
      this.boosterState.disabledIds$.subscribe((ids) => {
        this.disabledIds = ids;
      })
    );

    // Subscribe to the settingsLoaded$ observable from InitStateService
    this.subscription.add(
      this.initStateService.settingsLoaded$.subscribe((loaded) => {
        if (loaded) {
          // Only randomize if settings have been loaded
          this.randomise();
        }
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscription.unsubscribe();
  }

  randomise(): void {
    const booster = getRandomBooster({
      excludedBoosterIds: this.disabledIds,
    });

    // Set the booster ID directly from the randomized booster
    this.id = booster?.id || '';
  }
}
