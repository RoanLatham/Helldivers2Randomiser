import { Component, OnInit } from '@angular/core';
import { StratagemDisplayComponent } from '../stratagem-display/stratagem-display.component';

@Component({
  selector: 'app-stratagem-randomiser',
  templateUrl: './stratagem-randomiser.component.html',
  styleUrls: ['./stratagem-randomiser.component.scss'],
  standalone: true,
  imports: [StratagemDisplayComponent],
})
export class StratagemRandomiserComponent implements OnInit {
  ids: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.ids = this.getRandomIds();
  }

  getRandomIds(): number[] {
    const numbers = Array.from({length: 52}, (_, i) => i + 1);
    this.shuffle(numbers);
    return numbers.slice(0, 4);
  }

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
