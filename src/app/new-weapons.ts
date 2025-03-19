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

    warbond: 'Standard Issue',

    iconPath: './assets/NewWeapons/Primary/Assault Rifle/AR-23_Liberator.png',
  },
  {
    id: 'AR-23P_Liberator_Penetrator',

    name: 'AR-23P Liberator Penetrator',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Helldivers Mobilize',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/AR-23P_Liberator_Penetrator.png',
  },
  {
    id: 'AR-23C_Liberator_Concussive',

    name: 'AR-23C Liberator Concussive',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Steeled Veterans',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/AR-23C_Liberator_Concussive.png',
  },
  {
    id: 'StA-52_Assault_Rifle',

    name: 'StA-52 Assault Rifle',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Helldivers x Killzone',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/StA-52_Assault_Rifle.png',
  },
  {
    id: 'AR-23A_Liberator_Carbine',

    name: 'AR-23A Liberator Carbine',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Viper Commandos',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/AR-23A_Liberator_Carbine.png',
  },
  {
    id: 'AR-61_Tenderizer',

    name: 'AR-61 Tenderizer',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Primary/Assault Rifle/AR-61_Tenderizer.png',
  },
  {
    id: 'BR-14_Adjudicator',

    name: 'BR-14 Adjudicator',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Primary/Assault Rifle/BR-14_Adjudicator.png',
  },
  {
    id: 'R-2124_Constitution',

    name: 'R-2124 Constitution',

    type: 'Primary',

    category: 'Marksman Rifle',

    warbond: 'Liberty Day',

    iconPath:
      './assets/NewWeapons/Primary/Marksman Rifle/R-2124_Constitution.png',
  },
  {
    id: 'R-63_Diligence',

    name: 'R-63 Diligence',

    type: 'Primary',

    category: 'Marksman Rifle',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Marksman Rifle/R-63_Diligence.png',
  },
  {
    id: 'R-63CS_Diligence_Counter_Sniper',

    name: 'R-63CS Diligence Counter Sniper',

    type: 'Primary',

    category: 'Marksman Rifle',

    warbond: 'Helldivers Mobilize',

    iconPath:
      './assets/NewWeapons/Primary/Marksman Rifle/R-63CS_Diligence_Counter_Sniper.png',
  },
  {
    id: 'PLAS-39_Accelerator_Rifle',

    name: 'PLAS-39 Accelerator Rifle',

    type: 'Primary',

    category: 'Sniper Rifle',

    warbond: 'Helldivers x Killzone',

    iconPath:
      './assets/NewWeapons/Primary/Sniper Rifle/PLAS-39_Accelerator_Rifle.png',
  },
  {
    id: 'MP-98_Knight',

    name: 'MP-98 Knight',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Super Citizen Edition',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/MP-98_Knight.png',
  },
  {
    id: 'StA-11_SMG',

    name: 'StA-11 SMG',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Helldivers x Killzone',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/StA-11_SMG.png',
  },
  {
    id: 'SMG-32_Reprimand',

    name: 'SMG-32 Reprimand',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Truth Enforcers',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/SMG-32_Reprimand.png',
  },
  {
    id: 'SMG-37_Defender',

    name: 'SMG-37 Defender',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/SMG-37_Defender.png',
  },
  {
    id: 'SMG-72_Pummeler',

    name: 'SMG-72 Pummeler',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/SMG-72_Pummeler.png',
  },
  {
    id: 'SG-8_Punisher',

    name: 'SG-8 Punisher',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-8_Punisher.png',
  },
  {
    id: 'SG-8S_Slugger',

    name: 'SG-8S Slugger',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-8S_Slugger.png',
  },
  {
    id: 'SG-20_Halt',

    name: 'SG-20 Halt',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Truth Enforcers',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-20_Halt.png',
  },
  {
    id: 'SG-451_Cookout',

    name: 'SG-451 Cookout',

    type: 'Primary',

    category: 'Shotgun',

    warbond: "Freedom's Flame",

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-451_Cookout.png',
  },
  {
    id: 'SG-225_Breaker',

    name: 'SG-225 Breaker',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-225_Breaker.png',
  },
  {
    id: 'SG-225SP_Breaker_Spray_&_Pray',

    name: 'SG-225SP Breaker Spray & Pray',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath:
      './assets/NewWeapons/Primary/Shotgun/SG-225SP_Breaker_Spray_&_Pray.png',
  },
  {
    id: 'SG-225IE_Breaker_Incendiary',

    name: 'SG-225IE Breaker Incendiary',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Steeled Veterans',

    iconPath:
      './assets/NewWeapons/Primary/Shotgun/SG-225IE_Breaker_Incendiary.png',
  },
  {
    id: 'CB-9_Exploding_Crossbow',

    name: 'CB-9 Exploding Crossbow',

    type: 'Primary',

    category: 'Explosive',

    warbond: 'Democratic Detonation',

    iconPath:
      './assets/NewWeapons/Primary/Explosive/CB-9_Exploding_Crossbow.png',
  },
  {
    id: 'R-36_Eruptor',

    name: 'R-36 Eruptor',

    type: 'Primary',

    category: 'Explosive',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Primary/Explosive/R-36_Eruptor.png',
  },
  {
    id: 'SG-8P_Punisher_Plasma',

    name: 'SG-8P Punisher Plasma',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Cutting Edge',

    iconPath:
      './assets/NewWeapons/Primary/Energy-Based/SG-8P_Punisher_Plasma.png',
  },
  {
    id: 'ARC-12_Blitzer',

    name: 'ARC-12 Blitzer',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/ARC-12_Blitzer.png',
  },
  {
    id: 'LAS-5_Scythe',

    name: 'LAS-5 Scythe',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/LAS-5_Scythe.png',
  },
  {
    id: 'LAS-16_Sickle',

    name: 'LAS-16 Sickle',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/LAS-16_Sickle.png',
  },
  {
    id: 'LAS-17_Double-Edge_Sickle',

    name: 'LAS-17 Double-Edge Sickle',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Servants of Freedom',

    iconPath:
      './assets/NewWeapons/Primary/Energy-Based/LAS-17_Double-Edge_Sickle.png',
  },
  {
    id: 'PLAS-1_Scorcher',

    name: 'PLAS-1 Scorcher',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/PLAS-1_Scorcher.png',
  },
  {
    id: 'PLAS-101_Purifier',

    name: 'PLAS-101 Purifier',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/PLAS-101_Purifier.png',
  },
  {
    id: 'FLAM-66_Torcher',

    name: 'FLAM-66 Torcher',

    type: 'Primary',

    category: 'Special',

    warbond: "Freedom's Flame",

    iconPath: './assets/NewWeapons/Primary/Special/FLAM-66_Torcher.png',
  },
  {
    id: 'JAR-5_Dominator',

    name: 'JAR-5 Dominator',

    type: 'Primary',

    category: 'Special',

    warbond: 'Steeled Veterans',

    iconPath: './assets/NewWeapons/Primary/Special/JAR-5_Dominator.png',
  },
];

