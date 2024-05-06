
export interface Booster {
  id: number;
  name: string;
  warbond: string;
  iconPath: string;
  description: string;
}

export const boosters: Booster[] = [
  {
    "id": 1,
    "name": "Localization Confusion",
    "warbond": "Cutting Edge",
    "iconPath": "./assets/Boosters/Cutting%20Edge/Localization%20Confusion.png",
    "description": "Increase the time between enemy encounters."
  },
  {
    "id": 2,
    "name": "Expert Extraction Pilot",
    "warbond": "Democratic Detonation",
    "iconPath": "./assets/Boosters/Democratic%20Detonation/Expert%20Extraction%20Pilot.png",
    "description": "Lowers the time it takes for the extraction shuttle to reach the extraction beacon."
  },
  {
    "id": 3,
    "name": "Hellpod Space Optimization",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Hellpod%20Space%20Optimization.png",
    "description": "Helldivers come out of the Hellpod fully stocked on Ammo, Grenades and Stims."
  },
  {
    "id": 4,
    "name": "Increased Reinforcement Budget",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Increased%20Reinforcement%20Budget.png",
    "description": "Increase the number of available reinforcements."
  },
  {
    "id": 5,
    "name": "Muscle Enhancement",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Muscle%20Enhancement.png",
    "description": "Allows Helldivers to traverse difficult terrain with ease."
  },
  {
    "id": 6,
    "name": "Stamina Enhancement",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Stamina%20Enhancement.png",
    "description": "Increases all Helldivers' stamina capacity and recovery."
  },
  {
    "id": 7,
    "name": "UAV Recon Booster",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/UAV%20Recon%20Booster.png",
    "description": "Increase all Helldivers' effective radar range."
  },
  {
    "id": 8,
    "name": "Vitality Enhancement",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Vitality%20Enhancement.png",
    "description": "Allows all Helldivers to resist limb injury."
  },
  {
    "id": 9,
    "name": "Flexible Reinforcement Budget",
    "warbond": "Steeled Veterans",
    "iconPath": "./assets/Boosters/Steeled%20Veterans/Flexible%20Reinforcement%20Budget.png",
    "description": "Reduces time until new reinforcements are granted once they've been depleted."
  }
];
