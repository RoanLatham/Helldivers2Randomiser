import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-randomise-button',
  standalone: true,
  imports: [],
  templateUrl: './randomise-button.component.html',
  styleUrl: './randomise-button.component.scss'
})
export class RandomiseButtonComponent {
  @Output() randomise = new EventEmitter<void>();

  onRandomise() {
    this.randomise.emit();
  }
}
