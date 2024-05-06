import { Component } from '@angular/core';
import { BoosterDisplayComponent } from '../booster-display/booster-display.component';
import { Booster, boosters } from '../boosters';

@Component({
  selector: 'app-booster-randomiser',
  standalone: true,
  imports: [BoosterDisplayComponent],
  templateUrl: './booster-randomiser.component.html',
  styleUrl: './booster-randomiser.component.scss'
})
export class BoosterRandomiserComponent {
  id: number = 1;
  maxId: number = boosters[boosters.length - 1].id;

  ngOnInit(): void {  
    this.randomise();
  }

  randomise(): void{
    // console.log("randomising booster")
    this.id = this.getFilteredRandomId();
  }

  getFilteredRandomId(): number{
    // Add filter for warbond here
    // Think theres a better random method too
    return Math.ceil(Math.random() * this.maxId)
  }
}
