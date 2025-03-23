import { Component, OnInit } from '@angular/core';
import { StratagemDisplayComponent } from '../stratagem-display/stratagem-display.component';
import { StratagemFilterStateService } from '../services/stratagem-filter-state.service';
import { Stratagem } from '../services/stratagems';
import { getRandomStratagems } from '../services/data-access';

@Component({
  selector: 'app-stratagem-randomiser',
  templateUrl: './stratagem-randomiser.component.html',
  styleUrls: ['./stratagem-randomiser.component.scss'],
  imports: [StratagemDisplayComponent],
  standalone: true,
})
export class StratagemRandomiserComponent implements OnInit {
  ids: string[] = [];
  disabledIds: string[] = [];
  onlyOneBackpack: boolean = true;
  onlyOneSupport: boolean = true;
  guaranteeBackpack: boolean = false;
  guaranteeSupport: boolean = false;

  constructor(private stratagemState: StratagemFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    // Subscribe to the onlyOneBackpack$ observable
    this.stratagemState.onlyOneBackpack$.subscribe((value) => {
      this.onlyOneBackpack = value;
    });

    // Subscribe to the onlyOneSupport$ observable
    this.stratagemState.onlyOneSupport$.subscribe((value) => {
      this.onlyOneSupport = value;
    });

    // Subscribe to the guaranteeBackpack$ observable
    this.stratagemState.guaranteeBackpack$.subscribe((value) => {
      this.guaranteeBackpack = value;
    });

    // Subscribe to the guaranteeSupport$ observable
    this.stratagemState.guaranteeSupport$.subscribe((value) => {
      this.guaranteeSupport = value;
    });

    this.randomise();
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
