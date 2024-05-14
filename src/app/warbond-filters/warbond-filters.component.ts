import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Warbond, warbonds } from '../warbonds';
import { CommonModule } from '@angular/common';
import { WarbondFilterStateService } from '../warbond-filter-state.service';

@Component({
  selector: 'app-warbond-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warbond-filters.component.html',
  styleUrl: './warbond-filters.component.scss',
})
export class WarbondFiltersComponent implements OnInit {
  warbonds = warbonds;
  disabledIds: number[] = [];

  constructor(private warbondState: WarbondFilterStateService) {}

  ngOnInit(): void {
    // Subscribe to the disabledIds$ observable
    this.warbondState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });
  }

  togglewarbond(id: number): void {
    // console.log('Warbond Filter component:  toggling id: ' + id);
    this.warbondState.toggleWarbond(id);
  }

  // Use ViewChild to access the scroll container
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  scrollLeft(): void {
    const itemWidth =
      this.scrollContainer.nativeElement.querySelector(
        '.scroll-content'
      ).offsetWidth;
    this.scrollContainer.nativeElement.scrollBy({
      left: -itemWidth,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    const itemWidth =
      this.scrollContainer.nativeElement.querySelector(
        '.scroll-content'
      ).offsetWidth;
    this.scrollContainer.nativeElement.scrollBy({
      left: itemWidth,
      behavior: 'smooth',
    });
  }

}
