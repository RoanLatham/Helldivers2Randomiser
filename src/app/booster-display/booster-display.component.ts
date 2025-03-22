import { Component, Input, OnInit } from '@angular/core';
import { Booster } from '../services/boosters';
import { getBooster } from '../services/data-access';

@Component({
  selector: 'app-booster-display',
  templateUrl: './booster-display.component.html',
  styleUrls: ['./booster-display.component.scss'],
  standalone: true,
})
export class BoosterDisplayComponent implements OnInit {
  private _id!: string;
  booster!: Booster;

  @Input()
  set id(value: string) {
    this._id = value;
    this.updatebooster();
  }

  get id(): string {
    return this._id;
  }

  ngOnInit() {
    this.updatebooster();
  }

  updatebooster() {
    const booster = getBooster(this._id);
    if (booster) {
      this.booster = booster;
    } else {
      console.error(`No booster found with ID ${this._id}`);
    }
  }
}
