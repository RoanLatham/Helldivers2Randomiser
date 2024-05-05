import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StratagemDisplayComponent } from './stratagem-display/stratagem-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StratagemDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelldiversLoadout';
}
