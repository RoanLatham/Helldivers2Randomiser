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
import { CollapsibleSectionComponent } from './shared/collapsible-section/collapsible-section.component';

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
    CollapsibleSectionComponent,
  ],
  providers: [GtagService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'HelldiversLoadout';
  filtersCollapsed: boolean = false;

  constructor(private gtagService: GtagService) {}

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

  toggleFiltersCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.filtersCollapsed = collapsed;
    } else {
      this.filtersCollapsed = !this.filtersCollapsed;
    }
  }
}
