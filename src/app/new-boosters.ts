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
    warbond: 'Helldivers Mobilize',
    iconPath: './assets/NewBoosters/Hellpod_Space_Optimization.svg',
  },
  {
    id: 'Vitality_Enhancement',
    name: 'Vitality Enhancement',
    description: 'Allows all Helldivers to resist injury.',
    warbond: 'Helldivers Mobilize',
    iconPath: './assets/NewBoosters/Vitality_Enhancement.svg',
  },
  {
    id: 'UAV_Recon_Booster',
    name: 'UAV Recon Booster',
    description: "Increases all Helldivers' effective radar range.",
    warbond: 'Helldivers Mobilize',
    iconPath: './assets/NewBoosters/UAV_Recon_Booster.svg',
  },
  {
    id: 'Stamina_Enhancement',
    name: 'Stamina Enhancement',
    description: "Increases all Helldivers' stamina capacity and recovery.",
    warbond: 'Helldivers Mobilize',
    iconPath: './assets/NewBoosters/Stamina_Enhancement.svg',
  },
  {
    id: 'Muscle_Enhancement',
    name: 'Muscle Enhancement',
    description: 'Allows Helldivers to traverse difficult terrain with ease.',
    warbond: 'Helldivers Mobilize',
    iconPath: './assets/NewBoosters/Muscle_Enhancement.svg',
  },
  {
    id: 'Increased_Reinforcement_Budget',
    name: 'Increased Reinforcement Budget',
    description: 'Increases the number of available reinforcements.',
    warbond: 'Helldivers Mobilize',
    iconPath: './assets/NewBoosters/Increased_Reinforcement_Budget.svg',
  },
  {
    id: 'Flexible_Reinforcement_Budget',
    name: 'Flexible Reinforcement Budget',
    description:
      "Reduces time until new reinforcements are granted once they've been depleted.",
    warbond: 'Steeled Veterans',
    iconPath: './assets/NewBoosters/Flexible_Reinforcement_Budget.svg',
  },
  {
    id: 'Localization_Confusion',
    name: 'Localization Confusion',
    description: 'Increases the time between enemy encounters.',
    warbond: 'Cutting Edge',
    iconPath: './assets/NewBoosters/Localization_Confusion.svg',
  },
  {
    id: 'Expert_Extraction_Pilot',
    name: 'Expert Extraction Pilot',
    description:
      'Lowers the time it takes for the extraction shuttle to reach the extraction beacon.',
    warbond: 'Democratic Detonation',
    iconPath: './assets/NewBoosters/Expert_Extraction_Pilot.svg',
  },
  {
    id: 'Motivational_Shocks',
    name: 'Motivational Shocks',
    description:
      'Allows all Helldivers to recover faster after being slowed by an attack, such as acid. Does not mitigate “area effects,” such as EMS strikes.',
    warbond: 'Polar Patriots',
    iconPath: './assets/NewBoosters/Motivational_Shocks.svg',
  },
  {
    id: 'Experimental_Infusion',
    name: 'Experimental Infusion',
    description:
      'In addition to restoring health, Stims temporarily increase movement speed and damage reduction.',
    warbond: 'Viper Commandos',
    iconPath: './assets/NewBoosters/Experimental_Infusion.svg',
  },
  {
    id: 'Firebomb_Hellpods',
    name: 'Firebomb Hellpods',
    description:
      'Lines all Hellpods with volatile incendiaries that detonate upon impact, igniting any units in vicinity of the drop site.',
    warbond: "Freedom's Flame",
    iconPath: './assets/NewBoosters/Firebomb_Hellpods.svg',
  },
  {
    id: 'Dead_Sprint',
    name: 'Dead Sprint',
    description:
      'Allows Helldivers to keep sprinting even when they are out of stamina, draining their health instead.',
    warbond: 'Truth Enforcers',
    iconPath: './assets/NewBoosters/Dead_Sprint.svg',
  },
  {
    id: 'Armed_Resupply_Pods',
    name: 'Armed Resupply Pods',
    description:
      'Mounts a modified AR-23 Liberator to all resupply pods, allowing them to double as automatic turrets.',
    warbond: 'Urban Legends',
    iconPath: './assets/NewBoosters/Armed_Resupply_Pods.svg',
  },
];

// Lookup collections for filtering
export const boostersByWarbond: { [warbond: string]: Booster[] } = {
  'Cutting Edge': boosters.filter(
    (booster) => booster.warbond === 'Cutting Edge'
  ),
  'Polar Patriots': boosters.filter(
    (booster) => booster.warbond === 'Polar Patriots'
  ),
  'Steeled Veterans': boosters.filter(
    (booster) => booster.warbond === 'Steeled Veterans'
  ),
  'Viper Commandos': boosters.filter(
    (booster) => booster.warbond === 'Viper Commandos'
  ),
  'Democratic Detonation': boosters.filter(
    (booster) => booster.warbond === 'Democratic Detonation'
  ),
  'Helldivers Mobilize': boosters.filter(
    (booster) => booster.warbond === 'Helldivers Mobilize'
  ),
  'Urban Legends': boosters.filter(
    (booster) => booster.warbond === 'Urban Legends'
  ),
  'Truth Enforcers': boosters.filter(
    (booster) => booster.warbond === 'Truth Enforcers'
  ),
  "Freedom's Flame": boosters.filter(
    (booster) => booster.warbond === "Freedom's Flame"
  ),
};

// Helper function to get a booster by ID
export function getBoosterById(id: string): Booster | undefined {
  return boosters.find((b) => b.id === id);
}
