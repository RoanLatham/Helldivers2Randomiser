import { Component } from '@angular/core';
import { BoosterDisplayComponent } from '../booster-display/booster-display.component';
import { Booster, boosters, maxBoosterId } from '../boosters';
import { BoosterFilterStateService } from '../booster-filter-state.service';

@Component({
  selector: 'app-booster-randomiser',
  standalone: true,
  imports: [BoosterDisplayComponent],
  templateUrl: './booster-randomiser.component.html',
  styleUrl: './booster-randomiser.component.scss'
})
export class BoosterRandomiserComponent {
  id: number = 1;
  disabledIds: number[] = [];
  maxId: number = maxBoosterId;

  constructor(private boosterState: BoosterFilterStateService) {}

  ngOnInit(): void {  
    // Subscribe to the disabledIds$ observable
    this.boosterState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    this.randomise();
  }

  randomise(): void{
    // console.log("randomising booster")
    this.id = this.getFilteredRandomId();
  }

  getFilteredRandomId(): number{
    // Using an array to remove dissabled ids from results
    let numbers = Array.from({length: this.maxId}, (_, i) => i + 1)
    .filter(id => !this.disabledIds.includes(id));

    this.shuffle(numbers);
    return Math.ceil(numbers[0])
  }

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
