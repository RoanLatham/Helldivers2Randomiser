import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stratagem } from './new-stratagems';
import { getStratagemsByShipModule } from './data-access';

@Injectable({
  providedIn: 'root',
})
export class StratagemFilterStateService {
  //BehaviorSubject for individual stratagems the user dissabled
  private disabledIds = new BehaviorSubject<string[]>([]);
  disabledIds$ = this.disabledIds.asObservable();

  disableStratagem(id: string) {
    this.disabledIds.next([...this.disabledIds.value, id]);
  }

  enableStratagem(id: string) {
    this.disabledIds.next(this.disabledIds.value.filter((i) => i !== id));
  }

  toggleStratagem(id: string) {
    if (this.disabledIds.value.includes(id)) {
      this.enableStratagem(id);
    } else {
      this.disableStratagem(id);
    }

    // console.log('stratagem filter service: dissabled IDs: ' + this.disabledIds.value);
  }

  //BehaviorSubject for the onlyOneBackpack setting
  private onlyOneBackpack = new BehaviorSubject<boolean>(false);
  onlyOneBackpack$ = this.onlyOneBackpack.asObservable();

  setOnlyOneBackpack(value: boolean) {
    this.onlyOneBackpack.next(value);

    // If turning off onlyOneBackpack, also turn off guaranteeBackpack
    if (!value) {
      this.setGuaranteeBackpack(false);
    }
  }

  toggleOnlyOneBackpack() {
    const currentValue = this.onlyOneBackpack.value;
    this.setOnlyOneBackpack(!currentValue);
    // console.log('Strategem Filter Service: onlyOneBackpack is: '+ this.onlyOneBackpack.value)
  }

  //BehaviorSubject for the guaranteeBackpack setting
  private guaranteeBackpack = new BehaviorSubject<boolean>(false);
  guaranteeBackpack$ = this.guaranteeBackpack.asObservable();

  setGuaranteeBackpack(value: boolean) {
    // If enabling guarantee, ensure onlyOne is also enabled
    if (value && !this.onlyOneBackpack.value) {
      this.setOnlyOneBackpack(true);
    }
    this.guaranteeBackpack.next(value);
  }

  toggleGuaranteeBackpack() {
    const currentValue = this.guaranteeBackpack.value;
    this.setGuaranteeBackpack(!currentValue);
  }

  //BehaviorSubject for the onlyOneSupport setting
  private onlyOneSupport = new BehaviorSubject<boolean>(false);
  onlyOneSupport$ = this.onlyOneSupport.asObservable();

  setOnlyOneSupport(value: boolean) {
    this.onlyOneSupport.next(value);

    // If turning off onlyOneSupport, also turn off guaranteeSupport
    if (!value) {
      this.setGuaranteeSupport(false);
    }
  }

  toggleOnlyOneSupport() {
    const currentValue = this.onlyOneSupport.value;
    this.setOnlyOneSupport(!currentValue);
    // console.log('Strategem Filter Service: onlyOneSupport is: '+ this.onlyOneSupport.value)
  }

  //BehaviorSubject for the guaranteeSupport weapon setting
  private guaranteeSupport = new BehaviorSubject<boolean>(false);
  guaranteeSupport$ = this.guaranteeSupport.asObservable();

  setGuaranteeSupport(value: boolean) {
    // If enabling guarantee, ensure onlyOne is also enabled
    if (value && !this.onlyOneSupport.value) {
      this.setOnlyOneSupport(true);
    }
    this.guaranteeSupport.next(value);
  }

  toggleGuaranteeSupport() {
    const currentValue = this.guaranteeSupport.value;
    this.setGuaranteeSupport(!currentValue);
  }
}
