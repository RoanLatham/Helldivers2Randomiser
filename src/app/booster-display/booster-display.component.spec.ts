import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoosterDisplayComponent } from './booster-display.component';
import { Booster, boosters } from '../boosters';
import { By } from '@angular/platform-browser';

describe('BoosterDisplayComponent', () => {
  let component: BoosterDisplayComponent;
  let fixture: ComponentFixture<BoosterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoosterDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoosterDisplayComponent);
    component = fixture.componentInstance;
    // Set a valid ID before detecting changes to avoid errors
    component.id = boosters[0].id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setting id input property', () => {
    it('should update the booster when id is set', () => {
      // Arrange - Get a test booster
      const testBooster = boosters[0];

      // Act - Set the id
      component.id = testBooster.id;
      fixture.detectChanges();

      // Assert - Verify the booster was updated
      expect(component.booster).toBeDefined();
      expect(component.booster.id).toEqual(testBooster.id);
      expect(component.booster.name).toEqual(testBooster.name);
    });

    it('should log an error for an invalid booster ID', () => {
      // Arrange
      spyOn(console, 'error');

      // Initialize booster with a default value to prevent template errors
      component.booster = boosters[0]; // Set a default before changing to invalid ID

      // Act - Set an invalid ID
      component.id = 9999; // Assuming 9999 is not a valid ID
      fixture.detectChanges();

      // Assert - Verify an error was logged
      expect(console.error).toHaveBeenCalledWith(
        'No booster found with ID 9999'
      );
    });
  });
});
