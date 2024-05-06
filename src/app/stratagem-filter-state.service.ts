import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

    console.log('stratagem filter service: dissabled IDs: ' + this.disabledIds.value);
  }



  //BehaviorSubject for the onlyOneBackpack setting
  private onlyOneBackpack = new BehaviorSubject<boolean>(false);
  onlyOneBackpack$ = this.onlyOneBackpack.asObservable();

  setOnlyOneBackpack(value: boolean) {
    this.onlyOneBackpack.next(value);
  }

  toggleOnlyOneBackpack() {
    const currentValue = this.onlyOneBackpack.value;
    this.onlyOneBackpack.next(!currentValue);
  }

  //BehaviorSubject for the guarenteeBackpack setting
  private guaranteeBackpack = new BehaviorSubject<boolean>(false);
  guaranteeBackpack$ = this.guaranteeBackpack.asObservable();

  setGuatenteeBackpack(value: boolean) {
    this.guaranteeBackpack.next(value);
  }

  toggleGuatenteeBackpack() {
    const currentValue = this.guaranteeBackpack.value;
    this.guaranteeBackpack.next(!currentValue);
  }



  //BehaviorSubject for the onlyOneSupport setting
  private onlyOneSupport = new BehaviorSubject<boolean>(false);
  onlyOneSupport$ = this.onlyOneSupport.asObservable();

  setOnlyOneSupport(value: boolean) {
    this.onlyOneSupport.next(value);
  }

  toggleOnlyOneSupport() {
    const currentValue = this.onlyOneSupport.value;
    this.onlyOneSupport.next(!currentValue);
  }

    //BehaviorSubject for the guarenteeSupport weapon setting
    private guarenteeSupport = new BehaviorSubject<boolean>(false);
    guaranteeSupport$ = this.guarenteeSupport.asObservable();
  
    setGuatenteeSupport(value: boolean) {
      this.guarenteeSupport.next(value);
    }
  
    toggleGuatenteeSupport() {
      const currentValue = this.guarenteeSupport.value;
      this.guarenteeSupport.next(!currentValue);
    }
}
