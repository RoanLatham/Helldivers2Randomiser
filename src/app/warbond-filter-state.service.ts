import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoosterFilterStateService } from './booster-filter-state.service';
import { Booster, boosters } from './boosters';

@Injectable({
  providedIn: 'root',
})
export class WarbondFilterStateService {
  constructor(private boostersService: BoosterFilterStateService) {
     // Calc set of warbonds in all boosters

    this.boostersService.disabledIds$.subscribe(disabledIds => {
      // Do something with the data
      // Calc set of warbonds in 
      this.checkAllWarbondsDisabled(disabledIds);
    });
  }

  checkAllWarbondsDisabled(disabledIds: number[]): void {
    // Create a set of warbonds from the disabled boosters
    let disabledWarbondSet = new Set(boosters.filter(booster => disabledIds.includes(booster.id)).map(booster => booster.warbond));

    let dissabledWarbonds: string[] = [];
    // Check each warbond
    disabledWarbondSet.forEach(warbond => {
      // Get all boosters with this warbond
      let warbondBoosters = boosters.filter(booster => booster.warbond === warbond);

      // Check if all boosters with this warbond are disabled
      if (warbondBoosters.every(booster => disabledIds.includes(booster.id))) {
        dissabledWarbonds = [...dissabledWarbonds, warbond]
      }

      this.disabledWarbonds.next(dissabledWarbonds);
      console.log("Warbond filter service: Dissabled warbonds:" + this.disabledWarbonds.value);
    });
  }

  //BehaviorSubject for individual Warbonds the user dissabled
  private disabledWarbonds = new BehaviorSubject<string[]>([]);
  disabledWarbonds$ = this.disabledWarbonds.asObservable();

  // Toggle warbond, 
  // If all children are enabled, dissable all
  // If only some chileren are enabled, still dissable all
  // If all children are  dissabled already, enable all
  // Warbond icons should also appear dissabed only when all chidldren are dissabled,
  // even if they were all disabbled manually
  toggleWarbond(warbondName: string) {



    // console.log(
    //   'Warbond filter service: dissabled IDs: ' + this.disabledIds.value
    // );
  }
}
