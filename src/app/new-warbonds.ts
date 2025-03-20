// Interface for Warbond objects
export interface Warbond {
  id: string;
  name: string;
  iconPath: string;
}

// Array of all warbonds
export const warbonds: Warbond[] = [
  {
    id: 'Helldivers_Mobilize',
    name: 'Helldivers Mobilize!',
    iconPath: './assets/NewWarbonds/Helldivers_Mobilize.png',
  },
  {
    id: 'Servants_of_Freedom',
    name: 'Servants of Freedom',
    iconPath: './assets/NewWarbonds/Servants_of_Freedom.png',
  },
  {
    id: 'Urban_Legends',
    name: 'Urban Legends',
    iconPath: './assets/NewWarbonds/Urban_Legends.png',
  },
  {
    id: 'Truth_Enforcers',
    name: 'Truth Enforcers',
    iconPath: './assets/NewWarbonds/Truth_Enforcers.png',
  },
  {
    id: 'Chemical_Agents',
    name: 'Chemical Agents',
    iconPath: './assets/NewWarbonds/Chemical_Agents.png',
  },
  {
    id: 'Freedoms_Flame',
    name: "Freedom's Flame",
    iconPath: './assets/NewWarbonds/Freedoms_Flame.png',
  },
  {
    id: 'Viper_Commandos',
    name: 'Viper Commandos',
    iconPath: './assets/NewWarbonds/Viper_Commandos.png',
  },
  {
    id: 'Polar_Patriots',
    name: 'Polar Patriots',
    iconPath: './assets/NewWarbonds/Polar_Patriots.png',
  },
  {
    id: 'Democratic_Detonation',
    name: 'Democratic Detonation',
    iconPath: './assets/NewWarbonds/Democratic_Detonation.png',
  },
  {
    id: 'Cutting_Edge',
    name: 'Cutting Edge',
    iconPath: './assets/NewWarbonds/Cutting_Edge.png',
  },
  {
    id: 'Steeled_Veterans',
    name: 'Steeled Veterans',
    iconPath: './assets/NewWarbonds/Steeled_Veterans.png',
  },
  {
    id: 'Borderline_Justice',
    name: 'Borderline Justice',
    iconPath: './assets/NewWarbonds/Borderline_Justice.png',
  },
];

// Helper function to get a warbond by ID
export function getWarbondById(id: string): Warbond | undefined {
  return warbonds.find((w) => w.id === id);
}
