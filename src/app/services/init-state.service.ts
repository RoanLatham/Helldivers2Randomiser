import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitStateService {
  // Track if this is the first load of the application
  private isFirstLoad = true;

  // Subject to emit when settings are loaded and randomizers should be initialized
  private settingsLoadedSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  /**
   * Gets the observable that emits when settings are loaded
   * Randomizers can subscribe to this to know when to initialize
   */
  get settingsLoaded$(): Observable<boolean> {
    return this.settingsLoadedSubject.asObservable();
  }

  /**
   * Check if this is the first load of the application
   */
  get isFirstTimeLoad(): boolean {
    return this.isFirstLoad;
  }

  /**
   * Mark settings as loaded, which will trigger randomizers to initialize
   * if this is the first load of the application
   */
  notifySettingsLoaded(): void {
    if (this.isFirstLoad) {
      this.settingsLoadedSubject.next(true);
      // No longer the first load after this
      this.isFirstLoad = false;
    }
  }

  /**
   * Reset the first load state (mainly for testing)
   */
  reset(): void {
    this.isFirstLoad = true;
    this.settingsLoadedSubject.next(false);
  }
}
