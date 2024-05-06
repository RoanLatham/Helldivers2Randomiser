import { Component, Input, OnInit } from '@angular/core';
import { Booster, boosters } from '../boosters';

@Component({
  selector: 'app-booster-display',
  templateUrl: './booster-display.component.html',
  styleUrls: ['./booster-display.component.scss'],
  standalone: true,
})
export class BoosterDisplayComponent implements OnInit {
  private _id!: number;
  booster!: Booster;

  @Input()
  set id(value: number) {
    this._id = value;
    this.updatebooster();
  }

  get id(): number {
    return this._id;
  }

  ngOnInit() {
    this.updatebooster();
  }

  updatebooster() {
    const booster = boosters.find((b) => b.id === this.id);
    if (booster) {
      this.booster = booster;
    } else {
      console.error(`No booster found with ID ${this.id}`);
    }
  }
}
