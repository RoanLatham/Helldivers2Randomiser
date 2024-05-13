
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
      1,
      12,
      13,
      14,
      29
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
      2,
      8,
      17,
      18,
      30
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
      7,
      11,
      19,
      26,
      33
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
      6,
      10,
      32
    ],
    "BoosterIds": []
  },
  {
    "id": 5,
    "name": "Super Citizen Edition",
    "tier": "Special",
    "iconPath": "./assets/Warbonds/Special/Super%20Citizen%20Edition.png",
    "WeaponIds": [
      28
    ],
    "BoosterIds": []
  },
  {
    "id": 6,
    "name": "Helldivers Mobilize",
    "tier": "Standard",
    "iconPath": "./assets/Warbonds/Standard/Helldivers%20Mobilize.png",
    "WeaponIds": [
      3,
      4,
      5,
      9,
      15,
      16,
      20,
      21,
      22,
      23,
      24,
      25,
      27,
      31
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