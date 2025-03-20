// This file provides a centralized access point for all application data
// It serves as a clean, optimized interface for using the new data format

import {
  Weapon,
  allWeapons,
  primaryWeapons,
  secondaryWeapons,
  throwableWeapons,
} from './new-weapons';
import { Stratagem, stratagems } from './new-stratagems';
import { Booster, boosters } from './new-boosters';
import { Warbond, warbonds, getWarbondById } from './new-warbonds';
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

  // Logic for selecting stratagems would go here, considering backpack and support requirements
  // This is a simplified version; actual implementation would be more complex
  const selectedStratagems: Stratagem[] = [];
  const maxStratagems = 4;

  // Simple random selection for now
  if (availableStratagems.length > 0) {
    const shuffled = [...availableStratagems].sort(() => 0.5 - Math.random());
    selectedStratagems.push(...shuffled.slice(0, maxStratagems));
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
