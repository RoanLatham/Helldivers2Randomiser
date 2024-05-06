import { Component, OnInit } from '@angular/core';
import { StratagemDisplayComponent } from '../stratagem-display/stratagem-display.component';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';
import { Stratagem, stratagems } from '../stratagems';

@Component({
  selector: 'app-stratagem-randomiser',
  templateUrl: './stratagem-randomiser.component.html',
  styleUrls: ['./stratagem-randomiser.component.scss'],
  imports: [StratagemDisplayComponent],
  standalone: true,
})
export class StratagemRandomiserComponent implements OnInit {
  ids: number[] = [];
  disabledIds: number[] = [];
  onlyOneBackpack: boolean = true;
  onlyOneSupport: boolean = true;

  backpackStratagemIDs: number[] = [
    12,
    47,
    17,
    10,
    16,
    25,
    33,
    35,
    41,
    42,
  ];

  supportStratagemIDs: number[] = [
    9,
    11,
    14,
    15,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
  ];

  // Determine the maximum ID dynamically, this could be made more preformant by calculating this at compile time
  maxId: number = stratagems[stratagems.length - 1].id;

  constructor(private stratagemState: StratagemFilterStateService) { }

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.stratagemState.disabledIds$.subscribe(ids => {
      this.disabledIds = ids;
      // this.ids = this.getRandomIds();
    });

    // Subscribe to the onlyOneBackpack$ observable
    this.stratagemState.onlyOneBackpack$.subscribe(value => {
      this.onlyOneBackpack = value;
    });

    // Subscribe to the onlyOneSupport$ observable
    this.stratagemState.onlyOneSupport$.subscribe(value => {
      this.onlyOneSupport = value;
    });

    this.randomise();
  }

  randomise(): void{
    console.log("randomising stratagems")
    this.ids = this.getRandomIds();
  }

  getRandomIds(): number[] {
    let numbers = Array.from({length: this.maxId}, (_, i) => i + 1)
      .filter(id => !this.disabledIds.includes(id));

    this.shuffle(numbers);
  
    // console.log("only one backpack is: " + this.onlyOneBackpack);
    // If onlyOneBackpack is true, filter the numbers array
    if (this.onlyOneBackpack) {
      // Find the first backpack ID in the numbers array
      const firstBackpackId = numbers.find(id => this.backpackStratagemIDs.includes(id, 0));
  
      // If a backpack ID was found, filter out all other backpack IDs
      if (firstBackpackId !== undefined) {
        numbers = numbers.filter(id => id === firstBackpackId || !this.backpackStratagemIDs.includes(id));
      }
    }

    // console.log("only one support weapon is: " + this.onlyOneSupport);
    // If onlyOneSupport is true, filter the numbers array
    if (this.onlyOneSupport) {
      // Find the first backpack ID in the numbers array
      const firstSupportId = numbers.find(id => this.supportStratagemIDs.includes(id, 0));
  
      // If a backpack ID was found, filter out all other backpack IDs
      if (firstSupportId !== undefined) {
        numbers = numbers.filter(id => id === firstSupportId || !this.supportStratagemIDs.includes(id));
      }
    }

    console.log("selected IDs are: " +numbers.slice(0, 4));
  
    return numbers.slice(0, 4);
  }
  

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
