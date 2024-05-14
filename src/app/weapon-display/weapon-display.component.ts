import { Component, Input, OnInit } from '@angular/core';
import { primaryWeapons, secondaryWeapons, grenades } from '../weapons';

@Component({
  selector: 'app-weapon-display',
  standalone: true,
  imports: [],
  templateUrl: './weapon-display.component.html',
  styleUrls: ['./weapon-display.component.scss']
})
export class WeaponDisplayComponent implements OnInit {
  private _id!: number;
  weapon!: { id: number; name: string; category: string; warbond: string; iconPath: string; };

  @Input()
  set id(value: number) {
    this._id = value;
    this.updateWeapon();
  }

  get id(): number {
    return this._id;
  }

  ngOnInit() {
    this.updateWeapon();
  }

  updateWeapon() {
    const weapon = [...primaryWeapons, ...secondaryWeapons, ...grenades].find((w) => w.id === this.id);
    if (weapon) {
      this.weapon = weapon;
    } else {
      console.error(`No weapon found with ID ${this.id}`);
    }
  }
}
