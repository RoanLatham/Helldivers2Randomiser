import { Component, OnInit, OnDestroy } from '@angular/core';
import { StratagemDisplayComponent } from '../../displays/stratagem-display/stratagem-display.component';
import { StratagemFilterStateService } from '../../services/stratagem-filter-state.service';
import { Stratagem } from '../../services/stratagems';
import { getRandomStratagems } from '../../services/data-access';
import { InitStateService } from '../../services/init-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stratagem-randomiser',
  templateUrl: './stratagem-randomiser.component.html',
  styleUrls: ['./stratagem-randomiser.component.scss'],
  imports: [StratagemDisplayComponent],
  standalone: true,
})
export class StratagemRandomiserComponent implements OnInit, OnDestroy {
  ids: string[] = [];
  disabledIds: string[] = [];
  onlyOneBackpack: boolean = true;
  onlyOneSupport: boolean = true;
  guaranteeBackpack: boolean = false;
  guaranteeSupport: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private stratagemState: StratagemFilterStateService,
    private initStateService: InitStateService
  ) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.subscription.add(
      this.stratagemState.disabledIds$.subscribe((ids) => {
        this.disabledIds = ids;
      })
    );

    // Subscribe to the onlyOneBackpack$ observable
    this.subscription.add(
      this.stratagemState.onlyOneBackpack$.subscribe((value) => {
        this.onlyOneBackpack = value;
      })
    );

    // Subscribe to the onlyOneSupport$ observable
    this.subscription.add(
      this.stratagemState.onlyOneSupport$.subscribe((value) => {
        this.onlyOneSupport = value;
      })
    );

    // Subscribe to the guaranteeBackpack$ observable
    this.subscription.add(
      this.stratagemState.guaranteeBackpack$.subscribe((value) => {
        this.guaranteeBackpack = value;
      })
    );

    // Subscribe to the guaranteeSupport$ observable
    this.subscription.add(
      this.stratagemState.guaranteeSupport$.subscribe((value) => {
        this.guaranteeSupport = value;
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
    const stratagems = getRandomStratagems({
      excludedStratagemIds: this.disabledIds,
      requireOneBackpack: this.onlyOneBackpack,
      requireOneSupport: this.onlyOneSupport,
      guaranteeBackpack: this.guaranteeBackpack,
      guaranteeSupport: this.guaranteeSupport,
    });

    // Extract stratagem IDs from the randomized stratagems
    this.ids = stratagems.map((stratagem) => stratagem.id);

    // Ensure we have exactly 4 stratagem IDs (in case fewer were returned)
    while (this.ids.length < 4) {
      this.ids.push(this.ids[0] || '');
    }
  }
}
