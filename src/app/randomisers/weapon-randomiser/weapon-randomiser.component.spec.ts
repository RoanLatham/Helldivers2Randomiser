import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponRandomiserComponent } from './weapon-randomiser.component';
import { WeaponFilterStateService } from '../../services/weapon-filter-state.service';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import {
  primaryWeapons,
  secondaryWeapons,
  grenades,
} from '../../services/weapons';
import { WeaponDisplayComponent } from '../../displays/weapon-display/weapon-display.component';

describe('WeaponRandomiserComponent', () => {
  let component: WeaponRandomiserComponent;
  let fixture: ComponentFixture<WeaponRandomiserComponent>;
  let weaponFilterStateService: jasmine.SpyObj<WeaponFilterStateService>;
  let disabledIds$: BehaviorSubject<number[]>;

  beforeEach(async () => {
    // Create a BehaviorSubject to mock the disabledIds$ observable
    disabledIds$ = new BehaviorSubject<number[]>([]);

    // Create a spy for the WeaponFilterStateService
    const weaponFilterStateServiceSpy = jasmine.createSpyObj(
      'WeaponFilterStateService',
      [],
      {
        disabledIds$: disabledIds$.asObservable(),
      }
    );

    await TestBed.configureTestingModule({
      imports: [WeaponRandomiserComponent, WeaponDisplayComponent],
      providers: [
        {
          provide: WeaponFilterStateService,
          useValue: weaponFilterStateServiceSpy,
        },
      ],
    }).compileComponents();

    weaponFilterStateService = TestBed.inject(
      WeaponFilterStateService
    ) as jasmine.SpyObj<WeaponFilterStateService>;
    fixture = TestBed.createComponent(WeaponRandomiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('should initialize weapon ID arrays', () => {
      expect(component.primaryWeaponIds).toEqual(
        primaryWeapons.map((weapon) => weapon.id)
      );
      expect(component.secondaryWeaponIds).toEqual(
        secondaryWeapons.map((weapon) => weapon.id)
      );
      expect(component.grenadeIds).toEqual(grenades.map((weapon) => weapon.id));
    });

    it('should subscribe to disabledIds$ observable', () => {
      // Arrange
      const testDisabledIds = [1, 2, 3];

      // Act
      disabledIds$.next(testDisabledIds);

      // Assert
      expect(component.disabledIds).toEqual(testDisabledIds);
    });

    it('should call getRandomIds on initialization', () => {
      // Arrange
      spyOn(component, 'getRandomIds');

      // Act
      component.ngOnInit();

      // Assert
      expect(component.getRandomIds).toHaveBeenCalled();
    });
  });

  describe('randomise method', () => {
    it('should call getRandomIds', () => {
      // Arrange
      spyOn(component, 'getRandomIds');

      // Act
      component.randomise();

      // Assert
      expect(component.getRandomIds).toHaveBeenCalled();
    });
  });

  describe('getRandomIds method', () => {
    it('should set random IDs for primary, secondary weapons and grenades', () => {
      // Arrange
      spyOn(component, 'getRandomWeaponId').and.returnValues(10, 20, 30);

      // Act
      component.getRandomIds();

      // Assert
      expect(component.primaryWeaponId).toBe(10);
      expect(component.secondaryWeaponId).toBe(20);
      expect(component.grenadeId).toBe(30);
      expect(component.getRandomWeaponId).toHaveBeenCalledTimes(3);
    });
  });

  describe('getRandomWeaponId method', () => {
    it('should return a random ID from the available IDs that is not disabled', () => {
      // Arrange
      const weaponIds = [1, 2, 3, 4, 5];
      disabledIds$.next([2, 4]); // Disable some IDs

      // Mock random to always choose the first element for testing
      spyOn(Math, 'random').and.returnValue(0);

      // Act
      const result = component.getRandomWeaponId(weaponIds, 1);

      // Assert
      expect(result).toBe(1); // First available ID after filtering
      // The available IDs should be [1, 3, 5] and Math.random() returns 0
    });

    it('should handle if all weapon IDs are disabled by returning the previous ID', () => {
      // Arrange
      const weaponIds = [1, 2, 3];
      disabledIds$.next([1, 2, 3]); // Disable all IDs
      const previousId = 2;

      // Act
      const result = component.getRandomWeaponId(weaponIds, previousId);

      // Assert
      expect(result).toBe(previousId);
    });
  });

  describe('template rendering', () => {
    it('should include WeaponDisplayComponent for each weapon type', () => {
      // Arrange
      component.primaryWeaponId = primaryWeapons[0].id;
      component.secondaryWeaponId = secondaryWeapons[0].id;
      component.grenadeId = grenades[0].id;
      fixture.detectChanges();

      // Act
      const weaponDisplayComponents = fixture.debugElement.queryAll(
        By.directive(WeaponDisplayComponent)
      );

      // Assert
      expect(weaponDisplayComponents.length).toBe(3); // One for each weapon type
    });

    it('should pass the correct weapon IDs to the WeaponDisplayComponents', () => {
      // Arrange
      component.primaryWeaponId = 10;
      component.secondaryWeaponId = 20;
      component.grenadeId = 30;
      fixture.detectChanges();

      // Act
      const weaponDisplayComponents = fixture.debugElement.queryAll(
        By.directive(WeaponDisplayComponent)
      );

      // Assert - Check that the IDs are passed correctly
      // This assumes the order of components in the template: primary, secondary, grenade
      if (weaponDisplayComponents.length === 3) {
        expect(weaponDisplayComponents[0].componentInstance.id).toBe(10);
        expect(weaponDisplayComponents[1].componentInstance.id).toBe(20);
        expect(weaponDisplayComponents[2].componentInstance.id).toBe(30);
      }
    });
  });
});
