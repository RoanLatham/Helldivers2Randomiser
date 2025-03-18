import { TestBed } from '@angular/core/testing';

import { GtagService } from './gtag-service.service';

// Add proper typing for the gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

describe('GtagService', () => {
  let service: GtagService;
  let gtagSpy: jasmine.Spy;

  beforeEach(() => {
    // Mock the global gtag function
    window.gtag = window.gtag || function () {};
    gtagSpy = spyOn(window, 'gtag');

    TestBed.configureTestingModule({
      providers: [GtagService],
    });
    service = TestBed.inject(GtagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call gtag with proper event parameters', () => {
    // Arrange
    const eventName = 'test_event';
    const eventDetails = 'test details';
    const eventCategory = 'TEST_CATEGORY';

    // Act
    service.trackEvent(eventName, eventDetails, eventCategory);

    // Assert
    expect(gtagSpy).toHaveBeenCalledWith('event', eventName, {
      event_category: eventCategory,
      event_label: eventName,
      value: eventDetails,
    });
  });

  it('should properly track different events', () => {
    // Arrange & Act
    service.trackEvent('click', 'button clicked', 'UI_INTERACTION');
    service.trackEvent('pageview', 'home page viewed', 'PAGE_VIEW');

    // Assert
    expect(gtagSpy).toHaveBeenCalledTimes(2);
    expect(gtagSpy.calls.argsFor(0)).toEqual([
      'event',
      'click',
      {
        event_category: 'UI_INTERACTION',
        event_label: 'click',
        value: 'button clicked',
      },
    ]);
    expect(gtagSpy.calls.argsFor(1)).toEqual([
      'event',
      'pageview',
      {
        event_category: 'PAGE_VIEW',
        event_label: 'pageview',
        value: 'home page viewed',
      },
    ]);
  });
});
