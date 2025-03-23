import { Component, Input, OnInit } from '@angular/core';
import { Stratagem } from '../../services/stratagems';
import { getStratagem } from '../../services/data-access';

@Component({
  selector: 'app-stratagem-display',
  templateUrl: './stratagem-display.component.html',
  styleUrls: ['./stratagem-display.component.scss'],
  standalone: true,
})
export class StratagemDisplayComponent implements OnInit {
  private _id!: string;
  stratagem!: Stratagem;

  @Input()
  set id(value: string) {
    this._id = value;
    this.updateStratagem();
  }

  get id(): string {
    return this._id;
  }

  ngOnInit() {
    this.updateStratagem();
  }

  updateStratagem() {
    const stratagem = getStratagem(this.id);

    if (stratagem) {
      this.stratagem = stratagem;
    } else {
      // Handle the case where no stratagem with the given ID was found
      console.error(`No stratagem found with ID ${this.id}`);
    }
  }
}
