import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Booster, boosters } from './boosters';

@Injectable({
  providedIn: 'root',
})
export class StratagemFilterStateService {
  //BehaviorSubject for individual stratagems the user dissabled
  private disabledIds = new BehaviorSubject<number[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableStratagem(id: number) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableStratagem(id: number) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  toggleStratagem(id: number) {
    if (this.disabledIds.value.includes(id)) {
      this.enableStratagem(id);
    } else {
      this.disableStratagem(id);
    }

    console.log('booster filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  toggleWarbond(warbondName: string){
    
    let matches: Booster[] = boosters.filter(booster => booster.warbond)
    // Loop through booster entires, 
    //save id of boosters that match warbond, 
    //add to dissabled ids
  }
}
