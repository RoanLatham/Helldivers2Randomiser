import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StratagemDisplayComponent } from './displays/stratagem-display/stratagem-display.component';
import { StratagemRandomiserComponent } from './randomisers/stratagem-randomiser/stratagem-randomiser.component';
import { StratagemFiltersComponent } from './filters/stratagem-filters/stratagem-filters.component';
import { BoosterDisplayComponent } from './displays/booster-display/booster-display.component';
import { BoosterRandomiserComponent } from './randomisers/booster-randomiser/booster-randomiser.component';
import { BoosterFiltersComponent } from './filters/booster-filters/booster-filters.component';
import { WeaponDisplayComponent } from './displays/weapon-display/weapon-display.component';
import { WeaponRandomiserComponent } from './randomisers/weapon-randomiser/weapon-randomiser.component';
import { WeaponFiltersComponent } from './filters/weapon-filters/weapon-filters.component';
import { WarbondFiltersComponent } from './filters/warbond-filters/warbond-filters.component';
import { RandomiseButtonComponent } from './randomisers/randomise-button/randomise-button.component';
import { GtagService } from './services/gtag-service.service';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { CollapsibleSectionComponent } from './shared/collapsible-section/collapsible-section.component';
import { FooterComponent } from './footer/footer.component';
import { FilterContainerComponent } from './filters/filter-container/filter-container.component';

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
    FooterComponent,
    FilterContainerComponent,
  ],
  providers: [GtagService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'HelldiversLoadout';

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
}
