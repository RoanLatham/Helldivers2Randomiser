export interface Weapon {
  id: string;
  name: string;
  type: string;
  category: string;
  warbond: string;
  iconPath: string;
}

export const primaryWeapons: Weapon[] = [
  {
    id: 'AR-23_Liberator',
    name: 'AR-23 Liberator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-23_Liberator.webp',
  },
  {
    id: 'AR-23P_Liberator_Penetrator',
    name: 'AR-23P Liberator Penetrator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23P_Liberator_Penetrator.webp',
  },
  {
    id: 'AR-23C_Liberator_Concussive',
    name: 'AR-23C Liberator Concussive',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23C_Liberator_Concussive.webp',
  },
  {
    id: 'StA-52_Assault_Rifle',
    name: 'StA-52 Assault Rifle',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/StA-52_Assault_Rifle.webp',
  },
  {
    id: 'AR-23A_Liberator_Carbine',
    name: 'AR-23A Liberator Carbine',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Viper_Commandos',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23A_Liberator_Carbine.webp',
  },
  {
    id: 'AR-61_Tenderizer',
    name: 'AR-61 Tenderizer',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-61_Tenderizer.webp',
  },
  {
    id: 'BR-14_Adjudicator',
    name: 'BR-14 Adjudicator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/BR-14_Adjudicator.webp',
  },
  {
    id: 'R-2124_Constitution',
    name: 'R-2124 Constitution',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Liberty_Day',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-2124_Constitution.webp',
  },
  {
    id: 'R-6_Deadeye',
    name: 'R-6 Deadeye',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-6_Deadeye.webp',
  },
  {
    id: 'R-63_Diligence',
    name: 'R-63 Diligence',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-63_Diligence.webp',
  },
  {
    id: 'R-63CS_Diligence_Counter_Sniper',
    name: 'R-63CS Diligence Counter Sniper',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-63CS_Diligence_Counter_Sniper.webp',
  },
  {
    id: 'R-2_Amendment',
    name: 'R-2 Amendment',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Masters_of_Ceremony',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-2_Amendment_Primary_Weaponry.webp',
  },
  {
    id: 'PLAS-39_Accelerator_Rifle',
    name: 'PLAS-39 Accelerator Rifle',
    type: 'Primary',
    category: 'Sniper Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Sniper%20Rifle/PLAS-39_Accelerator_Rifle.webp',
  },
  {
    id: 'MP-98_Knight',
    name: 'MP-98 Knight',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Super_Citizen_Edition',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/MP-98_Knight.webp',
  },
  {
    id: 'StA-11_SMG',
    name: 'StA-11 SMG',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_x_Killzone',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/StA-11_SMG.webp',
  },
  {
    id: 'SMG-32_Reprimand',
    name: 'SMG-32 Reprimand',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-32_Reprimand.webp',
  },
  {
    id: 'SMG-37_Defender',
    name: 'SMG-37 Defender',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-37_Defender.webp',
  },
  {
    id: 'SMG-72_Pummeler',
    name: 'SMG-72 Pummeler',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-72_Pummeler.webp',
  },
  {
    id: 'SG-8_Punisher',
    name: 'SG-8 Punisher',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8_Punisher.webp',
  },
  {
    id: 'SG-8S_Slugger',
    name: 'SG-8S Slugger',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8S_Slugger.webp',
  },
  {
    id: 'SG-20_Halt',
    name: 'SG-20 Halt',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-20_Halt.webp',
  },
  {
    id: 'SG-451_Cookout',
    name: 'SG-451 Cookout',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-451_Cookout.webp',
  },
  {
    id: 'SG-225_Breaker',
    name: 'SG-225 Breaker',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-225_Breaker.webp',
  },
  {
    id: 'SG-225SP_Breaker_Spray_&_Pray',
    name: 'SG-225SP Breaker Spray & Pray',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225SP_Breaker_Spray_&_Pray.webp',
  },
  {
    id: 'SG-225IE_Breaker_Incendiary',
    name: 'SG-225IE Breaker Incendiary',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225IE_Breaker_Incendiary.webp',
  },
  {
    id: 'CB-9_Exploding_Crossbow',
    name: 'CB-9 Exploding Crossbow',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/CB-9_Exploding_Crossbow.webp',
  },
  {
    id: 'R-36_Eruptor',
    name: 'R-36 Eruptor',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/R-36_Eruptor.webp',
  },
  {
    id: 'SG-8P_Punisher_Plasma',
    name: 'SG-8P Punisher Plasma',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath:
      './assets/Weapons/Primary/Energy-Based/SG-8P_Punisher_Plasma.webp',
  },
  {
    id: 'ARC-12_Blitzer',
    name: 'ARC-12 Blitzer',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/ARC-12_Blitzer.webp',
  },
  {
    id: 'LAS-5_Scythe',
    name: 'LAS-5 Scythe',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-5_Scythe.webp',
  },
  {
    id: 'LAS-16_Sickle',
    name: 'LAS-16 Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-16_Sickle.webp',
  },
  {
    id: 'LAS-17_Double-Edge_Sickle',
    name: 'LAS-17 Double-Edge Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Servants_of_Freedom',
    iconPath:
      './assets/Weapons/Primary/Energy-Based/LAS-17_Double-Edge_Sickle.webp',
  },
  {
    id: 'PLAS-1_Scorcher',
    name: 'PLAS-1 Scorcher',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-1_Scorcher.webp',
  },
  {
    id: 'PLAS-101_Purifier',
    name: 'PLAS-101 Purifier',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-101_Purifier.webp',
  },
  {
    id: 'FLAM-66_Torcher',
    name: 'FLAM-66 Torcher',
    type: 'Primary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Special/FLAM-66_Torcher.webp',
  },
  {
    id: 'JAR-5_Dominator',
    name: 'JAR-5 Dominator',
    type: 'Primary',
    category: 'Special',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Primary/Special/JAR-5_Dominator.webp',
  },
];

