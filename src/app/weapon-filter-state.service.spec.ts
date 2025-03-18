import { TestBed } from '@angular/core/testing';
import { WeaponFilterStateService } from './weapon-filter-state.service';
import { categoryWeaponIds } from './weapons';

describe('WeaponFilterStateService', () => {
  let service: WeaponFilterStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponFilterStateService],
    });
    service = TestBed.inject(WeaponFilterStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('weapon ID management', () => {
    it('should disable a weapon', () => {
      // Arrange - Get initial state
      let currentIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        currentIds = ids;
      });
      expect(currentIds).toEqual([]);

      // Act - Disable weapon with ID 1
      service.disableWeapon(1);

      // Assert - Check if ID 1 is in the disabled list
      expect(currentIds).toEqual([1]);
    });

    it('should enable a disabled weapon', () => {
      // Arrange - Disable weapon first
      service.disableWeapon(1);
      service.disableWeapon(2);
      let currentIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        currentIds = ids;
      });
      expect(currentIds).toContain(1);
      expect(currentIds).toContain(2);

      // Act - Enable weapon with ID 1
      service.enableWeapon(1);

      // Assert - Check if ID 1 is removed from the disabled list
      expect(currentIds).not.toContain(1);
      expect(currentIds).toContain(2);
    });

    it('should toggle a weapon correctly', () => {
      // Arrange
      let currentIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        currentIds = ids;
      });

      // Act & Assert - Toggle a weapon (should disable it first)
      service.toggleWeapon(5);
      expect(currentIds).toContain(5);

      // Act & Assert - Toggle again (should enable it)
      service.toggleWeapon(5);
      expect(currentIds).not.toContain(5);
    });
  });

  describe('category management', () => {
    it('should disable a whole category', () => {
      // Arrange
      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });
      const testCategory = Object.keys(categoryWeaponIds)[0]; // Get the first category
      const categoryIds = categoryWeaponIds[testCategory];

      // Act
      service.disableCategory(testCategory);

      // Assert - All IDs in the category should be disabled
      categoryIds.forEach((id) => {
        expect(disabledIds).toContain(id);
      });
    });

    it('should enable a whole category', () => {
      // Arrange - Disable a category first
      const testCategory = Object.keys(categoryWeaponIds)[0]; // Get the first category
      const categoryIds = categoryWeaponIds[testCategory];

      // Disable the category and some additional IDs
      service.disableCategory(testCategory);
      service.disableWeapon(999); // An ID not in the category

      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });

      // Verify initial state
      categoryIds.forEach((id) => {
        expect(disabledIds).toContain(id);
      });
      expect(disabledIds).toContain(999);

      // Act
      service.enableCategory(testCategory);

      // Assert - All IDs in the category should be enabled, but the other ID should remain disabled
      categoryIds.forEach((id) => {
        expect(disabledIds).not.toContain(id);
      });
      expect(disabledIds).toContain(999);
    });

    it('should handle disabling a non-existent category', () => {
      // Arrange
      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });
      const initialCount = disabledIds.length;

      // Act
      service.disableCategory('NonExistentCategory');

      // Assert - Nothing should change
      expect(disabledIds.length).toBe(initialCount);
    });

    it('should handle enabling a non-existent category', () => {
      // Arrange - Disable an ID first
      service.disableWeapon(1);
      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });
      expect(disabledIds).toContain(1);

      // Act
      service.enableCategory('NonExistentCategory');

      // Assert - The initially disabled ID should remain
      expect(disabledIds).toContain(1);
    });

    it('should toggle a category from enabled to disabled', () => {
      // Arrange
      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });
      const testCategory = Object.keys(categoryWeaponIds)[0]; // Get the first category
      const categoryIds = categoryWeaponIds[testCategory];

      // Act - Toggle the category (all enabled initially)
      service.toggleCategory(testCategory);

      // Assert - All IDs in the category should now be disabled
      categoryIds.forEach((id) => {
        expect(disabledIds).toContain(id);
      });
    });

    it('should toggle a category from disabled to enabled', () => {
      // Arrange - Disable the category first
      const testCategory = Object.keys(categoryWeaponIds)[0]; // Get the first category
      const categoryIds = categoryWeaponIds[testCategory];
      service.disableCategory(testCategory);

      let disabledIds: number[] = [];
      service.disabledIds$.subscribe((ids) => {
        disabledIds = ids;
      });

      // Verify initial state
      categoryIds.forEach((id) => {
        expect(disabledIds).toContain(id);
      });

      // Act - Toggle the category (all disabled initially)
      service.toggleCategory(testCategory);

      // Assert - All IDs in the category should now be enabled
      categoryIds.forEach((id) => {
        expect(disabledIds).not.toContain(id);
      });
    });

    it('should toggle a partially disabled category to fully disabled', () => {
      // Arrange - Disable only some IDs in the category
      const testCategory = Object.keys(categoryWeaponIds)[0]; // Get the first category
      const categoryIds = categoryWeaponIds[testCategory];

      if (categoryIds.length > 1) {
        service.disableWeapon(categoryIds[0]); // Disable just the first ID

        let disabledIds: number[] = [];
        service.disabledIds$.subscribe((ids) => {
          disabledIds = ids;
        });

        // Verify initial state
        expect(disabledIds).toContain(categoryIds[0]);
        expect(disabledIds).not.toContain(categoryIds[1]); // Second ID should not be disabled

        // Act - Toggle the category (partially disabled initially)
        service.toggleCategory(testCategory);

        // Assert - All IDs in the category should now be disabled
        categoryIds.forEach((id) => {
          expect(disabledIds).toContain(id);
        });
      }
    });

    // TODO add test for disable and re-enabling partially disabled category, ensuring the state of individually toggled items is preserved
  });
});
