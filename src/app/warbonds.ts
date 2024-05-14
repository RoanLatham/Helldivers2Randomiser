
export interface Warbond {
  id: number;
  name: string;
  tier: string;
  iconPath: string;
  PrimaryWeaponIds: number[];
  SecondaryWeaponIds: number[];
  GrenadeIds: number[];
  BoosterIds: number[];
}

export const warbonds: Warbond[] = [
  {
    "id": 1,
    "name": "Cutting Edge",
    "tier": "Premium",
    "iconPath": "./assets/Warbonds/Premium/Cutting%20Edge.png",
    "PrimaryWeaponIds": [
      12,
      13,
      14
    ],
    "SecondaryWeaponIds": [
      29
    ],
    "GrenadeIds": [
      1
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
    "PrimaryWeaponIds": [
      8,
      17,
      18
    ],
    "SecondaryWeaponIds": [
      30
    ],
    "GrenadeIds": [
      2
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
    "PrimaryWeaponIds": [
      11,
      19,
      26
    ],
    "SecondaryWeaponIds": [
      33
    ],
    "GrenadeIds": [
      7
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
    "PrimaryWeaponIds": [
      10
    ],
    "SecondaryWeaponIds": [
      32
    ],
    "GrenadeIds": [
      6
    ],
    "BoosterIds": []
  },
  {
    "id": 5,
    "name": "Super Citizen Edition",
    "tier": "Special",
    "iconPath": "./assets/Warbonds/Special/Super%20Citizen%20Edition.png",
    "PrimaryWeaponIds": [
      28
    ],
    "SecondaryWeaponIds": [],
    "GrenadeIds": [],
    "BoosterIds": []
  },
  {
    "id": 6,
    "name": "Helldivers Mobilize",
    "tier": "Standard",
    "iconPath": "./assets/Warbonds/Standard/Helldivers%20Mobilize.png",
    "PrimaryWeaponIds": [
      9,
      15,
      16,
      20,
      21,
      22,
      23,
      24,
      25,
      27
    ],
    "SecondaryWeaponIds": [
      31
    ],
    "GrenadeIds": [
      3,
      4,
      5
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