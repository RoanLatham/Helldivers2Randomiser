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
    iconPath: './assets/Warbonds/Helldivers_Mobilize.png',
  },
  {
    id: 'Servants_of_Freedom',
    name: 'Servants of Freedom',
    iconPath: './assets/Warbonds/Servants_of_Freedom.png',
  },
  {
    id: 'Urban_Legends',
    name: 'Urban Legends',
    iconPath: './assets/Warbonds/Urban_Legends.png',
  },
  {
    id: 'Truth_Enforcers',
    name: 'Truth Enforcers',
    iconPath: './assets/Warbonds/Truth_Enforcers.png',
  },
  {
    id: 'Chemical_Agents',
    name: 'Chemical Agents',
    iconPath: './assets/Warbonds/Chemical_Agents.png',
  },
  {
    id: 'Freedoms_Flame',
    name: "Freedom's Flame",
    iconPath: './assets/Warbonds/Freedoms_Flame.png',
  },
  {
    id: 'Viper_Commandos',
    name: 'Viper Commandos',
    iconPath: './assets/Warbonds/Viper_Commandos.png',
  },
  {
    id: 'Polar_Patriots',
    name: 'Polar Patriots',
    iconPath: './assets/Warbonds/Polar_Patriots.png',
  },
  {
    id: 'Democratic_Detonation',
    name: 'Democratic Detonation',
    iconPath: './assets/Warbonds/Democratic_Detonation.png',
  },
  {
    id: 'Cutting_Edge',
    name: 'Cutting Edge',
    iconPath: './assets/Warbonds/Cutting_Edge.png',
  },
  {
    id: 'Steeled_Veterans',
    name: 'Steeled Veterans',
    iconPath: './assets/Warbonds/Steeled_Veterans.png',
  },
  {
    id: 'Borderline_Justice',
    name: 'Borderline Justice',
    iconPath: './assets/Warbonds/Borderline_Justice.png',
  },
  {
    id: 'Helldivers_x_Killzone',
    name: 'Helldivers x Killzone',
    iconPath: './assets/Warbonds/Helldivers_x_Killzone.png',
  },
  {
    id: 'Super_Citizen_Edition',
    name: 'Super Citizen Edition',
    iconPath: './assets/Warbonds/Super_Citizen_Edition.png',
  },
  {
    id: 'Standard_Issue',
    name: 'Standard Issue',
    iconPath: './assets/Warbonds/Helldivers_Mobilize.png',
  },
];

// Helper function to get a warbond by ID
export function getWarbondById(id: string): Warbond | undefined {
  return warbonds.find((w) => w.id === id);
}
