import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the styling variants
export type SectionVariant = 'filters' | 'component' | 'category';

@Component({
  selector: 'app-collapsible-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsible-section.component.html',
  styleUrl: './collapsible-section.component.scss',
})
export class CollapsibleSectionComponent {
  // Inputs for configuration
  @Input() title: string = '';
  @Input() initiallyCollapsed: boolean = false;
  @Input() set variant(value: SectionVariant) {
    // Validate the variant and default to 'component' if invalid
    this._variant = ['filters', 'component', 'category'].includes(value)
      ? value
      : 'component';
  }
  get variant(): SectionVariant {
    return this._variant;
  }
  private _variant: SectionVariant = 'component';
  @Input() chevronIconPath: string = 'assets/next.png';
  @Input() chevronIconAlt: string = 'Toggle section';

  // Output event when toggled
  @Output() toggled = new EventEmitter<boolean>();

  // Track collapsed state
  isCollapsed: boolean = false;

  ngOnInit() {
    // Initialize collapsed state
    this.isCollapsed = this.initiallyCollapsed;
  }

  // Toggle the collapsed state
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.toggled.emit(this.isCollapsed);
  }

  // Helper methods for template class binding
  get headerClass(): string {
    return `${this.variant}-header`;
  }

  get titleClass(): string {
    return `${this.variant}-title`;
  }

  get contentClass(): string {
    return `${this.variant}-content`;
  }

  get chevronClass(): string {
    return `chevron-icon ${this.isCollapsed ? 'chevron-icon-down' : ''}`;
  }
}
