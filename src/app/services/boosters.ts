export interface Booster {
  id: string;
  name: string;
  description: string;
  warbond: string;
  iconPath: string;
}

export const boosters: Booster[] = [
  {
    id: 'Hellpod_Space_Optimization',
    name: 'Hellpod Space Optimization',
    description:
      'Helldivers come out of the Hellpod fully stocked on Ammo, Grenades and Stims.',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Boosters/Hellpod_Space_Optimization.svg',
  },
  {
    id: 'Vitality_Enhancement',
    name: 'Vitality Enhancement',
    description:
      'Provides minor damage reduction from all sources for all Helldivers',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Boosters/Vitality_Enhancement.svg',
  },
  {
    id: 'UAV_Recon_Booster',
    name: 'UAV Recon Booster',
    description: "Increases all Helldivers' effective radar range.",
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Boosters/UAV_Recon_Booster.svg',
  },
  {
    id: 'Stamina_Enhancement',
    name: 'Stamina Enhancement',
    description: "Increases all Helldivers' stamina capacity and recovery.",
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Boosters/Stamina_Enhancement.svg',
  },
  {
    id: 'Muscle_Enhancement',
    name: 'Muscle Enhancement',
    description: 'Allows Helldivers to traverse difficult terrain with ease.',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Boosters/Muscle_Enhancement.svg',
  },
  {
    id: 'Increased_Reinforcement_Budget',
    name: 'Increased Reinforcement Budget',
    description: 'Increases the number of available reinforcements.',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Boosters/Increased_Reinforcement_Budget.svg',
  },
  {
    id: 'Flexible_Reinforcement_Budget',
    name: 'Flexible Reinforcement Budget',
    description:
      "Reduces time until new reinforcements are granted once they've been depleted.",
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Boosters/Flexible_Reinforcement_Budget.svg',
  },
  {
    id: 'Localization_Confusion',
    name: 'Localization Confusion',
    description: 'Increases the time between enemy encounters.',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Boosters/Localization_Confusion.svg',
  },
  {
    id: 'Expert_Extraction_Pilot',
    name: 'Expert Extraction Pilot',
    description:
      'Lowers the time it takes for the extraction shuttle to reach the extraction beacon.',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Boosters/Expert_Extraction_Pilot.svg',
  },
  {
    id: 'Motivational_Shocks',
    name: 'Motivational Shocks',
    description:
      'Allows all Helldivers to recover faster after being slowed by an attack, such as acid. Does not mitigate “area effects,” such as EMS strikes.',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Boosters/Motivational_Shocks.svg',
  },
  {
    id: 'Experimental_Infusion',
    name: 'Experimental Infusion',
    description:
      'In addition to restoring health, Stims temporarily increase movement speed and damage reduction.',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Boosters/Experimental_Infusion.svg',
  },
  {
    id: 'Firebomb_Hellpods',
    name: 'Firebomb Hellpods',
    description:
      'Lines all Hellpods with volatile incendiaries that detonate upon impact, igniting any units in vicinity of the drop site.',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Boosters/Firebomb_Hellpods.svg',
  },
  {
    id: 'Dead_Sprint',
    name: 'Dead Sprint',
    description:
      'Allows Helldivers to keep sprinting even when they are out of stamina, draining their health instead.',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Boosters/Dead_Sprint.svg',
  },
  {
    id: 'Armed_Resupply_Pods',
    name: 'Armed Resupply Pods',
    description:
      'Mounts a modified AR-23 Liberator to all resupply pods, allowing them to double as automatic turrets.',
    warbond: 'Urban_Legends',
    iconPath: './assets/Boosters/Armed_Resupply_Pods.svg',
  },
  {
    id: 'Sample_Extricator',
    name: 'Sample Extricator',
    description:
      'Large enemies now have a chance of dropping Samples on death. Capped at 10 drops per mission.',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Boosters/Sample_Extricator.webp',
  },
];

// Lookup collections for filtering
export const boostersByWarbond: { [warbond: string]: Booster[] } = {
  Polar_Patriots: boosters.filter(
    (booster) => booster.warbond === 'Polar_Patriots'
  ),
  Truth_Enforcers: boosters.filter(
    (booster) => booster.warbond === 'Truth_Enforcers'
  ),
  Democratic_Detonation: boosters.filter(
    (booster) => booster.warbond === 'Democratic_Detonation'
  ),
  Steeled_Veterans: boosters.filter(
    (booster) => booster.warbond === 'Steeled_Veterans'
  ),
  Cutting_Edge: boosters.filter(
    (booster) => booster.warbond === 'Cutting_Edge'
  ),
  Urban_Legends: boosters.filter(
    (booster) => booster.warbond === 'Urban_Legends'
  ),
  Viper_Commandos: boosters.filter(
    (booster) => booster.warbond === 'Viper_Commandos'
  ),
  Borderline_Justice: boosters.filter(
    (booster) => booster.warbond === 'Borderline_Justice'
  ),
  Helldivers_Mobilize: boosters.filter(
    (booster) => booster.warbond === 'Helldivers_Mobilize'
  ),
  Freedoms_Flame: boosters.filter(
    (booster) => booster.warbond === 'Freedoms_Flame'
  ),
};

// Helper function to get a booster by ID
export function getBoosterById(id: string): Booster | undefined {
  return boosters.find((b) => b.id === id);
}