export const secondaryWeapons: Weapon[] = [
  {
    id: 'P-2_Peacemaker',

    name: 'P-2 Peacemaker',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Standard Issue',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-2_Peacemaker.png',
  },
  {
    id: 'P-19_Redeemer',

    name: 'P-19 Redeemer',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-19_Redeemer.png',
  },
  {
    id: 'P-113_Verdict',

    name: 'P-113 Verdict',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-113_Verdict.png',
  },
  {
    id: 'P-4_Senator',

    name: 'P-4 Senator',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Steeled Veterans',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-4_Senator.png',
  },
  {
    id: 'CQC-19_Stun_Lance',

    name: 'CQC-19 Stun Lance',

    type: 'Secondary',

    category: 'Melee',

    warbond: 'Urban Legends',

    iconPath: './assets/NewWeapons/Secondary/Melee/CQC-19_Stun_Lance.png',
  },
  {
    id: 'CQC-30_Stun_Baton',

    name: 'CQC-30 Stun Baton',

    type: 'Secondary',

    category: 'Melee',

    warbond: '',

    iconPath: './assets/NewWeapons/Secondary/Melee/CQC-30_Stun_Baton.png',
  },
  {
    id: 'CQC-5_Combat_Hatchet',

    name: 'CQC-5 Combat Hatchet',

    type: 'Secondary',

    category: 'Melee',

    warbond: '',

    iconPath: './assets/NewWeapons/Secondary/Melee/CQC-5_Combat_Hatchet.png',
  },
  {
    id: 'P-11_Stim_Pistol',

    name: 'P-11 Stim Pistol',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Chemical Agents',

    iconPath: './assets/NewWeapons/Secondary/Special/P-11_Stim_Pistol.png',
  },
  {
    id: 'SG-22_Bushwhacker',

    name: 'SG-22 Bushwhacker',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Viper Commandos',

    iconPath: './assets/NewWeapons/Secondary/Special/SG-22_Bushwhacker.png',
  },
  {
    id: 'P-72_Crisper',

    name: 'P-72 Crisper',

    type: 'Secondary',

    category: 'Special',

    warbond: "Freedom's Flame",

    iconPath: './assets/NewWeapons/Secondary/Special/P-72_Crisper.png',
  },
  {
    id: 'GP-31_Grenade_Pistol',

    name: 'GP-31 Grenade Pistol',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Secondary/Special/GP-31_Grenade_Pistol.png',
  },
  {
    id: 'LAS-7_Dagger',

    name: 'LAS-7 Dagger',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Secondary/Special/LAS-7_Dagger.png',
  },
  {
    id: 'GP-31_Ultimatum',

    name: 'GP-31 Ultimatum',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Servants of Freedom',

    iconPath: './assets/NewWeapons/Secondary/Special/GP-31_Ultimatum.png',
  },
  {
    id: 'PLAS-15_Loyalist',

    name: 'PLAS-15 Loyalist',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Truth Enforcers',

    iconPath: './assets/NewWeapons/Secondary/Special/PLAS-15_Loyalist.png',
  },
];