export const secondaryWeapons: Weapon[] = [
  {
    id: 'P-2_Peacemaker',
    name: 'P-2 Peacemaker',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Secondary/Pistol/P-2_Peacemaker.webp',
  },
  {
    id: 'P-19_Redeemer',
    name: 'P-19 Redeemer',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Secondary/Pistol/P-19_Redeemer.webp',
  },
  {
    id: 'P-113_Verdict',
    name: 'P-113 Verdict',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Secondary/Pistol/P-113_Verdict.webp',
  },
  {
    id: 'P-4_Senator',
    name: 'P-4 Senator',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Secondary/Pistol/P-4_Senator.webp',
  },
  {
    id: 'CQC-19_Stun_Lance',
    name: 'CQC-19 Stun Lance',
    type: 'Secondary',
    category: 'Melee',
    warbond: 'Urban_Legends',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-19_Stun_Lance.webp',
  },
  {
    id: 'CQC-30_Stun_Baton',
    name: 'CQC-30 Stun Baton',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-30_Stun_Baton.webp',
  },
  {
    id: 'CQC-5_Combat_Hatchet',
    name: 'CQC-5 Combat Hatchet',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-5_Combat_Hatchet.webp',
  },
  {
    id: 'CQC-2_Saber',
    name: 'CQC-2 Saber',
    type: 'Secondary',
    category: 'Melee',
    warbond: 'Masters of Ceremony',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-2_Saber.webp',
  },
  {
    id: 'P-11_Stim_Pistol',
    name: 'P-11 Stim Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Secondary/Special/P-11_Stim_Pistol.webp',
  },
  {
    id: 'SG-22_Bushwhacker',
    name: 'SG-22 Bushwhacker',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Secondary/Special/SG-22_Bushwhacker.webp',
  },
  {
    id: 'LAS-58_Talon',
    name: 'LAS-58 Talon',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Secondary/Special/LAS-58_Talon.webp',
  },
  {
    id: 'P-72_Crisper',
    name: 'P-72 Crisper',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Secondary/Special/P-72_Crisper.webp',
  },
  {
    id: 'GP-31_Grenade_Pistol',
    name: 'GP-31 Grenade Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Grenade_Pistol.webp',
  },
  {
    id: 'LAS-7_Dagger',
    name: 'LAS-7 Dagger',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Secondary/Special/LAS-7_Dagger.webp',
  },
  {
    id: 'GP-31_Ultimatum',
    name: 'GP-31 Ultimatum',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Ultimatum.webp',
  },
  {
    id: 'PLAS-15_Loyalist',
    name: 'PLAS-15 Loyalist',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Secondary/Special/PLAS-15_Loyalist.webp',
  },
];

