import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import {
  CollapsibleSectionComponent,
  SectionVariant,
} from './collapsible-section.component';

// Host component for testing with content projection
@Component({
  template: `
    <app-collapsible-section
      [title]="title"
      [initiallyCollapsed]="initiallyCollapsed"
      [variant]="variant"
      (toggled)="onToggled($event)"
    >
      <div class="test-content">Projected content</div>
    </app-collapsible-section>
  `,
})
class TestHostComponent {
  title = 'Test Title';
  initiallyCollapsed = false;
  variant: SectionVariant = 'component';
  toggledState: boolean | null = null;

  onToggled(collapsed: boolean): void {
    this.toggledState = collapsed;
  }
}

describe('CollapsibleSectionComponent', () => {
  describe('Direct component tests', () => {
    let component: CollapsibleSectionComponent;
    let fixture: ComponentFixture<CollapsibleSectionComponent>;
    let headerEl: DebugElement;
    let chevronEl: DebugElement;
    let contentEl: DebugElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CollapsibleSectionComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(CollapsibleSectionComponent);
      component = fixture.componentInstance;

      // Set required inputs for rendering
      component.title = 'Test Section';
      component.variant = 'component';

      fixture.detectChanges();

      // Get key elements
      headerEl = fixture.debugElement.query(By.css('.component-header'));
      chevronEl = fixture.debugElement.query(By.css('.chevron-icon'));
      contentEl = fixture.debugElement.query(By.css('.component-content'));
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with correct collapsed state', () => {
      // Default should be not collapsed
      expect(component.isCollapsed).toBeFalse();

      // Test with initiallyCollapsed=true
      component.initiallyCollapsed = true;
      component.ngOnInit();
      fixture.detectChanges();

      expect(component.isCollapsed).toBeTrue();
    });

    it('should toggle collapse state when header is clicked', () => {
      expect(component.isCollapsed).toBeFalse();

      headerEl.nativeElement.click();
      fixture.detectChanges();

      expect(component.isCollapsed).toBeTrue();

      headerEl.nativeElement.click();
      fixture.detectChanges();

      expect(component.isCollapsed).toBeFalse();
    });

    it('should emit toggled event when collapsed state changes', () => {
      spyOn(component.toggled, 'emit');

      headerEl.nativeElement.click();

      expect(component.toggled.emit).toHaveBeenCalledWith(true);

      headerEl.nativeElement.click();

      expect(component.toggled.emit).toHaveBeenCalledWith(false);
    });

    it('should add collapsed class to content when collapsed', () => {
      expect(contentEl.classes['collapsed']).toBeFalsy();

      component.isCollapsed = true;
      fixture.detectChanges();

      expect(contentEl.classes['collapsed']).toBeTrue();
    });

    it('should apply correct classes based on variant', () => {
      // Test component variant (default)
      expect(component.headerClass).toBe('component-header');
      expect(component.titleClass).toBe('component-title');
      expect(component.contentClass).toBe('component-content');

      // Test category variant
      component.variant = 'category';
      fixture.detectChanges();

      expect(component.headerClass).toBe('category-header');
      expect(component.titleClass).toBe('category-title');
      expect(component.contentClass).toBe('category-content');

      // Test filters variant
      component.variant = 'filters';
      fixture.detectChanges();

      expect(component.headerClass).toBe('filters-header');
      expect(component.titleClass).toBe('filters-title');
      expect(component.contentClass).toBe('filters-content');
    });

    it('should apply correct chevron class based on collapsed state', () => {
      // Default not collapsed
      expect(component.chevronClass).toBe('chevron-icon ');

      // When collapsed
      component.isCollapsed = true;
      fixture.detectChanges();

      expect(component.chevronClass).toBe('chevron-icon chevron-icon-down');
    });
  });

  describe('Host component tests with content projection', () => {
    let hostComponent: TestHostComponent;
    let hostFixture: ComponentFixture<TestHostComponent>;
    let collapsibleComponent: CollapsibleSectionComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [TestHostComponent],
        imports: [CollapsibleSectionComponent],
      }).compileComponents();

      hostFixture = TestBed.createComponent(TestHostComponent);
      hostComponent = hostFixture.componentInstance;
      hostFixture.detectChanges();

      // Get the CollapsibleSectionComponent instance
      collapsibleComponent = hostFixture.debugElement.query(
        By.directive(CollapsibleSectionComponent)
      ).componentInstance;
    });

    it('should properly project content', () => {
      const projectedContent = hostFixture.debugElement.query(
        By.css('.test-content')
      );
      expect(projectedContent).toBeTruthy();
      expect(projectedContent.nativeElement.textContent).toContain(
        'Projected content'
      );
    });

    it('should receive input properties from host', () => {
      expect(collapsibleComponent.title).toBe('Test Title');
      expect(collapsibleComponent.initiallyCollapsed).toBeFalse();
      expect(collapsibleComponent.variant).toBe('component');

      // Change host properties
      hostComponent.title = 'New Title';
      hostComponent.initiallyCollapsed = true;
      hostComponent.variant = 'filters';
      hostFixture.detectChanges();

      expect(collapsibleComponent.title).toBe('New Title');
      expect(collapsibleComponent.initiallyCollapsed).toBeTrue();
      expect(collapsibleComponent.variant).toBe('filters');
    });

    it('should emit toggled event to host when clicked', () => {
      const headerEl = hostFixture.debugElement.query(
        By.css('.component-header')
      );

      // Initial state
      expect(hostComponent.toggledState).toBeNull();

      // Click to toggle
      headerEl.nativeElement.click();
      hostFixture.detectChanges();

      expect(hostComponent.toggledState).toBeTrue();

      // Click to toggle again
      headerEl.nativeElement.click();
      hostFixture.detectChanges();

      expect(hostComponent.toggledState).toBeFalse();
    });

    it('should render correct header element based on variant', () => {
      // Default component variant should use h3
      let h3Element = hostFixture.debugElement.query(By.css('h3'));
      let h4Element = hostFixture.debugElement.query(By.css('h4'));

      expect(h3Element).toBeTruthy();
      expect(h4Element).toBeFalsy();
      expect(h3Element.nativeElement.textContent.trim()).toBe('Test Title');

      // Switch to category variant which should use h4
      hostComponent.variant = 'category';
      hostFixture.detectChanges();

      h3Element = hostFixture.debugElement.query(By.css('h3'));
      h4Element = hostFixture.debugElement.query(By.css('h4'));

      expect(h3Element).toBeFalsy();
      expect(h4Element).toBeTruthy();
      expect(h4Element.nativeElement.textContent.trim()).toBe('Test Title');
    });
  });

  describe('Edge cases', () => {
    let component: CollapsibleSectionComponent;
    let fixture: ComponentFixture<CollapsibleSectionComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CollapsibleSectionComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(CollapsibleSectionComponent);
      component = fixture.componentInstance;
    });

    it('should handle empty title', () => {
      component.title = '';
      fixture.detectChanges();

      const titleEl = fixture.debugElement.query(By.css('.component-title'));
      expect(titleEl.nativeElement.textContent.trim()).toBe('');
    });

    it('should handle invalid variant gracefully', () => {
      // @ts-ignore - Intentionally testing with invalid value
      component.variant = 'invalid-variant';
      component.title = 'Test';
      fixture.detectChanges();

      // Should default to component variant
      expect(component.variant).toBe('component');
      expect(component.headerClass).toBe('component-header');
      expect(component.titleClass).toBe('component-title');
      expect(component.contentClass).toBe('component-content');
    });

    it('should use default chevron icon path if not provided', () => {
      component.title = 'Test';
      fixture.detectChanges();

      const imgEl = fixture.debugElement.query(By.css('img'));
      expect(imgEl.properties['src']).toBe('assets/next.webp');
    });

    it('should use custom chevron icon path when provided', () => {
      component.title = 'Test';
      component.chevronIconPath = 'assets/custom-icon.png';
      fixture.detectChanges();

      const imgEl = fixture.debugElement.query(By.css('img'));
      expect(imgEl.properties['src']).toBe('assets/custom-icon.png');
    });
  });
});
