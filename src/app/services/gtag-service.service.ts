import { Injectable } from '@angular/core';

declare var gtag: any;

@Injectable({ providedIn: 'root' })
export class GtagService {
  trackEvent(eventName: string, eventDetails: string, eventCategory: string) {
    // Check if gtag is defined before calling it
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        // event Type - example: 'SCROLL_TO_TOP_CLICKED'
        event_category: eventCategory,
        // the label that will show up in the dashboard as the events name
        event_label: eventName,
        // a short description of what happened
        value: eventDetails,
      });
    } else {
      // In test environment, just log to console
      console.log(
        'GTag event would be tracked:',
        eventName,
        eventDetails,
        eventCategory
      );
    }
  }
}
