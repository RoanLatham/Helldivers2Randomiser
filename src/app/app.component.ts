import { Component, ViewChild, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StratagemDisplayComponent } from './stratagem-display/stratagem-display.component';
import { StratagemRandomiserComponent } from './stratagem-randomiser/stratagem-randomiser.component';
import { StratagemFiltersComponent } from './stratagem-filters/stratagem-filters.component';
import { BoosterDisplayComponent } from './booster-display/booster-display.component';
import { BoosterRandomiserComponent } from './booster-randomiser/booster-randomiser.component';
import { BoosterFiltersComponent } from './booster-filters/booster-filters.component';
import { WeaponDisplayComponent } from './weapon-display/weapon-display.component';

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
    WeaponDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HelldiversLoadout';
  ids: number[] = [];

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  constructor() {
    const numbers = Array.from({ length: 52 }, (_, i) => i + 1);
    this.shuffle(numbers);
    this.ids = numbers.slice(0, 4);
  }

  @ViewChild(StratagemRandomiserComponent) stratagemRandomiserComponent!: StratagemRandomiserComponent;
  @ViewChild(BoosterRandomiserComponent) boosterRandomiserComponent!: BoosterRandomiserComponent;
  randomiseStratagems(): void {
    this.stratagemRandomiserComponent.randomise();
    this.boosterRandomiserComponent.randomise();

  }
}
