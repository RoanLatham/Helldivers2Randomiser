// This file centralizes all data relationships between entities
// It pre-computes relationships at build time to optimize runtime performance

import { Weapon, allWeapons } from './weapons';
import { Stratagem, stratagems } from './stratagems';
import { Booster, boosters } from './boosters';
import { Warbond, warbonds } from './new-warbonds';

/**
 * WarbondContent represents all items belonging to a specific warbond
 */
export interface WarbondContent {
  warbondId: string;
  primaryWeapons: string[];
  secondaryWeapons: string[];
  throwableWeapons: string[];
  stratagems: string[];
  boosters: string[];
}

/**
 * Pre-computed lookup map of warbond contents
 * Maps warbond ID to all its associated items
 * This allows O(1) lookup of all items in a warbond
 */
export const warbondContents: Record<string, WarbondContent> = {};

// Initialize the warbond contents map
warbonds.forEach((warbond: Warbond) => {
  warbondContents[warbond.id] = {
    warbondId: warbond.id,
    primaryWeapons: [],
    secondaryWeapons: [],
    throwableWeapons: [],
    stratagems: [],
    boosters: [],
  };
});

// Populate warbond contents with all weapons
allWeapons.forEach((weapon: Weapon) => {
  if (weapon.warbond) {
    // The warbond field is already in ID format
    const warbondId = weapon.warbond;

    // Only add to warbond contents if the warbond exists
    if (warbondContents[warbondId]) {
      switch (weapon.type) {
        case 'Primary':
          warbondContents[warbondId].primaryWeapons.push(weapon.id);
          break;
        case 'Secondary':
          warbondContents[warbondId].secondaryWeapons.push(weapon.id);
          break;
        case 'Throwable':
          warbondContents[warbondId].throwableWeapons.push(weapon.id);
          break;
      }
    }
  }
});

// Populate warbond contents with all stratagems
stratagems.forEach((stratagem: Stratagem) => {
  if (stratagem.warbond) {
    // The warbond field is already in ID format
    const warbondId = stratagem.warbond;

    // Only add to warbond contents if the warbond exists
    if (warbondContents[warbondId]) {
      warbondContents[warbondId].stratagems.push(stratagem.id);
    }
  }
});

// Populate warbond contents with all boosters
boosters.forEach((booster: Booster) => {
  if (booster.warbond) {
    // The warbond field is already in ID format
    const warbondId = booster.warbond;

    // Only add to warbond contents if the warbond exists
    if (warbondContents[warbondId]) {
      warbondContents[warbondId].boosters.push(booster.id);
    }
  }
});

/**
 * Helper function to get all contents of a warbond with full objects
 * Returns references to actual objects, not just IDs
 */
export function getWarbondContent(warbondId: string): {
  warbond: Warbond | undefined;
  primaryWeapons: Weapon[];
  secondaryWeapons: Weapon[];
  throwableWeapons: Weapon[];
  stratagems: Stratagem[];
  boosters: Booster[];
} | null {
  const content = warbondContents[warbondId];
  if (!content) return null;

  return {
    warbond: warbonds.find((w: Warbond) => w.id === warbondId),
    primaryWeapons: allWeapons.filter((w: Weapon) =>
      content.primaryWeapons.includes(w.id)
    ),
    secondaryWeapons: allWeapons.filter((w: Weapon) =>
      content.secondaryWeapons.includes(w.id)
    ),
    throwableWeapons: allWeapons.filter((w: Weapon) =>
      content.throwableWeapons.includes(w.id)
    ),
    stratagems: stratagems.filter((s: Stratagem) =>
      content.stratagems.includes(s.id)
    ),
    boosters: boosters.filter((b: Booster) => content.boosters.includes(b.id)),
  };
}

/**
 * Maps to efficiently retrieve all warbonds containing a specific item
 * These are computed at build time to avoid runtime filtering
 */
export const weaponToWarbonds: Record<string, string[]> = {};
export const stratagemToWarbonds: Record<string, string[]> = {};
export const boosterToWarbonds: Record<string, string[]> = {};

// Build reverse lookup for weapons
allWeapons.forEach((weapon: Weapon) => {
  weaponToWarbonds[weapon.id] = [];
  if (weapon.warbond) {
    // The warbond field is already in ID format
    const warbondId = weapon.warbond;
    if (warbondContents[warbondId]) {
      weaponToWarbonds[weapon.id].push(warbondId);
    }
  }
});

// Build reverse lookup for stratagems
stratagems.forEach((stratagem: Stratagem) => {
  stratagemToWarbonds[stratagem.id] = [];
  if (stratagem.warbond) {
    // The warbond field is already in ID format
    const warbondId = stratagem.warbond;
    if (warbondContents[warbondId]) {
      stratagemToWarbonds[stratagem.id].push(warbondId);
    }
  }
});

// Build reverse lookup for boosters
boosters.forEach((booster: Booster) => {
  boosterToWarbonds[booster.id] = [];
  if (booster.warbond) {
    // The warbond field is already in ID format
    const warbondId = booster.warbond;
    if (warbondContents[warbondId]) {
      boosterToWarbonds[booster.id].push(warbondId);
    }
  }
});

/**
 * Get all items from a specific set of warbonds
 * Useful for filtering based on selected warbonds
 */
export function getItemsFromWarbonds(warbondIds: string[]) {
  const result = {
    primaryWeapons: new Set<string>(),
    secondaryWeapons: new Set<string>(),
    throwableWeapons: new Set<string>(),
    stratagems: new Set<string>(),
    boosters: new Set<string>(),
  };

  warbondIds.forEach((warbondId) => {
    const content = warbondContents[warbondId];
    if (content) {
      content.primaryWeapons.forEach((id) => result.primaryWeapons.add(id));
      content.secondaryWeapons.forEach((id) => result.secondaryWeapons.add(id));
      content.throwableWeapons.forEach((id) => result.throwableWeapons.add(id));
      content.stratagems.forEach((id) => result.stratagems.add(id));
      content.boosters.forEach((id) => result.boosters.add(id));
    }
  });

  return {
    primaryWeapons: Array.from(result.primaryWeapons),
    secondaryWeapons: Array.from(result.secondaryWeapons),
    throwableWeapons: Array.from(result.throwableWeapons),
    stratagems: Array.from(result.stratagems),
    boosters: Array.from(result.boosters),
  };
}
