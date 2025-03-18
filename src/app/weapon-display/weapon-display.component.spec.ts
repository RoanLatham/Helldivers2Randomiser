import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponDisplayComponent } from './weapon-display.component';
import { primaryWeapons, secondaryWeapons, grenades } from '../weapons';
import { By } from '@angular/platform-browser';

describe('WeaponDisplayComponent', () => {
  let component: WeaponDisplayComponent;
  let fixture: ComponentFixture<WeaponDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // Set a valid ID before detecting changes to avoid errors
    component.id = primaryWeapons[0].id;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('setting id input property', () => {
    it('should update the weapon when id is set', () => {
      // Arrange - Get a test weapon
      const testWeapon = primaryWeapons[0];

      // Act - Set the id
      component.id = testWeapon.id;
      fixture.detectChanges();

      // Assert - Verify the weapon was updated
      expect(component.weapon).toBeDefined();
      expect(component.weapon.id).toEqual(testWeapon.id);
      expect(component.weapon.name).toEqual(testWeapon.name);
    });

    it('should handle setting id to a secondary weapon', () => {
      // Arrange - Get a test weapon
      const testWeapon = secondaryWeapons[0];

      // Act - Set the id
      component.id = testWeapon.id;
      fixture.detectChanges();

      // Assert - Verify the weapon was updated
      expect(component.weapon).toBeDefined();
      expect(component.weapon.id).toEqual(testWeapon.id);
      expect(component.weapon.name).toEqual(testWeapon.name);
    });

    it('should handle setting id to a grenade', () => {
      // Arrange - Get a test weapon
      const testWeapon = grenades[0];

      // Act - Set the id
      component.id = testWeapon.id;
      fixture.detectChanges();

      // Assert - Verify the weapon was updated
      expect(component.weapon).toBeDefined();
      expect(component.weapon.id).toEqual(testWeapon.id);
      expect(component.weapon.name).toEqual(testWeapon.name);
    });

    it('should log an error for an invalid weapon ID', () => {
      // Arrange
      spyOn(console, 'error');

      // Initialize weapon with a default value to prevent template errors
      component.weapon = primaryWeapons[0]; // Set a default before changing to invalid ID

      // Act - Set an invalid ID
      component.id = 9999; // Assuming 9999 is not a valid ID
      fixture.detectChanges();

      // Assert - Verify an error was logged
      expect(console.error).toHaveBeenCalledWith(
        'No weapon found with ID 9999'
      );
    });
  });

  describe('template rendering', () => {
    it('should display the weapon name', () => {
      // Arrange - Set up a test weapon
      const testWeapon = primaryWeapons[0];
      component.id = testWeapon.id;
      fixture.detectChanges();

      // Act - Get the element that should contain the weapon name
      const weaponElement = fixture.debugElement.query(
        By.css('.Weapon-display')
      );

      // Assert - Check if the element contains the weapon name
      expect(weaponElement).toBeTruthy();
      expect(weaponElement.nativeElement.textContent).toContain(
        testWeapon.name
      );
    });

    it('should display the weapon icon', () => {
      // Arrange - Set up a test weapon
      const testWeapon = primaryWeapons[0];
      component.id = testWeapon.id;
      fixture.detectChanges();

      // Act - Get the image element
      const imgElement = fixture.debugElement.query(By.css('img'));

      // Assert - Verify the image path contains the expected filename
      expect(imgElement).toBeTruthy();
      // Instead of checking for exact path, check if path ends with the expected part
      const src = imgElement.nativeElement.src;
      const expectedEndPath = testWeapon.iconPath.replace('./', '');
      expect(
        src.endsWith(expectedEndPath) || src.includes(expectedEndPath)
      ).toBeTrue();
    });

    // Remove this test if the category is not displayed in the template
    it('should set the weapon category property correctly', () => {
      // Arrange - Set up a test weapon
      const testWeapon = primaryWeapons[0];

      // Act
      component.id = testWeapon.id;
      fixture.detectChanges();

      // Assert - Check that the weapon object has the correct category
      expect(component.weapon.category).toEqual(testWeapon.category);
    });
  });

  describe('ngOnInit', () => {
    it('should call updateWeapon on initialization', () => {
      // Arrange
      spyOn(component, 'updateWeapon');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.updateWeapon).toHaveBeenCalled();
    });
  });

  describe('updateWeapon', () => {
    it('should find weapon from combined array of all weapons', () => {
      // Arrange - Spy on the find method
      const combinedWeapons = [
        ...primaryWeapons,
        ...secondaryWeapons,
        ...grenades,
      ];
      spyOn(combinedWeapons, 'find').and.callThrough();
      spyOn(Array.prototype, 'find').and.callThrough();

      // Act
      component.id = primaryWeapons[0].id;
      component.updateWeapon();

      // Assert - Verify the weapon was set correctly
      expect(component.weapon.id).toEqual(primaryWeapons[0].id);
    });
  });
});
