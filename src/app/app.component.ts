import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StratagemDisplayComponent } from './stratagem-display/stratagem-display.component';
import { StratagemRandomiserComponent } from './stratagem-randomiser/stratagem-randomiser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StratagemDisplayComponent, StratagemRandomiserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
    const numbers = Array.from({length: 52}, (_, i) => i + 1);
    this.shuffle(numbers);
    this.ids = numbers.slice(0, 4);
  }
}
