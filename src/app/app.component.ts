import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StratagemDisplayComponent } from './stratagem-display/stratagem-display.component';
import { StratagemRandomiserComponent } from './stratagem-randomiser/stratagem-randomiser.component';
import { StratagemFiltersComponent } from './stratagem-filters/stratagem-filters.component';
import { BoosterDisplayComponent } from './booster-display/booster-display.component';
import { BoosterRandomiserComponent } from './booster-randomiser/booster-randomiser.component';
import { BoosterFiltersComponent } from './booster-filters/booster-filters.component';
import { WeaponDisplayComponent } from './weapon-display/weapon-display.component';
import { WeaponRandomiserComponent } from './weapon-randomiser/weapon-randomiser.component';
import { WeaponFiltersComponent } from './weapon-filters/weapon-filters.component';
import { WarbondFiltersComponent } from './warbond-filters/warbond-filters.component';
import { RandomiseButtonComponent } from './randomise-button/randomise-button.component';
import { GtagService } from './gtag-service.service';
import { LearnMoreComponent } from './learn-more/learn-more.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    StratagemDisplayComponent,
    StratagemRandomiserComponent,
    StratagemFiltersComponent,
    BoosterDisplayComponent,
    BoosterRandomiserComponent,
    BoosterFiltersComponent,
    WeaponDisplayComponent,
    WeaponRandomiserComponent,
    WeaponFiltersComponent,
    WarbondFiltersComponent,
    RandomiseButtonComponent,
    LearnMoreComponent,
  ],
  providers: [GtagService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'HelldiversLoadout';
  ids: number[] = [];
  filtersCollapsed: boolean = false;

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  constructor(private gtagService: GtagService) {
    const numbers = Array.from({ length: 52 }, (_, i) => i + 1);
    this.shuffle(numbers);
    this.ids = numbers.slice(0, 4);
  }

  ngOnInit(): void {
    this.gtagService.trackEvent(
      'app component loaded',
      'app component loaded',
      'PAGE_LOADED'
    );
  }

  @ViewChild(WeaponRandomiserComponent)
  WeaponRandomiserComponent!: WeaponRandomiserComponent;
  @ViewChild(StratagemRandomiserComponent)
  stratagemRandomiserComponent!: StratagemRandomiserComponent;
  @ViewChild(BoosterRandomiserComponent)
  boosterRandomiserComponent!: BoosterRandomiserComponent;
  randomise(): void {
    this.WeaponRandomiserComponent.randomise();
    this.stratagemRandomiserComponent.randomise();
    this.boosterRandomiserComponent.randomise();
  }

  toggleFiltersCollapse(): void {
    this.filtersCollapsed = !this.filtersCollapsed;
  }
}
