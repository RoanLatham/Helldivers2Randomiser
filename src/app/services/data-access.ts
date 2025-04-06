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

/**
 * Get random weapons suitable for a loadout
 */
export function getRandomWeapons(
  options: {
    includedWarbondIds?: string[];
    excludedWeaponIds?: string[];
  } = {}
): {
  primary: Weapon | null;
  secondary: Weapon | null;
  throwable: Weapon | null;
} {
  // Filter available weapons based on options
  let availableWeapons = [...allWeapons];

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
  }

  // Filter out excluded weapons
  if (options.excludedWeaponIds) {
    const excludedIds = new Set(options.excludedWeaponIds);
    availableWeapons = availableWeapons.filter((w) => !excludedIds.has(w.id));
  }

  // Randomly select weapons
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

  return {
    primary,
    secondary,
    throwable,
  };
}

/**
 * Get random stratagems suitable for a loadout
 */
export function getRandomStratagems(
  options: {
    includedWarbondIds?: string[];
    excludedStratagemIds?: string[];
    requireOneBackpack?: boolean;
    requireOneSupport?: boolean;
    guaranteeBackpack?: boolean;
    guaranteeSupport?: boolean;
  } = {}
): Stratagem[] {
  // Filter available stratagems based on options
  let availableStratagems = [...stratagems];

  // Filter by warbonds if specified
  if (options.includedWarbondIds && options.includedWarbondIds.length > 0) {
    const items = getItemsFromWarbonds(options.includedWarbondIds);
    const stratagemIds = new Set(items.stratagems);
    availableStratagems = stratagems.filter((s) => stratagemIds.has(s.id));
  }

  // Filter out excluded stratagems
  if (options.excludedStratagemIds) {
    const excludedIds = new Set(options.excludedStratagemIds);
    availableStratagems = availableStratagems.filter(
      (s) => !excludedIds.has(s.id)
    );
  }

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

    // Track whether we need to find specific types of stratagems
    const needBackpack = options.requireOneBackpack || false;
    const needSupport = options.requireOneSupport || false;
    const guaranteeBackpack = options.guaranteeBackpack || false;
    const guaranteeSupport = options.guaranteeSupport || false;

    // Track whether we've found specific types of stratagems
    let foundBackpack = false;
    let foundSupport = false;
    let dualPurposeStratagem: Stratagem | null = null;

    // Initialize our working set of stratagems
    let remainingStratagems = [...shuffled];
    let specialStratagems: Stratagem[] = [];

    // First pass: Find backpack if needed
    if (needBackpack) {
      // Try to find a backpack
      const backpackIndex = remainingStratagems.findIndex((s) => s.isBackpack);

      if (backpackIndex >= 0) {
        const backpack = remainingStratagems[backpackIndex];
        foundBackpack = true;

        // Check if this is a dual-purpose stratagem
        if (backpack.isSupportWeapon) {
          foundSupport = true;
          dualPurposeStratagem = backpack;
        }

        // If we need to guarantee a backpack, add it to special stratagems
        if (guaranteeBackpack) {
          specialStratagems.push(backpack);
        }

        // Remove all backpacks from consideration
        remainingStratagems = remainingStratagems.filter((s) => !s.isBackpack);

        // If we found a dual-purpose stratagem, and we need one support weapon,
        // remove all other support weapons too (since our backpack already fulfills this role)
        if (foundSupport && needSupport) {
          remainingStratagems = remainingStratagems.filter(
            (s) => !s.isSupportWeapon
          );
        } else if (!guaranteeBackpack) {
          // If we don't need to guarantee position, add the backpack back to the remaining stratagems
          // at its original position to preserve randomness
          remainingStratagems.splice(backpackIndex, 0, backpack);
        }
      }
    }

    // Second pass: Find support weapon if needed and not already found
    if (needSupport && !foundSupport) {
      // Try to find a support weapon
      const supportIndex = remainingStratagems.findIndex(
        (s) => s.isSupportWeapon
      );

      if (supportIndex >= 0) {
        const support = remainingStratagems[supportIndex];
        foundSupport = true;

        // Check if this is a dual-purpose stratagem
        if (support.isBackpack) {
          foundBackpack = true;
          dualPurposeStratagem = support;
        }

        // If we need to guarantee a support weapon, add it to special stratagems
        if (guaranteeSupport) {
          specialStratagems.push(support);
        }

        // Remove all support weapons from consideration
        remainingStratagems = remainingStratagems.filter(
          (s) => !s.isSupportWeapon
        );

        // If we found a dual-purpose stratagem, and we need one backpack,
        // remove all other backpacks too (since our support already fulfills this role)
        if (foundBackpack && needBackpack) {
          remainingStratagems = remainingStratagems.filter(
            (s) => !s.isBackpack
          );
        } else if (!guaranteeSupport) {
          // If we don't need to guarantee position, add the support weapon back to the remaining stratagems
          // at its original position to preserve randomness
          remainingStratagems.splice(supportIndex, 0, support);
        }
      }
    }

    // Special case: Both guarantees enabled but a dual-purpose stratagem fulfills both roles
    if (guaranteeBackpack && guaranteeSupport && dualPurposeStratagem) {
      // Remove duplicate entries of the dual-purpose stratagem
      specialStratagems = specialStratagems.filter((s, index) =>
        s === dualPurposeStratagem
          ? specialStratagems.indexOf(dualPurposeStratagem) === index
          : true
      );
    }

    // Get regular stratagems (non-special ones)
    const regularStratagems = remainingStratagems.filter(
      (s) => !specialStratagems.includes(s)
    );

    // Calculate how many regular stratagems we need
    const slotsForRegular = maxStratagems - specialStratagems.length;

    // Combine special and regular stratagems
    selectedStratagems = [
      ...specialStratagems,
      ...regularStratagems.slice(0, slotsForRegular),
    ];

    // If we have guaranteed stratagems, randomize all positions with a shuffle
    if (specialStratagems.length > 0) {
      // Shuffle the entire array to randomize positions including guarantees
      selectedStratagems = selectedStratagems.sort(() => 0.5 - Math.random());
    }

    // Ensure we have exactly maxStratagems stratagems
    selectedStratagems = selectedStratagems.slice(0, maxStratagems);

    // If we don't have enough stratagems, fill with duplicates of the first one
    if (
      selectedStratagems.length < maxStratagems &&
      selectedStratagems.length > 0
    ) {
      const firstStratagem = selectedStratagems[0];
      while (selectedStratagems.length < maxStratagems) {
        selectedStratagems.push(firstStratagem);
      }
    }
  }

  return selectedStratagems;
}