export const throwableWeapons: Weapon[] = [
  {
    id: 'TED-63_Dynamite',
    name: 'TED-63 Dynamite',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Throwable/Standard/TED-63_Dynamite.webp',
  },
  {
    id: 'G-6_Frag',
    name: 'G-6 Frag',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Standard/G-6_Frag.webp',
  },
  {
    id: 'G-12_High_Explosive',
    name: 'G-12 High Explosive',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Throwable/Standard/G-12_High_Explosive.webp',
  },
  {
    id: 'G-10_Incendiary',
    name: 'G-10 Incendiary',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Throwable/Standard/G-10_Incendiary.webp',
  },
  {
    id: 'G-16_Impact',
    name: 'G-16 Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-16_Impact.webp',
  },
  {
    id: 'G-13_Incendiary_Impact',
    name: 'G-13 Incendiary Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Throwable/Special/G-13_Incendiary_Impact.webp',
  },
  {
    id: 'G-23_Stun',
    name: 'G-23 Stun',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Throwable/Special/G-23_Stun.webp',
  },
  {
    id: 'G-4_Gas',
    name: 'G-4 Gas',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Throwable/Special/G-4_Gas.webp',
  },
  {
    id: 'G-50_Seeker',
    name: 'G-50 Seeker',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Throwable/Special/G-50_Seeker.webp',
  },
  {
    id: 'G-3_Smoke',
    name: 'G-3 Smoke',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-3_Smoke.webp',
  },
  {
    id: 'G-123_Thermite',
    name: 'G-123 Thermite',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Throwable/Special/G-123_Thermite.webp',
  },
  {
    id: 'K-2_Throwing_Knife',
    name: 'K-2 Throwing Knife',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Throwable/Special/K-2_Throwing_Knife.webp',
  },
];

