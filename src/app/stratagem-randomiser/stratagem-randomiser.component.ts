import { Component, OnInit } from '@angular/core';
import { StratagemDisplayComponent } from '../stratagem-display/stratagem-display.component';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';
import { Stratagem, stratagems, backpackStratagemIds, supportWeaponStratagemIds, maxStratagemId } from '../stratagems';

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
  guaranteeBackpack: boolean = false;
  guaranteeSupport: boolean = false;

  backpackStratagemIDs: number[] = backpackStratagemIds;

  supportStratagemIDs: number[] = supportWeaponStratagemIds;

  maxId: number = maxStratagemId;

  constructor(private stratagemState: StratagemFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
      // this.ids = this.getRandomIds();
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
    // console.log("randomising stratagems")
    this.ids = this.getFilteredRandomIds();
  }

  getFilteredRandomIds(): number[] {
    let numbers = Array.from({ length: this.maxId }, (_, i) => i + 1).filter(
      (id) => !this.disabledIds.includes(id)
    );

    this.shuffle(numbers);

    console.log("only one backpack is: " + this.onlyOneBackpack);
    // If onlyOneBackpack is true, filter the numbers array
    if (this.onlyOneBackpack) {
      // Find the first backpack ID in the numbers array
      const firstBackpackId = numbers.find((id) =>
        this.backpackStratagemIDs.includes(id, 0)
      );

      // If a backpack ID was found, filter out all other backpack IDs
      if (firstBackpackId !== undefined) {
        numbers = numbers.filter(
          (id) =>
            id === firstBackpackId || !this.backpackStratagemIDs.includes(id)
        );
      }
    }

    console.log("only one support weapon is: " + this.onlyOneSupport);
    // If onlyOneSupport is true, filter the numbers array
    if (this.onlyOneSupport) {
      // Find the first backpack ID in the numbers array
      const firstSupportId = numbers.find((id) =>
        this.supportStratagemIDs.includes(id, 0)
      );

      // If a backpack ID was found, filter out all other backpack IDs
      if (firstSupportId !== undefined) {
        numbers = numbers.filter(
          (id) =>
            id === firstSupportId || !this.supportStratagemIDs.includes(id)
        );
      }
    }

    //trim results to 4 IDs
    numbers = numbers.slice(0, 4);

    // // If no backpack is in results and guarentee backpack is enabled replace one entry with one from the lsit of backpack stratagems
    // if(!numbers.find(id => this.backpackStratagemIDs.includes(id, 0)) && this.backpackStratagemIDs){
    //   numbers[3] = this.backpackStratagemIDs[Math.floor(Math.random() * this.backpackStratagemIDs.length)]
    // }

    // // If no support weapon is in results and guarentee support is enabled replace one entry with one from the lsit of support weapons
    // if(!numbers.find(id => this.supportStratagemIDs.includes(id, 0)) && this.guaranteeSupport){
    //   numbers[4] = this.supportStratagemIDs[Math.floor(Math.random() * this.supportStratagemIDs.length)]
    // }

    // console.log("Stratagem Randomiser: selected IDs are: " +numbers.slice(0, 4));

    return numbers;
  }

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
