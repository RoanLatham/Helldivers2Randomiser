import { Component, ViewChild, OnInit } from '@angular/core';
import { StratagemRandomiserComponent } from './randomisers/stratagem-randomiser/stratagem-randomiser.component';
import { BoosterRandomiserComponent } from './randomisers/booster-randomiser/booster-randomiser.component';
import { WeaponRandomiserComponent } from './randomisers/weapon-randomiser/weapon-randomiser.component';
import { RandomiseButtonComponent } from './randomisers/randomise-button/randomise-button.component';
import { GtagService } from './services/gtag-service.service';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { FooterComponent } from './footer/footer.component';
import { FilterContainerComponent } from './filters/filter-container/filter-container.component';

@Component({
  selector: 'app-root',
  imports: [
    StratagemRandomiserComponent,
    BoosterRandomiserComponent,
    WeaponRandomiserComponent,
    RandomiseButtonComponent,
    LearnMoreComponent,
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