export const allWeapons: Weapon[] = [
  {
    id: 'AR-23_Liberator',
    name: 'AR-23 Liberator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-23_Liberator.webp',
  },
  {
    id: 'AR-23P_Liberator_Penetrator',
    name: 'AR-23P Liberator Penetrator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23P_Liberator_Penetrator.webp',
  },
  {
    id: 'AR-23C_Liberator_Concussive',
    name: 'AR-23C Liberator Concussive',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23C_Liberator_Concussive.webp',
  },
  {
    id: 'StA-52_Assault_Rifle',
    name: 'StA-52 Assault Rifle',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/StA-52_Assault_Rifle.webp',
  },
  {
    id: 'AR-23A_Liberator_Carbine',
    name: 'AR-23A Liberator Carbine',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Viper_Commandos',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23A_Liberator_Carbine.webp',
  },
  {
    id: 'AR-61_Tenderizer',
    name: 'AR-61 Tenderizer',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-61_Tenderizer.webp',
  },
  {
    id: 'BR-14_Adjudicator',
    name: 'BR-14 Adjudicator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/BR-14_Adjudicator.webp',
  },
  {
    id: 'R-2124_Constitution',
    name: 'R-2124 Constitution',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Liberty_Day',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-2124_Constitution.webp',
  },
  {
    id: 'R-6_Deadeye',
    name: 'R-6 Deadeye',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-6_Deadeye.webp',
  },
  {
    id: 'R-63_Diligence',
    name: 'R-63 Diligence',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-63_Diligence.webp',
  },
  {
    id: 'R-63CS_Diligence_Counter_Sniper',
    name: 'R-63CS Diligence Counter Sniper',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-63CS_Diligence_Counter_Sniper.webp',
  },
  {
    id: 'R-2_Amendment',
    name: 'R-2 Amendment',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Masters_of_Ceremony',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-2_Amendment_Primary_Weaponry.webp',
  },
  {
    id: 'PLAS-39_Accelerator_Rifle',
    name: 'PLAS-39 Accelerator Rifle',
    type: 'Primary',
    category: 'Sniper Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Sniper%20Rifle/PLAS-39_Accelerator_Rifle.webp',
  },
  {
    id: 'MP-98_Knight',
    name: 'MP-98 Knight',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Super_Citizen_Edition',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/MP-98_Knight.webp',
  },
  {
    id: 'StA-11_SMG',
    name: 'StA-11 SMG',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_x_Killzone',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/StA-11_SMG.webp',
  },
  {
    id: 'SMG-32_Reprimand',
    name: 'SMG-32 Reprimand',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-32_Reprimand.webp',
  },
  {
    id: 'SMG-37_Defender',
    name: 'SMG-37 Defender',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-37_Defender.webp',
  },
  {
    id: 'SMG-72_Pummeler',
    name: 'SMG-72 Pummeler',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-72_Pummeler.webp',
  },
  {
    id: 'SG-8_Punisher',
    name: 'SG-8 Punisher',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8_Punisher.webp',
  },
  {
    id: 'SG-8S_Slugger',
    name: 'SG-8S Slugger',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8S_Slugger.webp',
  },
  {
    id: 'SG-20_Halt',
    name: 'SG-20 Halt',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-20_Halt.webp',
  },
  {
    id: 'SG-451_Cookout',
    name: 'SG-451 Cookout',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-451_Cookout.webp',
  },
  {
    id: 'SG-225_Breaker',
    name: 'SG-225 Breaker',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-225_Breaker.webp',
  },
  {
    id: 'SG-225SP_Breaker_Spray_&_Pray',
    name: 'SG-225SP Breaker Spray & Pray',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225SP_Breaker_Spray_&_Pray.webp',
  },
  {
    id: 'SG-225IE_Breaker_Incendiary',
    name: 'SG-225IE Breaker Incendiary',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225IE_Breaker_Incendiary.webp',
  },
  {
    id: 'CB-9_Exploding_Crossbow',
    name: 'CB-9 Exploding Crossbow',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/CB-9_Exploding_Crossbow.webp',
  },
  {
    id: 'R-36_Eruptor',
    name: 'R-36 Eruptor',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/R-36_Eruptor.webp',
  },
  {
    id: 'SG-8P_Punisher_Plasma',
    name: 'SG-8P Punisher Plasma',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath:
      './assets/Weapons/Primary/Energy-Based/SG-8P_Punisher_Plasma.webp',
  },
  {
    id: 'ARC-12_Blitzer',
    name: 'ARC-12 Blitzer',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/ARC-12_Blitzer.webp',
  },
  {
    id: 'LAS-5_Scythe',
    name: 'LAS-5 Scythe',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-5_Scythe.webp',
  },
  {
    id: 'LAS-16_Sickle',
    name: 'LAS-16 Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-16_Sickle.webp',
  },
  {
    id: 'LAS-17_Double-Edge_Sickle',
    name: 'LAS-17 Double-Edge Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Servants_of_Freedom',
    iconPath:
      './assets/Weapons/Primary/Energy-Based/LAS-17_Double-Edge_Sickle.webp',
  },
  {
    id: 'PLAS-1_Scorcher',
    name: 'PLAS-1 Scorcher',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-1_Scorcher.webp',
  },
  {
    id: 'PLAS-101_Purifier',
    name: 'PLAS-101 Purifier',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-101_Purifier.webp',
  },
  {
    id: 'FLAM-66_Torcher',
    name: 'FLAM-66 Torcher',
    type: 'Primary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Special/FLAM-66_Torcher.webp',
  },
  {
    id: 'JAR-5_Dominator',
    name: 'JAR-5 Dominator',
    type: 'Primary',
    category: 'Special',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Primary/Special/JAR-5_Dominator.webp',
  },
  {
    id: 'P-2_Peacemaker',
    name: 'P-2 Peacemaker',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Secondary/Pistol/P-2_Peacemaker.webp',
  },
  {
    id: 'P-19_Redeemer',
    name: 'P-19 Redeemer',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Secondary/Pistol/P-19_Redeemer.webp',
  },
  {
    id: 'P-113_Verdict',
    name: 'P-113 Verdict',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Secondary/Pistol/P-113_Verdict.webp',
  },
  {
    id: 'P-4_Senator',
    name: 'P-4 Senator',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Secondary/Pistol/P-4_Senator.webp',
  },
  {
    id: 'CQC-19_Stun_Lance',
    name: 'CQC-19 Stun Lance',
    type: 'Secondary',
    category: 'Melee',
    warbond: 'Urban_Legends',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-19_Stun_Lance.webp',
  },
  {
    id: 'CQC-30_Stun_Baton',
    name: 'CQC-30 Stun Baton',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-30_Stun_Baton.webp',
  },
  {
    id: 'CQC-5_Combat_Hatchet',
    name: 'CQC-5 Combat Hatchet',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-5_Combat_Hatchet.webp',
  },
  {
    id: 'CQC-2_Saber',
    name: 'CQC-2 Saber',
    type: 'Secondary',
    category: 'Melee',
    warbond: 'Masters_of_Ceremony',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-2_Saber.webp',
  },
  {
    id: 'P-11_Stim_Pistol',
    name: 'P-11 Stim Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Secondary/Special/P-11_Stim_Pistol.webp',
  },
  {
    id: 'SG-22_Bushwhacker',
    name: 'SG-22 Bushwhacker',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Secondary/Special/SG-22_Bushwhacker.webp',
  },
  {
    id: 'LAS-58_Talon',
    name: 'LAS-58 Talon',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Secondary/Special/LAS-58_Talon.webp',
  },
  {
    id: 'P-72_Crisper',
    name: 'P-72 Crisper',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Secondary/Special/P-72_Crisper.webp',
  },
  {
    id: 'GP-31_Grenade_Pistol',
    name: 'GP-31 Grenade Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Grenade_Pistol.webp',
  },
  {
    id: 'LAS-7_Dagger',
    name: 'LAS-7 Dagger',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Secondary/Special/LAS-7_Dagger.webp',
  },
  {
    id: 'GP-31_Ultimatum',
    name: 'GP-31 Ultimatum',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Ultimatum.webp',
  },
  {
    id: 'PLAS-15_Loyalist',
    name: 'PLAS-15 Loyalist',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Secondary/Special/PLAS-15_Loyalist.webp',
  },
  {
    id: 'TED-63_Dynamite',
    name: 'TED-63 Dynamite',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Throwable/Standard/TED-63_Dynamite.webp',
  },
  {
    id: 'Las-58_Talon',
    name: 'Las-58 Talon',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Secondary/Special/LAS-58_Talon.webp',
  },
  {
    id: 'G-6_Frag',
    name: 'G-6 Frag',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Standard/G-6_Frag.webp',
  },
  {
    id: 'G-12_High_Explosive',
    name: 'G-12 High Explosive',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Throwable/Standard/G-12_High_Explosive.webp',
  },
  {
    id: 'G-10_Incendiary',
    name: 'G-10 Incendiary',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Throwable/Standard/G-10_Incendiary.webp',
  },
  {
    id: 'G-16_Impact',
    name: 'G-16 Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-16_Impact.webp',
  },
  {
    id: 'G-13_Incendiary_Impact',
    name: 'G-13 Incendiary Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Throwable/Special/G-13_Incendiary_Impact.webp',
  },
  {
    id: 'G-23_Stun',
    name: 'G-23 Stun',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Throwable/Special/G-23_Stun.webp',
  },
  {
    id: 'G-4_Gas',
    name: 'G-4 Gas',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Throwable/Special/G-4_Gas.webp',
  },
  {
    id: 'G-50_Seeker',
    name: 'G-50 Seeker',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Throwable/Special/G-50_Seeker.webp',
  },
  {
    id: 'G-3_Smoke',
    name: 'G-3 Smoke',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-3_Smoke.webp',
  },
  {
    id: 'G-123_Thermite',
    name: 'G-123 Thermite',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Throwable/Special/G-123_Thermite.webp',
  },
  {
    id: 'K-2_Throwing_Knife',
    name: 'K-2 Throwing Knife',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Throwable/Special/K-2_Throwing_Knife.webp',
  },
];