export const throwableWeapons: Weapon[] = [
  {
    id: 'G-6_Frag',

    name: 'G-6 Frag',

    type: 'Throwable',

    category: 'Standard',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Throwable/Standard/G-6_Frag.png',
  },
  {
    id: 'G-12_High_Explosive',

    name: 'G-12 High Explosive',

    type: 'Throwable',

    category: 'Standard',

    warbond: 'Standard Issue',

    iconPath: './assets/NewWeapons/Throwable/Standard/G-12_High_Explosive.png',
  },
  {
    id: 'G-10_Incendiary',

    name: 'G-10 Incendiary',

    type: 'Throwable',

    category: 'Standard',

    warbond: 'Steeled Veterans',

    iconPath: './assets/NewWeapons/Throwable/Standard/G-10_Incendiary.png',
  },
  {
    id: 'G-16_Impact',

    name: 'G-16 Impact',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Throwable/Special/G-16_Impact.png',
  },
  {
    id: 'G-13_Incendiary_Impact',

    name: 'G-13 Incendiary Impact',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Polar Patriots',

    iconPath:
      './assets/NewWeapons/Throwable/Special/G-13_Incendiary_Impact.png',
  },
  {
    id: 'G-23_Stun',

    name: 'G-23 Stun',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Throwable/Special/G-23_Stun.png',
  },
  {
    id: 'G-4_Gas',

    name: 'G-4 Gas',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Chemical Agents',

    iconPath: './assets/NewWeapons/Throwable/Special/G-4_Gas.png',
  },
  {
    id: 'G-50_Seeker',

    name: 'G-50 Seeker',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Servants of Freedom',

    iconPath: './assets/NewWeapons/Throwable/Special/G-50_Seeker.png',
  },
  {
    id: 'G-3_Smoke',

    name: 'G-3 Smoke',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Throwable/Special/G-3_Smoke.png',
  },
  {
    id: 'G-123_Thermite',

    name: 'G-123 Thermite',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Throwable/Special/G-123_Thermite.png',
  },
  {
    id: 'K-2_Throwing_Knife',

    name: 'K-2 Throwing Knife',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Viper Commandos',

    iconPath: './assets/NewWeapons/Throwable/Special/K-2_Throwing_Knife.png',
  },
];

