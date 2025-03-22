import { Component, Input, OnInit } from '@angular/core';
import { Weapon } from '../services/weapons';
import { getWeapon } from '../services/data-access';

@Component({
  selector: 'app-weapon-display',
  standalone: true,
  imports: [],
  templateUrl: './weapon-display.component.html',
  styleUrls: ['./weapon-display.component.scss'],
})
export class WeaponDisplayComponent implements OnInit {
  private _id!: string;
  weapon!: Weapon;

  @Input()
  set id(value: string) {
    this._id = value;
    this.updateWeapon();
  }

  get id(): string {
    return this._id;
  }

  ngOnInit() {
    this.updateWeapon();
  }

  updateWeapon() {
    const weapon = getWeapon(this._id);
    if (weapon) {
      this.weapon = weapon;
    } else {
      console.error(`No weapon found with ID ${this._id}`);
    }
  }
}