export const weaponsByCategory: { [category: string]: Weapon[] } = {
  Shotgun: allWeapons.filter((weapon) => weapon.category === 'Shotgun'),
  Melee: allWeapons.filter((weapon) => weapon.category === 'Melee'),
  Explosive: allWeapons.filter((weapon) => weapon.category === 'Explosive'),
  Standard: allWeapons.filter((weapon) => weapon.category === 'Standard'),
  'Submachine Gun': allWeapons.filter(
    (weapon) => weapon.category === 'Submachine Gun'
  ),
  'Assault Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Assault Rifle'
  ),
  'Energy-Based': allWeapons.filter(
    (weapon) => weapon.category === 'Energy-Based'
  ),
  'Marksman Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Marksman Rifle'
  ),
  Special: allWeapons.filter((weapon) => weapon.category === 'Special'),
  Pistol: allWeapons.filter((weapon) => weapon.category === 'Pistol'),
  'Sniper Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Sniper Rifle'
  ),
};

export const weaponsByType: { [type: string]: Weapon[] } = {
  Primary: allWeapons.filter((weapon) => weapon.type === 'Primary'),
  Secondary: allWeapons.filter((weapon) => weapon.type === 'Secondary'),
  Throwable: allWeapons.filter((weapon) => weapon.type === 'Throwable'),
};