export const allWeapons: Weapon[] = [
  {
    id: 'AR-23_Liberator',

    name: 'AR-23 Liberator',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Standard Issue',

    iconPath: './assets/NewWeapons/Primary/Assault Rifle/AR-23_Liberator.png',
  },
  {
    id: 'AR-23P_Liberator_Penetrator',

    name: 'AR-23P Liberator Penetrator',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Helldivers Mobilize',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/AR-23P_Liberator_Penetrator.png',
  },
  {
    id: 'AR-23C_Liberator_Concussive',

    name: 'AR-23C Liberator Concussive',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Steeled Veterans',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/AR-23C_Liberator_Concussive.png',
  },
  {
    id: 'StA-52_Assault_Rifle',

    name: 'StA-52 Assault Rifle',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Helldivers x Killzone',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/StA-52_Assault_Rifle.png',
  },
  {
    id: 'AR-23A_Liberator_Carbine',

    name: 'AR-23A Liberator Carbine',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Viper Commandos',

    iconPath:
      './assets/NewWeapons/Primary/Assault Rifle/AR-23A_Liberator_Carbine.png',
  },
  {
    id: 'AR-61_Tenderizer',

    name: 'AR-61 Tenderizer',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Primary/Assault Rifle/AR-61_Tenderizer.png',
  },
  {
    id: 'BR-14_Adjudicator',

    name: 'BR-14 Adjudicator',

    type: 'Primary',

    category: 'Assault Rifle',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Primary/Assault Rifle/BR-14_Adjudicator.png',
  },
  {
    id: 'R-2124_Constitution',

    name: 'R-2124 Constitution',

    type: 'Primary',

    category: 'Marksman Rifle',

    warbond: 'Liberty Day',

    iconPath:
      './assets/NewWeapons/Primary/Marksman Rifle/R-2124_Constitution.png',
  },
  {
    id: 'R-63_Diligence',

    name: 'R-63 Diligence',

    type: 'Primary',

    category: 'Marksman Rifle',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Marksman Rifle/R-63_Diligence.png',
  },
  {
    id: 'R-63CS_Diligence_Counter_Sniper',

    name: 'R-63CS Diligence Counter Sniper',

    type: 'Primary',

    category: 'Marksman Rifle',

    warbond: 'Helldivers Mobilize',

    iconPath:
      './assets/NewWeapons/Primary/Marksman Rifle/R-63CS_Diligence_Counter_Sniper.png',
  },
  {
    id: 'PLAS-39_Accelerator_Rifle',

    name: 'PLAS-39 Accelerator Rifle',

    type: 'Primary',

    category: 'Sniper Rifle',

    warbond: 'Helldivers x Killzone',

    iconPath:
      './assets/NewWeapons/Primary/Sniper Rifle/PLAS-39_Accelerator_Rifle.png',
  },
  {
    id: 'MP-98_Knight',

    name: 'MP-98 Knight',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Super Citizen Edition',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/MP-98_Knight.png',
  },
  {
    id: 'StA-11_SMG',

    name: 'StA-11 SMG',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Helldivers x Killzone',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/StA-11_SMG.png',
  },
  {
    id: 'SMG-32_Reprimand',

    name: 'SMG-32 Reprimand',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Truth Enforcers',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/SMG-32_Reprimand.png',
  },
  {
    id: 'SMG-37_Defender',

    name: 'SMG-37 Defender',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/SMG-37_Defender.png',
  },
  {
    id: 'SMG-72_Pummeler',

    name: 'SMG-72 Pummeler',

    type: 'Primary',

    category: 'Submachine Gun',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Primary/Submachine Gun/SMG-72_Pummeler.png',
  },
  {
    id: 'SG-8_Punisher',

    name: 'SG-8 Punisher',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-8_Punisher.png',
  },
  {
    id: 'SG-8S_Slugger',

    name: 'SG-8S Slugger',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-8S_Slugger.png',
  },
  {
    id: 'SG-20_Halt',

    name: 'SG-20 Halt',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Truth Enforcers',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-20_Halt.png',
  },
  {
    id: 'SG-451_Cookout',

    name: 'SG-451 Cookout',

    type: 'Primary',

    category: 'Shotgun',

    warbond: "Freedom's Flame",

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-451_Cookout.png',
  },
  {
    id: 'SG-225_Breaker',

    name: 'SG-225 Breaker',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Shotgun/SG-225_Breaker.png',
  },
  {
    id: 'SG-225SP_Breaker_Spray_&_Pray',

    name: 'SG-225SP Breaker Spray & Pray',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Helldivers Mobilize',

    iconPath:
      './assets/NewWeapons/Primary/Shotgun/SG-225SP_Breaker_Spray_&_Pray.png',
  },
  {
    id: 'SG-225IE_Breaker_Incendiary',

    name: 'SG-225IE Breaker Incendiary',

    type: 'Primary',

    category: 'Shotgun',

    warbond: 'Steeled Veterans',

    iconPath:
      './assets/NewWeapons/Primary/Shotgun/SG-225IE_Breaker_Incendiary.png',
  },
  {
    id: 'CB-9_Exploding_Crossbow',

    name: 'CB-9 Exploding Crossbow',

    type: 'Primary',

    category: 'Explosive',

    warbond: 'Democratic Detonation',

    iconPath:
      './assets/NewWeapons/Primary/Explosive/CB-9_Exploding_Crossbow.png',
  },
  {
    id: 'R-36_Eruptor',

    name: 'R-36 Eruptor',

    type: 'Primary',

    category: 'Explosive',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Primary/Explosive/R-36_Eruptor.png',
  },
  {
    id: 'SG-8P_Punisher_Plasma',

    name: 'SG-8P Punisher Plasma',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Cutting Edge',

    iconPath:
      './assets/NewWeapons/Primary/Energy-Based/SG-8P_Punisher_Plasma.png',
  },
  {
    id: 'ARC-12_Blitzer',

    name: 'ARC-12 Blitzer',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/ARC-12_Blitzer.png',
  },
  {
    id: 'LAS-5_Scythe',

    name: 'LAS-5 Scythe',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/LAS-5_Scythe.png',
  },
  {
    id: 'LAS-16_Sickle',

    name: 'LAS-16 Sickle',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/LAS-16_Sickle.png',
  },
  {
    id: 'LAS-17_Double-Edge_Sickle',

    name: 'LAS-17 Double-Edge Sickle',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Servants of Freedom',

    iconPath:
      './assets/NewWeapons/Primary/Energy-Based/LAS-17_Double-Edge_Sickle.png',
  },
  {
    id: 'PLAS-1_Scorcher',

    name: 'PLAS-1 Scorcher',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/PLAS-1_Scorcher.png',
  },
  {
    id: 'PLAS-101_Purifier',

    name: 'PLAS-101 Purifier',

    type: 'Primary',

    category: 'Energy-Based',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Primary/Energy-Based/PLAS-101_Purifier.png',
  },
  {
    id: 'FLAM-66_Torcher',

    name: 'FLAM-66 Torcher',

    type: 'Primary',

    category: 'Special',

    warbond: "Freedom's Flame",

    iconPath: './assets/NewWeapons/Primary/Special/FLAM-66_Torcher.png',
  },
  {
    id: 'JAR-5_Dominator',

    name: 'JAR-5 Dominator',

    type: 'Primary',

    category: 'Special',

    warbond: 'Steeled Veterans',

    iconPath: './assets/NewWeapons/Primary/Special/JAR-5_Dominator.png',
  },
  {
    id: 'P-2_Peacemaker',

    name: 'P-2 Peacemaker',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Standard Issue',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-2_Peacemaker.png',
  },
  {
    id: 'P-19_Redeemer',

    name: 'P-19 Redeemer',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-19_Redeemer.png',
  },
  {
    id: 'P-113_Verdict',

    name: 'P-113 Verdict',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Polar Patriots',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-113_Verdict.png',
  },
  {
    id: 'P-4_Senator',

    name: 'P-4 Senator',

    type: 'Secondary',

    category: 'Pistol',

    warbond: 'Steeled Veterans',

    iconPath: './assets/NewWeapons/Secondary/Pistol/P-4_Senator.png',
  },
  {
    id: 'CQC-19_Stun_Lance',

    name: 'CQC-19 Stun Lance',

    type: 'Secondary',

    category: 'Melee',

    warbond: 'Urban Legends',

    iconPath: './assets/NewWeapons/Secondary/Melee/CQC-19_Stun_Lance.png',
  },
  {
    id: 'CQC-30_Stun_Baton',

    name: 'CQC-30 Stun Baton',

    type: 'Secondary',

    category: 'Melee',

    warbond: '',

    iconPath: './assets/NewWeapons/Secondary/Melee/CQC-30_Stun_Baton.png',
  },
  {
    id: 'CQC-5_Combat_Hatchet',

    name: 'CQC-5 Combat Hatchet',

    type: 'Secondary',

    category: 'Melee',

    warbond: '',

    iconPath: './assets/NewWeapons/Secondary/Melee/CQC-5_Combat_Hatchet.png',
  },
  {
    id: 'P-11_Stim_Pistol',

    name: 'P-11 Stim Pistol',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Chemical Agents',

    iconPath: './assets/NewWeapons/Secondary/Special/P-11_Stim_Pistol.png',
  },
  {
    id: 'SG-22_Bushwhacker',

    name: 'SG-22 Bushwhacker',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Viper Commandos',

    iconPath: './assets/NewWeapons/Secondary/Special/SG-22_Bushwhacker.png',
  },
  {
    id: 'P-72_Crisper',

    name: 'P-72 Crisper',

    type: 'Secondary',

    category: 'Special',

    warbond: "Freedom's Flame",

    iconPath: './assets/NewWeapons/Secondary/Special/P-72_Crisper.png',
  },
  {
    id: 'GP-31_Grenade_Pistol',

    name: 'GP-31 Grenade Pistol',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Secondary/Special/GP-31_Grenade_Pistol.png',
  },
  {
    id: 'LAS-7_Dagger',

    name: 'LAS-7 Dagger',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Secondary/Special/LAS-7_Dagger.png',
  },
  {
    id: 'GP-31_Ultimatum',

    name: 'GP-31 Ultimatum',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Servants of Freedom',

    iconPath: './assets/NewWeapons/Secondary/Special/GP-31_Ultimatum.png',
  },
  {
    id: 'PLAS-15_Loyalist',

    name: 'PLAS-15 Loyalist',

    type: 'Secondary',

    category: 'Special',

    warbond: 'Truth Enforcers',

    iconPath: './assets/NewWeapons/Secondary/Special/PLAS-15_Loyalist.png',
  },
  {
    id: 'G-6_Frag',

    name: 'G-6 Frag',

    type: 'Throwable',

    category: 'Standard',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Throwable/Standard/G-6_Frag.png',
  },
  {
    id: 'G-12_High_Explosive',

    name: 'G-12 High Explosive',

    type: 'Throwable',

    category: 'Standard',

    warbond: 'Standard Issue',

    iconPath: './assets/NewWeapons/Throwable/Standard/G-12_High_Explosive.png',
  },
  {
    id: 'G-10_Incendiary',

    name: 'G-10 Incendiary',

    type: 'Throwable',

    category: 'Standard',

    warbond: 'Steeled Veterans',

    iconPath: './assets/NewWeapons/Throwable/Standard/G-10_Incendiary.png',
  },
  {
    id: 'G-16_Impact',

    name: 'G-16 Impact',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Throwable/Special/G-16_Impact.png',
  },
  {
    id: 'G-13_Incendiary_Impact',

    name: 'G-13 Incendiary Impact',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Polar Patriots',

    iconPath:
      './assets/NewWeapons/Throwable/Special/G-13_Incendiary_Impact.png',
  },
  {
    id: 'G-23_Stun',

    name: 'G-23 Stun',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Cutting Edge',

    iconPath: './assets/NewWeapons/Throwable/Special/G-23_Stun.png',
  },
  {
    id: 'G-4_Gas',

    name: 'G-4 Gas',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Chemical Agents',

    iconPath: './assets/NewWeapons/Throwable/Special/G-4_Gas.png',
  },
  {
    id: 'G-50_Seeker',

    name: 'G-50 Seeker',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Servants of Freedom',

    iconPath: './assets/NewWeapons/Throwable/Special/G-50_Seeker.png',
  },
  {
    id: 'G-3_Smoke',

    name: 'G-3 Smoke',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Helldivers Mobilize',

    iconPath: './assets/NewWeapons/Throwable/Special/G-3_Smoke.png',
  },
  {
    id: 'G-123_Thermite',

    name: 'G-123 Thermite',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Democratic Detonation',

    iconPath: './assets/NewWeapons/Throwable/Special/G-123_Thermite.png',
  },
  {
    id: 'K-2_Throwing_Knife',

    name: 'K-2 Throwing Knife',

    type: 'Throwable',

    category: 'Special',

    warbond: 'Viper Commandos',

    iconPath: './assets/NewWeapons/Throwable/Special/K-2_Throwing_Knife.png',
  },
];

