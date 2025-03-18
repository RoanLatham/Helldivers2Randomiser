import { TestBed } from '@angular/core/testing';

import { StratagemFilterStateService } from './stratagem-filter-state.service';

describe('StratagemFilterStateService', () => {
  let service: StratagemFilterStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StratagemFilterStateService],
    });
    service = TestBed.inject(StratagemFilterStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('stratagem id management', () => {
    it('should disable a stratagem', () => {
      // Arrange - Get initial state
      let currentIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        currentIds = ids;
      });
      expect(currentIds).toEqual([]);

      // Act - Disable stratagem with ID 1
      service.disableStratagem(1);

      // Assert - Check if ID 1 is in the disabled list
      expect(currentIds).toEqual([1]);
    });

    it('should enable a disabled stratagem', () => {
      // Arrange - Disable stratagem first
      service.disableStratagem(1);
      service.disableStratagem(2);
      let currentIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        currentIds = ids;
      });
      expect(currentIds).toContain(1);
      expect(currentIds).toContain(2);

      // Act - Enable stratagem with ID 1
      service.enableStratagem(1);

      // Assert - Check if ID 1 is removed from the disabled list
      expect(currentIds).not.toContain(1);
      expect(currentIds).toContain(2);
    });

    it('should toggle a stratagem correctly', () => {
      // Arrange
      let currentIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        currentIds = ids;
      });

      // Act & Assert - Toggle a stratagem (should disable it first)
      service.toggleStratagem(5);
      expect(currentIds).toContain(5);

      // Act & Assert - Toggle again (should enable it)
      service.toggleStratagem(5);
      expect(currentIds).not.toContain(5);
    });
  });

  describe('backpack settings', () => {
    it('should toggle onlyOneBackpack setting', () => {
      // Arrange
      let backpackSetting = false;
      service.onlyOneBackpack$.subscribe((val) => {
        backpackSetting = val;
      });
      expect(backpackSetting).toBeFalse();

      // Act
      service.toggleOnlyOneBackpack();

      // Assert
      expect(backpackSetting).toBeTrue();

      // Act again
      service.toggleOnlyOneBackpack();

      // Assert
      expect(backpackSetting).toBeFalse();
    });

    it('should set onlyOneBackpack value directly', () => {
      // Arrange
      let backpackSetting = false;
      service.onlyOneBackpack$.subscribe((val) => {
        backpackSetting = val;
      });

      // Act
      service.setOnlyOneBackpack(true);

      // Assert
      expect(backpackSetting).toBeTrue();
    });

    it('should toggle guaranteeBackpack setting', () => {
      // Arrange
      let guaranteeBackpackSetting = false;
      service.guaranteeBackpack$.subscribe((val) => {
        guaranteeBackpackSetting = val;
      });
      expect(guaranteeBackpackSetting).toBeFalse();

      // Act
      service.toggleGuatenteeBackpack();

      // Assert
      expect(guaranteeBackpackSetting).toBeTrue();
    });

    it('should set guaranteeBackpack value directly', () => {
      // Arrange
      let guaranteeBackpackSetting = false;
      service.guaranteeBackpack$.subscribe((val) => {
        guaranteeBackpackSetting = val;
      });

      // Act
      service.setGuatenteeBackpack(true);

      // Assert
      expect(guaranteeBackpackSetting).toBeTrue();
    });

    // TODO if possible test results of a proper randomization
  });

  describe('support settings', () => {
    it('should toggle onlyOneSupport setting', () => {
      // Arrange
      let supportSetting = false;
      service.onlyOneSupport$.subscribe((val) => {
        supportSetting = val;
      });
      expect(supportSetting).toBeFalse();

      // Act
      service.toggleOnlyOneSupport();

      // Assert
      expect(supportSetting).toBeTrue();
    });

    it('should set onlyOneSupport value directly', () => {
      // Arrange
      let supportSetting = false;
      service.onlyOneSupport$.subscribe((val) => {
        supportSetting = val;
      });

      // Act
      service.setOnlyOneSupport(true);

      // Assert
      expect(supportSetting).toBeTrue();
    });

    it('should toggle guaranteeSupport setting', () => {
      // Arrange
      let guaranteeSupportSetting = false;
      service.guaranteeSupport$.subscribe((val) => {
        guaranteeSupportSetting = val;
      });
      expect(guaranteeSupportSetting).toBeFalse();

      // Act
      service.toggleGuatenteeSupport();

      // Assert
      expect(guaranteeSupportSetting).toBeTrue();
    });

    it('should set guaranteeSupport value directly', () => {
      // Arrange
      let guaranteeSupportSetting = false;
      service.guaranteeSupport$.subscribe((val) => {
        guaranteeSupportSetting = val;
      });

      // Act
      service.setGuatenteeSupport(true);

      // Assert
      expect(guaranteeSupportSetting).toBeTrue();
    });
    // TODO if possible test results of a proper randomization
  });
});
