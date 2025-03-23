import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Warbond, warbonds } from '../../services/warbonds';
import { CommonModule } from '@angular/common';
import { WarbondFilterStateService } from '../../services/warbond-filter-state.service';
import { CollapsibleSectionComponent } from '../../shared/collapsible-section/collapsible-section.component';

@Component({
  selector: 'app-warbond-filters',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent],
  templateUrl: './warbond-filters.component.html',
  styleUrl: './warbond-filters.component.scss',
})
export class WarbondFiltersComponent implements OnInit {
  warbonds = warbonds;
  disabledIds: string[] = [];
  warbondCollapsed: boolean = false;

  constructor(private warbondState: WarbondFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.warbondState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });
  }

  togglewarbond(id: string): void {
    // console.log('Warbond Filter component:  toggling id: ' + id);
    this.warbondState.toggleWarbond(id);
  }

  toggleWarbondCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.warbondCollapsed = collapsed;
    } else {
      this.warbondCollapsed = !this.warbondCollapsed;
    }
    console.log('Warbond collapsed:', this.warbondCollapsed); // For debugging
  }

  // Comment out scrolling functionality but keep for future re-implementation
  // Use ViewChild to access the scroll container
  /* @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollLeft(): void {
    if (this.scrollContainer) {
      const scrollAmount = this.getScrollAmount();
      this.scrollContainer.nativeElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  scrollRight(): void {
    if (this.scrollContainer) {
      const scrollAmount = this.getScrollAmount();
      this.scrollContainer.nativeElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  // Get scroll amount based on container width or a fallback value
  private getScrollAmount(): number {
    if (this.scrollContainer) {
      const containerWidth = this.scrollContainer.nativeElement.offsetWidth;
      // Scroll by 80% of the container width or by a minimum of 200px
      return Math.max(containerWidth * 0.8, 200);
    }
    return 200; // Default fallback value
  } */
}
