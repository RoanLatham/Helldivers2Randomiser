import { Component, Input, OnInit } from '@angular/core';
import { Stratagem, stratagems } from '../stratagems';

@Component({
  selector: 'app-stratagem-display',
  templateUrl: './stratagem-display.component.html',
  styleUrls: ['./stratagem-display.component.scss'],
  standalone: true,
})
export class StratagemDisplayComponent implements OnInit {
  @Input() id!: number;
  stratagem!: Stratagem;

  ngOnInit() {
    const stratagem = stratagems.find((s) => s.id === this.id);

    if (stratagem) {
      this.stratagem = stratagem;
    } else {
      // Handle the case where no stratagem with the given ID was found
      console.error(`No stratagem found with ID ${this.id}`);
    }
  }
}