/**
 * Get a random booster suitable for a loadout
 */
export function getRandomBooster(
  options: {
    includedWarbondIds?: string[];
    excludedBoosterIds?: string[];
  } = {}
): Booster | null {
  // Filter available boosters based on options
  let availableBoosters = [...boosters];

  // Filter by warbonds if specified
  if (options.includedWarbondIds && options.includedWarbondIds.length > 0) {
    const items = getItemsFromWarbonds(options.includedWarbondIds);
    const boosterIds = new Set(items.boosters);
    availableBoosters = boosters.filter((b) => boosterIds.has(b.id));
  }

  // Filter out excluded boosters
  if (options.excludedBoosterIds) {
    const excludedIds = new Set(options.excludedBoosterIds);
    availableBoosters = availableBoosters.filter((b) => !excludedIds.has(b.id));
  }

  // Randomly select a booster
  return availableBoosters.length > 0
    ? availableBoosters[Math.floor(Math.random() * availableBoosters.length)]
    : null;
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
  // Get weapons using the specialized function
  const weapons = getRandomWeapons({
    includedWarbondIds: options.includedWarbondIds,
    excludedWeaponIds: options.excludedWeaponIds,
  });

  // Get stratagems using the specialized function
  const stratagemsArray = getRandomStratagems({
    includedWarbondIds: options.includedWarbondIds,
    excludedStratagemIds: options.excludedStratagemIds,
    requireOneBackpack: options.requireOneBackpack,
    requireOneSupport: options.requireOneSupport,
    guaranteeBackpack: options.guaranteeBackpack,
    guaranteeSupport: options.guaranteeSupport,
  });

  // Get booster using the specialized function
  const booster = getRandomBooster({
    includedWarbondIds: options.includedWarbondIds,
    excludedBoosterIds: options.excludedBoosterIds,
  });

  // Return the combined loadout
  return {
    primary: weapons.primary,
    secondary: weapons.secondary,
    throwable: weapons.throwable,
    stratagems: stratagemsArray,
    booster: booster,
  };
}
