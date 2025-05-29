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
    iconPath: './assets/Warbonds/Helldivers_Mobilize.webp',
  },
  {
    id: 'Masters_of_Ceremony',
    name: 'Masters of Ceremony',
    iconPath: './assets/Warbonds/Masters_of_Ceremony.webp',
  },
  {
    id: 'Borderline_Justice',
    name: 'Borderline Justice',
    iconPath: './assets/Warbonds/Borderline_Justice.webp',
  },
  {
    id: 'Servants_of_Freedom',
    name: 'Servants of Freedom',
    iconPath: './assets/Warbonds/Servants_of_Freedom.webp',
  },
  {
    id: 'Urban_Legends',
    name: 'Urban Legends',
    iconPath: './assets/Warbonds/Urban_Legends.webp',
  },
  {
    id: 'Truth_Enforcers',
    name: 'Truth Enforcers',
    iconPath: './assets/Warbonds/Truth_Enforcers.webp',
  },
  {
    id: 'Chemical_Agents',
    name: 'Chemical Agents',
    iconPath: './assets/Warbonds/Chemical_Agents.webp',
  },
  {
    id: 'Freedoms_Flame',
    name: "Freedom's Flame",
    iconPath: './assets/Warbonds/Freedoms_Flame.webp',
  },
  {
    id: 'Viper_Commandos',
    name: 'Viper Commandos',
    iconPath: './assets/Warbonds/Viper_Commandos.webp',
  },
  {
    id: 'Polar_Patriots',
    name: 'Polar Patriots',
    iconPath: './assets/Warbonds/Polar_Patriots.webp',
  },
  {
    id: 'Democratic_Detonation',
    name: 'Democratic Detonation',
    iconPath: './assets/Warbonds/Democratic_Detonation.webp',
  },
  {
    id: 'Cutting_Edge',
    name: 'Cutting Edge',
    iconPath: './assets/Warbonds/Cutting_Edge.webp',
  },
  {
    id: 'Steeled_Veterans',
    name: 'Steeled Veterans',
    iconPath: './assets/Warbonds/Steeled_Veterans.webp',
  },
  {
    id: 'Helldivers_x_Killzone',
    name: 'Helldivers x Killzone',
    iconPath: './assets/Warbonds/Helldivers_x_Killzone.webp',
  },
  {
    id: 'Super_Citizen_Edition',
    name: 'Super Citizen Edition',
    iconPath: './assets/Warbonds/Super_Citizen_Edition.webp',
  },
  {
    id: 'Standard_Issue',
    name: 'Standard Issue',
    iconPath: './assets/Warbonds/Helldivers_Mobilize.webp',
  },
];

// Helper function to get a warbond by ID
export function getWarbondById(id: string): Warbond | undefined {
  return warbonds.find((w) => w.id === id);
}
