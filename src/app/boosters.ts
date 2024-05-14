
export interface Booster {
  id: number;
  name: string;
  warbond: string;
  iconPath: string;
}

export const boosters: Booster[] = [
  {
    "id": 1,
    "name": "Localization Confusion",
    "warbond": "Cutting Edge",
    "iconPath": "./assets/Boosters/Cutting%20Edge/Localization%20Confusion.png"
  },
  {
    "id": 2,
    "name": "Expert Extraction Pilot",
    "warbond": "Democratic Detonation",
    "iconPath": "./assets/Boosters/Democratic%20Detonation/Expert%20Extraction%20Pilot.png"
  },
  {
    "id": 3,
    "name": "Hellpod Space Optimization",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Hellpod%20Space%20Optimization.png"
  },
  {
    "id": 4,
    "name": "Increased Reinforcement Budget",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Increased%20Reinforcement%20Budget.png"
  },
  {
    "id": 5,
    "name": "Muscle Enhancement",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Muscle%20Enhancement.png"
  },
  {
    "id": 6,
    "name": "Stamina Enhancement",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Stamina%20Enhancement.png"
  },
  {
    "id": 7,
    "name": "UAV Recon Booster",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/UAV%20Recon%20Booster.png"
  },
  {
    "id": 8,
    "name": "Vitality Enhancement",
    "warbond": "Helldivers Mobilize",
    "iconPath": "./assets/Boosters/Helldivers%20Mobilize/Vitality%20Enhancement.png"
  },
  {
    "id": 9,
    "name": "Flexible Reinforcement Budget",
    "warbond": "Steeled Veterans",
    "iconPath": "./assets/Boosters/Steeled%20Veterans/Flexible%20Reinforcement%20Budget.png"
  }
];
export const maxBoosterId: number = 9;
