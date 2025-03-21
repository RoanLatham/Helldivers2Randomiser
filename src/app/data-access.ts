// This file provides a centralized access point for all application data
// It serves as a clean, optimized interface for using the new data format

import {
  Weapon,
  allWeapons,
  primaryWeapons,
  secondaryWeapons,
  throwableWeapons,
} from './weapons';
import { Stratagem, stratagems, shipModules } from './stratagems';
import { Booster, boosters } from './boosters';
import { Warbond, warbonds, getWarbondById } from './warbonds';
import {
  warbondContents,
  getWarbondContent,
  getItemsFromWarbonds,
  weaponToWarbonds,
  stratagemToWarbonds,
  boosterToWarbonds,
} from './data-relationships';

/**
 * Data Access Methods - Weapons
 */

// Get a weapon by its ID
export function getWeapon(id: string): Weapon | undefined {
  return allWeapons.find((w) => w.id === id);
}

// Get all weapons of a specific type
export function getWeaponsByType(
  type: 'Primary' | 'Secondary' | 'Throwable'
): Weapon[] {
  switch (type) {
    case 'Primary':
      return primaryWeapons;
    case 'Secondary':
      return secondaryWeapons;
    case 'Throwable':
      return throwableWeapons;
    default:
      return [];
  }
}

// Get all weapons in a specific category
export function getWeaponsByCategory(category: string): Weapon[] {
  return allWeapons.filter((w) => w.category === category);
}

// Get all weapons from a specific warbond
export function getWeaponsByWarbond(warbondId: string): Weapon[] {
  const content = getWarbondContent(warbondId);
  if (!content) return [];

  // Combine all weapon arrays
  return [
    ...content.primaryWeapons,
    ...content.secondaryWeapons,
    ...content.throwableWeapons,
  ];
}

/**
 * Data Access Methods - Stratagems
 */

// Get a stratagem by its ID
export function getStratagem(id: string): Stratagem | undefined {
  return stratagems.find((s) => s.id === id);
}

// Get stratagems by ship module
export function getStratagemsByShipModule(shipModule: string): Stratagem[] {
  return stratagems.filter((s) => s.shipModule === shipModule);
}

// Get all available ship modules
export function getAllShipModules(): string[] {
  return shipModules;
}

// Get stratagems from a specific warbond
export function getStratagemsByWarbond(warbondId: string): Stratagem[] {
  const content = getWarbondContent(warbondId);
  if (!content) return [];

  // Return the stratagems directly from content
  return content.stratagems;
}

/**
 * Data Access Methods - Boosters
 */

// Get a booster by its ID
export function getBooster(id: string): Booster | undefined {
  return boosters.find((b) => b.id === id);
}

// Get boosters from a specific warbond
export function getBoostersByWarbond(warbondId: string): Booster[] {
  const content = getWarbondContent(warbondId);
  if (!content) return [];

  // Return the boosters directly from content
  return content.boosters;
}

/**
 * Data Access Methods - Warbonds
 */

// Re-export getWarbondById for consistency
export { getWarbondById };

// Get all content for a warbond as full objects
export function getWarbondItems(warbondId: string): {
  warbond: Warbond | undefined;
  primaryWeapons: Weapon[];
  secondaryWeapons: Weapon[];
  throwableWeapons: Weapon[];
  stratagems: Stratagem[];
  boosters: Booster[];
} {
  const content = getWarbondContent(warbondId);
  if (!content) {
    return {
      warbond: undefined,
      primaryWeapons: [],
      secondaryWeapons: [],
      throwableWeapons: [],
      stratagems: [],
      boosters: [],
    };
  }
  return content;
}

/**
 * Utility Methods
 */

// Get all unique warbonds that an item belongs to
export function getWarbondsForItem(
  itemType: 'weapon' | 'stratagem' | 'booster',
  id: string
): Warbond[] {
  let warbondIds: string[] = [];

  switch (itemType) {
    case 'weapon':
      warbondIds = weaponToWarbonds[id] || [];
      break;
    case 'stratagem':
      warbondIds = stratagemToWarbonds[id] || [];
      break;
    case 'booster':
      warbondIds = boosterToWarbonds[id] || [];
      break;
  }

  return warbondIds
    .map(getWarbondById)
    .filter((w): w is Warbond => w !== undefined);
}

// Get all items from multiple warbonds
export function getItemsFromMultipleWarbonds(warbondIds: string[]): {
  primaryWeapons: string[];
  secondaryWeapons: string[];
  throwableWeapons: string[];
  stratagems: string[];
  boosters: string[];
} {
  return getItemsFromWarbonds(warbondIds);
}

