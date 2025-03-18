import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarbondFiltersComponent } from './warbond-filters.component';
import { WarbondFilterStateService } from '../warbond-filter-state.service';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';
import { of } from 'rxjs';

describe('WarbondFiltersComponent', () => {
  let component: WarbondFiltersComponent;
  let fixture: ComponentFixture<WarbondFiltersComponent>;
  let warbondFilterStateService: jasmine.SpyObj<WarbondFilterStateService>;

  beforeEach(async () => {
    // Create spy for the WarbondFilterStateService
    const warbondFilterStateSpy = jasmine.createSpyObj(
      'WarbondFilterStateService',
      ['toggleWarbond'],
      {
        // Mock the Observable properties with BehaviorSubject
        disabledIds$: of([1, 3]),
      }
    );

    await TestBed.configureTestingModule({
      imports: [WarbondFiltersComponent],
      providers: [
        { provide: WarbondFilterStateService, useValue: warbondFilterStateSpy },
      ],
    }).compileComponents();

    warbondFilterStateService = TestBed.inject(
      WarbondFilterStateService
    ) as jasmine.SpyObj<WarbondFilterStateService>;
    fixture = TestBed.createComponent(WarbondFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with disabled IDs from service', () => {
    expect(component.disabledIds).toEqual([1, 3]);
  });

  it('should call toggleWarbond service method when togglewarbond is called', () => {
    // Act
    component.togglewarbond(5);

    // Assert
    expect(warbondFilterStateService.toggleWarbond).toHaveBeenCalledWith(5);
  });

  it('should have scroll buttons in the template', () => {
    // Arrange
    const scrollLeftButton = fixture.debugElement.query(
      By.css('.scroll-button-left')
    );
    const scrollRightButton = fixture.debugElement.query(
      By.css('.scroll-button-right')
    );

    // Assert
    expect(scrollLeftButton).toBeTruthy();
    expect(scrollRightButton).toBeTruthy();
  });

  it('should display warbond images with correct disabled state', () => {
    // Arrange
    fixture.detectChanges();
    const warbondImages = fixture.debugElement.queryAll(
      By.css('.warbond-filter-icon')
    );

    // Assert - At least one icon should exist
    expect(warbondImages.length).toBeGreaterThan(0);

    // Find disabled warbonds (should have the disabled class)
    const disabledWarbondElements = fixture.debugElement.queryAll(
      By.css('.warbond-filter-icon-disabled')
    );

    // We expect disabled elements to match our mocked disabledIds array
    expect(disabledWarbondElements.length).toBeGreaterThan(0);
  });

  describe('scroll functionality', () => {
    // Helper method to mock the scrollContainer
    function mockScrollContainer() {
      // Create a mock element with scrollBy method
      const mockElement = {
        scrollBy: jasmine.createSpy('scrollBy'),
        querySelector: jasmine.createSpy('querySelector').and.returnValue({
          offsetWidth: 100,
        }),
      };

      // Set the mock element to the component's scrollContainer
      component.scrollContainer = {
        nativeElement: mockElement,
      } as unknown as ElementRef;

      return mockElement;
    }

    it('should scroll left when scrollLeft is called', () => {
      // Arrange
      const mockElement = mockScrollContainer();

      // Act
      component.scrollLeft();

      // Assert
      expect(mockElement.scrollBy).toHaveBeenCalledWith({
        left: -100,
        behavior: 'smooth',
      });
    });

    it('should scroll right when scrollRight is called', () => {
      // Arrange
      const mockElement = mockScrollContainer();

      // Act
      component.scrollRight();

      // Assert
      expect(mockElement.scrollBy).toHaveBeenCalledWith({
        left: 100,
        behavior: 'smooth',
      });
    });

    it('should call scrollLeft when left button is clicked', () => {
      // Arrange
      spyOn(component, 'scrollLeft');
      const leftButton = fixture.debugElement.query(
        By.css('.scroll-button-left')
      );

      // Act
      leftButton.triggerEventHandler('click', null);

      // Assert
      expect(component.scrollLeft).toHaveBeenCalled();
    });

    it('should call scrollRight when right button is clicked', () => {
      // Arrange
      spyOn(component, 'scrollRight');
      const rightButton = fixture.debugElement.query(
        By.css('.scroll-button-right')
      );

      // Act
      rightButton.triggerEventHandler('click', null);

      // Assert
      expect(component.scrollRight).toHaveBeenCalled();
    });
  });
});