export const weaponsByWarbond: { [warbond: string]: Weapon[] } = {
  '': allWeapons.filter((weapon) => weapon.warbond === ''),
  Polar_Patriots: allWeapons.filter(
    (weapon) => weapon.warbond === 'Polar_Patriots'
  ),
  Helldivers_Mobilize: allWeapons.filter(
    (weapon) => weapon.warbond === 'Helldivers_Mobilize'
  ),
  Freedoms_Flame: allWeapons.filter(
    (weapon) => weapon.warbond === 'Freedoms_Flame'
  ),
  Super_Citizen_Edition: allWeapons.filter(
    (weapon) => weapon.warbond === 'Super_Citizen_Edition'
  ),
  Servants_of_Freedom: allWeapons.filter(
    (weapon) => weapon.warbond === 'Servants_of_Freedom'
  ),
  Urban_Legends: allWeapons.filter(
    (weapon) => weapon.warbond === 'Urban_Legends'
  ),
  Democratic_Detonation: allWeapons.filter(
    (weapon) => weapon.warbond === 'Democratic_Detonation'
  ),
  Steeled_Veterans: allWeapons.filter(
    (weapon) => weapon.warbond === 'Steeled_Veterans'
  ),
  Borderline_Justice: allWeapons.filter(
    (weapon) => weapon.warbond === 'Borderline_Justice'
  ),
  Viper_Commandos: allWeapons.filter(
    (weapon) => weapon.warbond === 'Viper_Commandos'
  ),
  Truth_Enforcers: allWeapons.filter(
    (weapon) => weapon.warbond === 'Truth_Enforcers'
  ),
  Cutting_Edge: allWeapons.filter(
    (weapon) => weapon.warbond === 'Cutting_Edge'
  ),
  Liberty_Day: allWeapons.filter((weapon) => weapon.warbond === 'Liberty_Day'),
  Standard_Issue: allWeapons.filter(
    (weapon) => weapon.warbond === 'Standard_Issue'
  ),
  Chemical_Agents: allWeapons.filter(
    (weapon) => weapon.warbond === 'Chemical_Agents'
  ),
  Helldivers_x_Killzone: allWeapons.filter(
    (weapon) => weapon.warbond === 'Helldivers_x_Killzone'
  ),
  Masters_of_Ceremony: allWeapons.filter(
    (weapon) => weapon.warbond === 'Masters_of_Ceremony'
  ),
};