// Get random items suitable for a loadout
export function getRandomLoadout(
  options: {
    includedWarbondIds?: string[];
    excludedWeaponIds?: string[];
    excludedStratagemIds?: string[];
    excludedBoosterIds?: string[];
    requireOneBackpack?: boolean;
    requireOneSupport?: boolean;
    guaranteeBackpack?: boolean;
    guaranteeSupport?: boolean;
  } = {}
): {
  primary: Weapon | null;
  secondary: Weapon | null;
  throwable: Weapon | null;
  stratagems: Stratagem[];
  booster: Booster | null;
} {
  // Filter available items based on included warbonds if specified
  let availableWeapons = [...allWeapons];
  let availableStratagems = [...stratagems];
  let availableBoosters = [...boosters];

  // Filter by warbonds if specified
  if (options.includedWarbondIds && options.includedWarbondIds.length > 0) {
    const items = getItemsFromWarbonds(options.includedWarbondIds);

    // Create sets of valid IDs
    const primaryIds = new Set(items.primaryWeapons);
    const secondaryIds = new Set(items.secondaryWeapons);
    const throwableIds = new Set(items.throwableWeapons);

    // Filter to only include weapons with IDs in the sets
    availableWeapons = allWeapons.filter(
      (w) =>
        (w.type === 'Primary' && primaryIds.has(w.id)) ||
        (w.type === 'Secondary' && secondaryIds.has(w.id)) ||
        (w.type === 'Throwable' && throwableIds.has(w.id))
    );

    const stratagemIds = new Set(items.stratagems);
    availableStratagems = stratagems.filter((s) => stratagemIds.has(s.id));

    const boosterIds = new Set(items.boosters);
    availableBoosters = boosters.filter((b) => boosterIds.has(b.id));
  }

  // Filter out excluded items
  if (options.excludedWeaponIds) {
    const excludedIds = new Set(options.excludedWeaponIds);
    availableWeapons = availableWeapons.filter((w) => !excludedIds.has(w.id));
  }

  if (options.excludedStratagemIds) {
    const excludedIds = new Set(options.excludedStratagemIds);
    availableStratagems = availableStratagems.filter(
      (s) => !excludedIds.has(s.id)
    );
  }

  if (options.excludedBoosterIds) {
    const excludedIds = new Set(options.excludedBoosterIds);
    availableBoosters = availableBoosters.filter((b) => !excludedIds.has(b.id));
  }

  // Randomly select items
  const primaryWeapons = availableWeapons.filter((w) => w.type === 'Primary');
  const primary =
    primaryWeapons.length > 0
      ? primaryWeapons[Math.floor(Math.random() * primaryWeapons.length)]
      : null;

  const secondaryWeapons = availableWeapons.filter(
    (w) => w.type === 'Secondary'
  );
  const secondary =
    secondaryWeapons.length > 0
      ? secondaryWeapons[Math.floor(Math.random() * secondaryWeapons.length)]
      : null;

  const throwableWeapons = availableWeapons.filter(
    (w) => w.type === 'Throwable'
  );
  const throwable =
    throwableWeapons.length > 0
      ? throwableWeapons[Math.floor(Math.random() * throwableWeapons.length)]
      : null;

  // Select stratagems, handling backpack and support weapon requirements
  let selectedStratagems: Stratagem[] = [];
  const maxStratagems = 4;

  if (availableStratagems.length > 0) {
    // Create a shuffled copy of the available stratagems
    const shuffled = [...availableStratagems].sort(() => 0.5 - Math.random());

    // When guarantee options are enabled, also enable their corresponding "only one" options
    if (options.guaranteeBackpack) {
      options.requireOneBackpack = true;
    }
    if (options.guaranteeSupport) {
      options.requireOneSupport = true;
    }

    // Filter stratagems by type
    const backpacks = shuffled.filter((s) => s.isBackpack);
    const supportWeapons = shuffled.filter((s) => s.isSupportWeapon);
    const regularStratagems = shuffled.filter(
      (s) => !s.isBackpack && !s.isSupportWeapon
    );

    // Start with a clean slate
    selectedStratagems = [];
    let remainingSlots = maxStratagems;

    // First handle guaranteed items to ensure they're included
    let guaranteedBackpackAdded = false;
    let guaranteedSupportAdded = false;
    let backpackPosition = -1;
    let supportPosition = -1;

    // If we need to guarantee both, we need to pick positions carefully
    if (options.guaranteeBackpack && options.guaranteeSupport) {
      if (backpacks.length > 0 && supportWeapons.length > 0) {
        // Pick random positions for backpack and support
        backpackPosition = Math.floor(Math.random() * maxStratagems);

        // Ensure support position is different from backpack position
        do {
          supportPosition = Math.floor(Math.random() * maxStratagems);
        } while (supportPosition === backpackPosition);
      }
    } else {
      // Only one type is guaranteed, pick a random position
      if (options.guaranteeBackpack && backpacks.length > 0) {
        backpackPosition = Math.floor(Math.random() * maxStratagems);
      }

      if (options.guaranteeSupport && supportWeapons.length > 0) {
        supportPosition = Math.floor(Math.random() * maxStratagems);
      }
    }

    // Create a full array with placeholders for guaranteed positions
    for (let i = 0; i < maxStratagems; i++) {
      if (i === backpackPosition && backpacks.length > 0) {
        // Add a random backpack at this position
        const randomBackpack =
          backpacks[Math.floor(Math.random() * backpacks.length)];
        selectedStratagems.push(randomBackpack);
        guaranteedBackpackAdded = true;
      } else if (i === supportPosition && supportWeapons.length > 0) {
        // Add a random support weapon at this position
        const randomSupport =
          supportWeapons[Math.floor(Math.random() * supportWeapons.length)];
        selectedStratagems.push(randomSupport);
        guaranteedSupportAdded = true;
      } else {
        // Placeholder for now, will fill with remaining stratagems later
        selectedStratagems.push(null as any);
      }
    }

    // Create a pool of remaining stratagems to randomly select from
    let remainingPool = [...shuffled];

    // If only one backpack is required, remove all but possibly one backpack
    if (options.requireOneBackpack) {
      // If a backpack is already guaranteed, remove all backpacks
      if (guaranteedBackpackAdded) {
        remainingPool = remainingPool.filter((s) => !s.isBackpack);
      } else {
        // Keep only one random backpack in the pool if any exist
        const backpacksInPool = remainingPool.filter((s) => s.isBackpack);
        if (backpacksInPool.length > 0) {
          // Remove all backpacks
          remainingPool = remainingPool.filter((s) => !s.isBackpack);
          // Maybe add one backpack back (not guaranteed, just possible)
          if (Math.random() < 0.5 && backpacksInPool.length > 0) {
            const randomBackpack =
              backpacksInPool[
                Math.floor(Math.random() * backpacksInPool.length)
              ];
            remainingPool.push(randomBackpack);
          }
        }
      }
    }

    // If only one support weapon is required, remove all but possibly one
    if (options.requireOneSupport) {
      // If a support weapon is already guaranteed, remove all support weapons
      if (guaranteedSupportAdded) {
        remainingPool = remainingPool.filter((s) => !s.isSupportWeapon);
      } else {
        // Keep only one random support weapon in the pool if any exist
        const supportsInPool = remainingPool.filter((s) => s.isSupportWeapon);
        if (supportsInPool.length > 0) {
          // Remove all support weapons
          remainingPool = remainingPool.filter((s) => !s.isSupportWeapon);
          // Maybe add one support weapon back (not guaranteed, just possible)
          if (Math.random() < 0.5 && supportsInPool.length > 0) {
            const randomSupport =
              supportsInPool[Math.floor(Math.random() * supportsInPool.length)];
            remainingPool.push(randomSupport);
          }
        }
      }
    }

    // Shuffle the remaining pool
    remainingPool.sort(() => 0.5 - Math.random());

    // Fill in the remaining slots with random stratagems
    let remainingPoolIndex = 0;
    for (let i = 0; i < maxStratagems; i++) {
      // Skip positions that already have guaranteed items
      if (
        (i === backpackPosition && guaranteedBackpackAdded) ||
        (i === supportPosition && guaranteedSupportAdded)
      ) {
        continue;
      }

      // If we still have stratagems in the pool, use them
      if (remainingPoolIndex < remainingPool.length) {
        selectedStratagems[i] = remainingPool[remainingPoolIndex];
        remainingPoolIndex++;
      } else {
        // If we run out of stratagems, duplicate the first one
        if (selectedStratagems.some((s) => s !== null)) {
          const firstNonNull = selectedStratagems.find(
            (s) => s !== null
          ) as Stratagem;
          selectedStratagems[i] = firstNonNull;
        } else if (availableStratagems.length > 0) {
          // Fallback if everything else fails
          selectedStratagems[i] = availableStratagems[0];
        }
      }
    }

    // Filter out any remaining null values (should not happen)
    selectedStratagems = selectedStratagems.filter((s) => s !== null);
  }

  // Ensure we have exactly maxStratagems items
  while (selectedStratagems.length > maxStratagems) {
    selectedStratagems.pop();
  }

  // In case we couldn't fill all slots, add duplicates to reach maxStratagems
  if (
    selectedStratagems.length > 0 &&
    selectedStratagems.length < maxStratagems
  ) {
    while (selectedStratagems.length < maxStratagems) {
      selectedStratagems.push(selectedStratagems[0]);
    }
  }

  const booster =
    availableBoosters.length > 0
      ? availableBoosters[Math.floor(Math.random() * availableBoosters.length)]
      : null;

  return {
    primary,
    secondary,
    throwable,
    stratagems: selectedStratagems,
    booster,
  };
}
