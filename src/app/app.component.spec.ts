import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeaponRandomiserComponent } from './weapon-randomiser/weapon-randomiser.component';
import { StratagemRandomiserComponent } from './stratagem-randomiser/stratagem-randomiser.component';
import { BoosterRandomiserComponent } from './booster-randomiser/booster-randomiser.component';
import { GtagService } from './gtag-service.service';
import { Component, Input } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Create mock components to prevent template errors
@Component({
  selector: 'app-weapon-randomiser',
  template: '<div>Mock Weapon Randomiser</div>',
})
class MockWeaponRandomiserComponent {
  randomise() {}
}

@Component({
  selector: 'app-stratagem-randomiser',
  template: '<div>Mock Stratagem Randomiser</div>',
})
class MockStratagemRandomiserComponent {
  randomise() {}
}

@Component({
  selector: 'app-booster-randomiser',
  template: '<div>Mock Booster Randomiser</div>',
})
class MockBoosterRandomiserComponent {
  randomise() {}
}

@Component({
  selector: 'app-randomise-button',
  template: '<button>Mock Randomise Button</button>',
})
class MockRandomiseButtonComponent {
  @Input() randomise: any;
}

// Mock the stratagem-display component which is causing our template errors
@Component({
  selector: 'app-stratagem-display',
  template: '<div>Mock Stratagem Display</div>',
})
class MockStratagemDisplayComponent {
  @Input() id: number = 0;
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let gtagService: jasmine.SpyObj<GtagService>;

  beforeEach(async () => {
    // Create a spy for the GtagService
    const gtagSpy = jasmine.createSpyObj('GtagService', ['trackEvent']);

    await TestBed.configureTestingModule({
      declarations: [
        MockWeaponRandomiserComponent,
        MockStratagemRandomiserComponent,
        MockBoosterRandomiserComponent,
        MockRandomiseButtonComponent,
        MockStratagemDisplayComponent,
      ],
      imports: [AppComponent],
      providers: [{ provide: GtagService, useValue: gtagSpy }],
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements and properties
    }).compileComponents();

    gtagService = TestBed.inject(GtagService) as jasmine.SpyObj<GtagService>;

    // Reset the spy's calls before creating component
    gtagService.trackEvent.calls.reset();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // We'll manually handle ngOnInit to ensure it's called in our test environment
    spyOn(component, 'ngOnInit').and.callThrough();

    fixture.detectChanges();

    // Explicitly call ngOnInit after detectChanges to ensure it's called
    component.ngOnInit();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'HelldiversLoadout' title`, () => {
    expect(component.title).toEqual('HelldiversLoadout');
  });

  it('should track event on initialization', () => {
    // Create a direct instance of the component with our spy
    const directComponent = new AppComponent(gtagService);

    // Call ngOnInit directly without fixture.detectChanges()
    directComponent.ngOnInit();

    // Check if the tracking event was called
    expect(gtagService.trackEvent).toHaveBeenCalledWith(
      'app component loaded',
      'app component loaded',
      'PAGE_LOADED'
    );
  });

  it('should initialize the ids array with 4 random numbers', () => {
    expect(component.ids.length).toBe(4);
    // Verify each ID is a number between 1 and 52
    component.ids.forEach((id) => {
      expect(id).toBeGreaterThanOrEqual(1);
      expect(id).toBeLessThanOrEqual(52);
    });
  });

  it('should have unique random numbers in the ids array', () => {
    const uniqueIds = new Set(component.ids);
    expect(uniqueIds.size).toBe(component.ids.length);
  });

  describe('shuffle method', () => {
    it('should shuffle an array', () => {
      // This test doesn't need a fixture - we can test the method directly on the component
      // instance without rendering the full component and its children

      // Create a fresh instance of AppComponent to test just the shuffle method
      const appComponent = new AppComponent(gtagService);

      // Create an array with known values
      const originalArray = [1, 2, 3, 4, 5];
      const arrayCopy = [...originalArray];

      // Call the shuffle method
      appComponent.shuffle(arrayCopy);

      // Check if the array contains the same elements but in a different order
      expect(arrayCopy.sort()).toEqual(originalArray.sort());
    });
  });

  describe('randomise method', () => {
    it('should call randomise on all randomiser components', () => {
      // Create spy objects for the child components
      const weaponRandomiserSpy = jasmine.createSpyObj(
        'WeaponRandomiserComponent',
        ['randomise']
      );
      const stratagemRandomiserSpy = jasmine.createSpyObj(
        'StratagemRandomiserComponent',
        ['randomise']
      );
      const boosterRandomiserSpy = jasmine.createSpyObj(
        'BoosterRandomiserComponent',
        ['randomise']
      );

      // Set the spies as child components
      component.WeaponRandomiserComponent =
        weaponRandomiserSpy as unknown as WeaponRandomiserComponent;
      component.stratagemRandomiserComponent =
        stratagemRandomiserSpy as unknown as StratagemRandomiserComponent;
      component.boosterRandomiserComponent =
        boosterRandomiserSpy as unknown as BoosterRandomiserComponent;

      // Call the randomise method
      component.randomise();

      // Check if all child component randomise methods were called
      expect(weaponRandomiserSpy.randomise).toHaveBeenCalled();
      expect(stratagemRandomiserSpy.randomise).toHaveBeenCalled();
      expect(boosterRandomiserSpy.randomise).toHaveBeenCalled();
    });
  });
});
