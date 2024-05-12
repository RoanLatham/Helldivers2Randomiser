import { Component, Input, OnInit } from '@angular/core';
import { Weapon, weapons } from '../weapons';

@Component({
  selector: 'app-weapon-display',
  standalone: true,
  imports: [],
  templateUrl: './weapon-display.component.html',
  styleUrl: './weapon-display.component.scss'
})
export class WeaponDisplayComponent implements OnInit {
  private _id!: number;
  weapon!: Weapon;

  @Input()
  set id(value: number) {
    this._id = value;
    this.updateweapon();
  }

  get id(): number {
    return this._id;
  }

  ngOnInit() {
    this.updateweapon();
  }

  updateweapon() {
    const weapon = weapons.find((b) => b.id === this.id);
    if (weapon) {
      this.weapon = weapon;
    } else {
      console.error(`No weapon found with ID ${this.id}`);
    }
  }
}
