import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LAST_UPDATED } from '../data-last-updated';
import { BUILD_TIMESTAMP } from '../build-timestamp';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Data update timestamp (from extractors)
  dataLastUpdated = LAST_UPDATED;

  // Build timestamp (set during build process)
  buildTimestamp = BUILD_TIMESTAMP;
}