export const weaponsByCategory: { [category: string]: Weapon[] } = {
  'Energy-Based': allWeapons.filter(
    (weapon) => weapon.category === 'Energy-Based'
  ),
  Shotgun: allWeapons.filter((weapon) => weapon.category === 'Shotgun'),
  Pistol: allWeapons.filter((weapon) => weapon.category === 'Pistol'),
  Melee: allWeapons.filter((weapon) => weapon.category === 'Melee'),
  Standard: allWeapons.filter((weapon) => weapon.category === 'Standard'),
  Explosive: allWeapons.filter((weapon) => weapon.category === 'Explosive'),
  'Sniper Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Sniper Rifle'
  ),
  'Assault Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Assault Rifle'
  ),
  'Submachine Gun': allWeapons.filter(
    (weapon) => weapon.category === 'Submachine Gun'
  ),
  'Marksman Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Marksman Rifle'
  ),
  Special: allWeapons.filter((weapon) => weapon.category === 'Special'),
};

export const weaponsByType: { [type: string]: Weapon[] } = {
  Primary: allWeapons.filter((weapon) => weapon.type === 'Primary'),
  Secondary: allWeapons.filter((weapon) => weapon.type === 'Secondary'),
  Throwable: allWeapons.filter((weapon) => weapon.type === 'Throwable'),
};

