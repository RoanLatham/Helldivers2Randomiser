import { TestBed } from '@angular/core/testing';
import { WarbondFilterStateService } from './warbond-filter-state.service';
import { BoosterFilterStateService } from './booster-filter-state.service';
import { WeaponFilterStateService } from './weapon-filter-state.service';
import { BehaviorSubject } from 'rxjs';
import { Warbond } from './warbonds';

describe('WarbondFilterStateService', () => {
  let service: WarbondFilterStateService;
  let mockBoosterFilterStateService: jasmine.SpyObj<BoosterFilterStateService>;
  let mockWeaponFilterStateService: jasmine.SpyObj<WeaponFilterStateService>;
  let boosterDisabledIds$: BehaviorSubject<number[]>;
  let weaponDisabledIds$: BehaviorSubject<number[]>;

  // Create mock Warbond with the correct typing
  const createMockWarbond = (id: number): Warbond => ({
    id,
    name: 'Test Warbond',
    iconPath: '',
    PrimaryWeaponIds: [101, 102],
    SecondaryWeaponIds: [201],
    GrenadeIds: [301],
    BoosterIds: [401, 402],
    tier: 'Basic',
  });

  beforeEach(() => {
    // Create behavior subjects to mock the observables
    boosterDisabledIds$ = new BehaviorSubject<number[]>([]);
    weaponDisabledIds$ = new BehaviorSubject<number[]>([]);

    // Create mock services
    const boosterServiceSpy = jasmine.createSpyObj(
      'BoosterFilterStateService',
      ['enableBooster', 'disableBooster'],
      { disabledIds$: boosterDisabledIds$.asObservable() }
    );

    const weaponServiceSpy = jasmine.createSpyObj(
      'WeaponFilterStateService',
      ['enableWeapon', 'disableWeapon'],
      { disabledIds$: weaponDisabledIds$.asObservable() }
    );

    TestBed.configureTestingModule({
      providers: [
        WarbondFilterStateService,
        { provide: BoosterFilterStateService, useValue: boosterServiceSpy },
        { provide: WeaponFilterStateService, useValue: weaponServiceSpy },
      ],
    });

    service = TestBed.inject(WarbondFilterStateService);
    mockBoosterFilterStateService = TestBed.inject(
      BoosterFilterStateService
    ) as jasmine.SpyObj<BoosterFilterStateService>;
    mockWeaponFilterStateService = TestBed.inject(
      WeaponFilterStateService
    ) as jasmine.SpyObj<WeaponFilterStateService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with empty disabled IDs', () => {
    let disabledIds: number[] = [];
    service.disabledIds$.subscribe((ids) => {
      disabledIds = ids;
    });
    expect(disabledIds).toEqual([]);
  });

  describe('warbond toggle functionality', () => {
    it('should enable all weapons and boosters of a warbond when toggling a disabled warbond', () => {
      // Setup - Mock a warbond that should be considered disabled
      const mockWarbondId = 1;
      // Create a mock warbond
      const mockWarbond = createMockWarbond(mockWarbondId);

      // Override service.warbonds property
      Object.defineProperty(service, 'warbonds', {
        get: () => [mockWarbond],
      });

      // Mock that all weapons and boosters are disabled
      spyOn(service, 'isWarbondDisabled').and.returnValue(true);

      // Act - Toggle the warbond
      service.toggleWarbond(mockWarbondId);

      // Assert - Verify that all the enable methods were called for the weapons and boosters
      expect(mockWeaponFilterStateService.enableWeapon).toHaveBeenCalledWith(
        101
      );
      expect(mockWeaponFilterStateService.enableWeapon).toHaveBeenCalledWith(
        102
      );
      expect(mockWeaponFilterStateService.enableWeapon).toHaveBeenCalledWith(
        201
      );
      expect(mockWeaponFilterStateService.enableWeapon).toHaveBeenCalledWith(
        301
      );
      expect(mockBoosterFilterStateService.enableBooster).toHaveBeenCalledWith(
        401
      );
      expect(mockBoosterFilterStateService.enableBooster).toHaveBeenCalledWith(
        402
      );
    });

    it('should disable all weapons and boosters of a warbond when toggling an enabled warbond', () => {
      // Setup - Mock a warbond that should be considered enabled
      const mockWarbondId = 1;
      // Create a mock warbond
      const mockWarbond = createMockWarbond(mockWarbondId);

      // Override service.warbonds property
      Object.defineProperty(service, 'warbonds', {
        get: () => [mockWarbond],
      });

      // Mock that the warbond is enabled
      spyOn(service, 'isWarbondDisabled').and.returnValue(false);

      // Act - Toggle the warbond
      service.toggleWarbond(mockWarbondId);

      // Assert - Verify that all the disable methods were called for the weapons and boosters
      expect(mockWeaponFilterStateService.disableWeapon).toHaveBeenCalledWith(
        101
      );
      expect(mockWeaponFilterStateService.disableWeapon).toHaveBeenCalledWith(
        102
      );
      expect(mockWeaponFilterStateService.disableWeapon).toHaveBeenCalledWith(
        201
      );
      expect(mockWeaponFilterStateService.disableWeapon).toHaveBeenCalledWith(
        301
      );
      expect(mockBoosterFilterStateService.disableBooster).toHaveBeenCalledWith(
        401
      );
      expect(mockBoosterFilterStateService.disableBooster).toHaveBeenCalledWith(
        402
      );
    });
  });

  describe('isWarbondDisabled method', () => {
    it('should determine a warbond is disabled when all its components are disabled', () => {
      // Arrange - Set up a mock warbond
      const mockWarbond = createMockWarbond(1);

      // Update the disabled IDs for weapons and boosters
      weaponDisabledIds$.next([101, 102, 201, 301]);
      boosterDisabledIds$.next([401, 402]);

      // Act & Assert
      expect(service.isWarbondDisabled(mockWarbond)).toBeTrue();
    });

    it('should determine a warbond is not disabled when some of its components are enabled', () => {
      // Arrange - Set up a mock warbond
      const mockWarbond = createMockWarbond(1);

      // Update the disabled IDs for weapons and boosters - missing some IDs
      weaponDisabledIds$.next([101, 301]);
      boosterDisabledIds$.next([401]);

      // Act & Assert
      expect(service.isWarbondDisabled(mockWarbond)).toBeFalse();
    });
  });

  describe('checkDisabledWarbonds method', () => {
    // TODO Maybe this test should mock less?
    it('should update disabled warbonds based on their component states', () => {
      // Arrange - Set up mock warbonds
      const mockWarbonds = [
        createMockWarbond(1), // Fully Disabled Warbond
        createMockWarbond(2), // Partially Disabled Warbond
      ];

      // Override service.warbonds property
      Object.defineProperty(service, 'warbonds', {
        get: () => mockWarbonds,
      });

      // Mock the isWarbondDisabled method to return true for the first warbond and false for the second
      spyOn(service, 'isWarbondDisabled').and.callFake(
        (warbond) => warbond.id === 1
      );

      // Act
      service.checkDisabledWarbonds();

      // Assert - Only warbond with ID 1 should be in the disabled list
      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });

      expect(disabledIds).toContain(1);
      expect(disabledIds).not.toContain(2);
    });
  });
});
