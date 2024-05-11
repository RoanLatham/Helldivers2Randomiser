
export interface Warbond {
  id: number;
  name: string;
  tier: string;
  iconPath: string;
  WeaponIds: number[];
  BoosterIds: number[];
}

export const warbonds: Warbond[] = [
  {
    "id": 1,
    "name": "Cutting Edge",
    "tier": "Premium",
    "iconPath": "./assets/Warbonds/Premium/Cutting%20Edge.png",
    "WeaponIds": [
      5,
      6,
      7
    ],
    "BoosterIds": [
      1
    ]
  },
  {
    "id": 2,
    "name": "Democratic Detonation",
    "tier": "Premium",
    "iconPath": "./assets/Warbonds/Premium/Democratic%20Detonation.png",
    "WeaponIds": [
      1,
      10,
      11
    ],
    "BoosterIds": [
      2
    ]
  },
  {
    "id": 3,
    "name": "Steeled Veterans",
    "tier": "Premium",
    "iconPath": "./assets/Warbonds/Premium/Steeled%20Veterans.png",
    "WeaponIds": [
      4,
      12,
      19
    ],
    "BoosterIds": [
      9
    ]
  },
  {
    "id": 4,
    "name": "Standard Issue",
    "tier": "Special",
    "iconPath": "./assets/Warbonds/Special/Standard%20Issue.png",
    "WeaponIds": [
      3
    ],
    "BoosterIds": []
  },
  {
    "id": 5,
    "name": "Super Citizen Edition",
    "tier": "Special",
    "iconPath": "./assets/Warbonds/Special/Super%20Citizen%20Edition.png",
    "WeaponIds": [
      21
    ],
    "BoosterIds": []
  },
  {
    "id": 6,
    "name": "Helldivers Mobilize",
    "tier": "Standard",
    "iconPath": "./assets/Warbonds/Standard/Helldivers%20Mobilize.png",
    "WeaponIds": [
      2,
      8,
      9,
      13,
      14,
      15,
      16,
      17,
      18,
      20
    ],
    "BoosterIds": [
      3,
      4,
      5,
      6,
      7,
      8
    ]
  }
];