export const weaponsByWarbond: { [warbond: string]: Weapon[] } = {
  '': allWeapons.filter((weapon) => weapon.warbond === ''),
  'Liberty Day': allWeapons.filter(
    (weapon) => weapon.warbond === 'Liberty Day'
  ),
  'Servants of Freedom': allWeapons.filter(
    (weapon) => weapon.warbond === 'Servants of Freedom'
  ),
  "Freedom's Flame": allWeapons.filter(
    (weapon) => weapon.warbond === "Freedom's Flame"
  ),
  'Cutting Edge': allWeapons.filter(
    (weapon) => weapon.warbond === 'Cutting Edge'
  ),
  'Helldivers x Killzone': allWeapons.filter(
    (weapon) => weapon.warbond === 'Helldivers x Killzone'
  ),
  'Standard Issue': allWeapons.filter(
    (weapon) => weapon.warbond === 'Standard Issue'
  ),
  'Super Citizen Edition': allWeapons.filter(
    (weapon) => weapon.warbond === 'Super Citizen Edition'
  ),
  'Urban Legends': allWeapons.filter(
    (weapon) => weapon.warbond === 'Urban Legends'
  ),
  'Truth Enforcers': allWeapons.filter(
    (weapon) => weapon.warbond === 'Truth Enforcers'
  ),
  'Polar Patriots': allWeapons.filter(
    (weapon) => weapon.warbond === 'Polar Patriots'
  ),
  'Viper Commandos': allWeapons.filter(
    (weapon) => weapon.warbond === 'Viper Commandos'
  ),
  'Chemical Agents': allWeapons.filter(
    (weapon) => weapon.warbond === 'Chemical Agents'
  ),
  'Steeled Veterans': allWeapons.filter(
    (weapon) => weapon.warbond === 'Steeled Veterans'
  ),
  'Helldivers Mobilize': allWeapons.filter(
    (weapon) => weapon.warbond === 'Helldivers Mobilize'
  ),
  'Democratic Detonation': allWeapons.filter(
    (weapon) => weapon.warbond === 'Democratic Detonation'
  ),
};
