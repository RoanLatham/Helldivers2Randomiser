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
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-23_Liberator.png',
  },
  {
    id: 'AR-23P_Liberator_Penetrator',
    name: 'AR-23P Liberator Penetrator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23P_Liberator_Penetrator.png',
  },
  {
    id: 'AR-23C_Liberator_Concussive',
    name: 'AR-23C Liberator Concussive',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23C_Liberator_Concussive.png',
  },
  {
    id: 'StA-52_Assault_Rifle',
    name: 'StA-52 Assault Rifle',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/StA-52_Assault_Rifle.png',
  },
  {
    id: 'AR-23A_Liberator_Carbine',
    name: 'AR-23A Liberator Carbine',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Viper_Commandos',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23A_Liberator_Carbine.png',
  },
  {
    id: 'AR-61_Tenderizer',
    name: 'AR-61 Tenderizer',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-61_Tenderizer.png',
  },
  {
    id: 'BR-14_Adjudicator',
    name: 'BR-14 Adjudicator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/BR-14_Adjudicator.png',
  },
  {
    id: 'R-2124_Constitution',
    name: 'R-2124 Constitution',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Liberty_Day',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-2124_Constitution.png',
  },
  {
    id: 'R-6_Deadeye',
    name: 'R-6 Deadeye',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-6_Deadeye.png',
  },
  {
    id: 'R-63_Diligence',
    name: 'R-63 Diligence',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-63_Diligence.png',
  },
  {
    id: 'R-63CS_Diligence_Counter_Sniper',
    name: 'R-63CS Diligence Counter Sniper',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-63CS_Diligence_Counter_Sniper.png',
  },
  {
    id: 'PLAS-39_Accelerator_Rifle',
    name: 'PLAS-39 Accelerator Rifle',
    type: 'Primary',
    category: 'Sniper Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Sniper%20Rifle/PLAS-39_Accelerator_Rifle.png',
  },
  {
    id: 'MP-98_Knight',
    name: 'MP-98 Knight',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Super_Citizen_Edition',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/MP-98_Knight.png',
  },
  {
    id: 'StA-11_SMG',
    name: 'StA-11 SMG',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_x_Killzone',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/StA-11_SMG.png',
  },
  {
    id: 'SMG-32_Reprimand',
    name: 'SMG-32 Reprimand',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-32_Reprimand.png',
  },
  {
    id: 'SMG-37_Defender',
    name: 'SMG-37 Defender',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-37_Defender.png',
  },
  {
    id: 'SMG-72_Pummeler',
    name: 'SMG-72 Pummeler',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-72_Pummeler.png',
  },
  {
    id: 'SG-8_Punisher',
    name: 'SG-8 Punisher',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8_Punisher.png',
  },
  {
    id: 'SG-8S_Slugger',
    name: 'SG-8S Slugger',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8S_Slugger.png',
  },
  {
    id: 'SG-20_Halt',
    name: 'SG-20 Halt',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-20_Halt.png',
  },
  {
    id: 'SG-451_Cookout',
    name: 'SG-451 Cookout',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-451_Cookout.png',
  },
  {
    id: 'SG-225_Breaker',
    name: 'SG-225 Breaker',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-225_Breaker.png',
  },
  {
    id: 'SG-225SP_Breaker_Spray_&_Pray',
    name: 'SG-225SP Breaker Spray & Pray',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225SP_Breaker_Spray_&_Pray.png',
  },
  {
    id: 'SG-225IE_Breaker_Incendiary',
    name: 'SG-225IE Breaker Incendiary',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225IE_Breaker_Incendiary.png',
  },
  {
    id: 'CB-9_Exploding_Crossbow',
    name: 'CB-9 Exploding Crossbow',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/CB-9_Exploding_Crossbow.png',
  },
  {
    id: 'R-36_Eruptor',
    name: 'R-36 Eruptor',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/R-36_Eruptor.png',
  },
  {
    id: 'SG-8P_Punisher_Plasma',
    name: 'SG-8P Punisher Plasma',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/SG-8P_Punisher_Plasma.png',
  },
  {
    id: 'ARC-12_Blitzer',
    name: 'ARC-12 Blitzer',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/ARC-12_Blitzer.png',
  },
  {
    id: 'LAS-5_Scythe',
    name: 'LAS-5 Scythe',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-5_Scythe.png',
  },
  {
    id: 'LAS-16_Sickle',
    name: 'LAS-16 Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-16_Sickle.png',
  },
  {
    id: 'LAS-17_Double-Edge_Sickle',
    name: 'LAS-17 Double-Edge Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Servants_of_Freedom',
    iconPath:
      './assets/Weapons/Primary/Energy-Based/LAS-17_Double-Edge_Sickle.png',
  },
  {
    id: 'PLAS-1_Scorcher',
    name: 'PLAS-1 Scorcher',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-1_Scorcher.png',
  },
  {
    id: 'PLAS-101_Purifier',
    name: 'PLAS-101 Purifier',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-101_Purifier.png',
  },
  {
    id: 'FLAM-66_Torcher',
    name: 'FLAM-66 Torcher',
    type: 'Primary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Special/FLAM-66_Torcher.png',
  },
  {
    id: 'JAR-5_Dominator',
    name: 'JAR-5 Dominator',
    type: 'Primary',
    category: 'Special',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Primary/Special/JAR-5_Dominator.png',
  },
];

export const secondaryWeapons: Weapon[] = [
  {
    id: 'P-2_Peacemaker',
    name: 'P-2 Peacemaker',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Secondary/Pistol/P-2_Peacemaker.png',
  },
  {
    id: 'P-19_Redeemer',
    name: 'P-19 Redeemer',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Secondary/Pistol/P-19_Redeemer.png',
  },
  {
    id: 'P-113_Verdict',
    name: 'P-113 Verdict',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Secondary/Pistol/P-113_Verdict.png',
  },
  {
    id: 'P-4_Senator',
    name: 'P-4 Senator',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Secondary/Pistol/P-4_Senator.png',
  },
  {
    id: 'CQC-19_Stun_Lance',
    name: 'CQC-19 Stun Lance',
    type: 'Secondary',
    category: 'Melee',
    warbond: 'Urban_Legends',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-19_Stun_Lance.png',
  },
  {
    id: 'CQC-30_Stun_Baton',
    name: 'CQC-30 Stun Baton',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-30_Stun_Baton.png',
  },
  {
    id: 'CQC-5_Combat_Hatchet',
    name: 'CQC-5 Combat Hatchet',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-5_Combat_Hatchet.png',
  },
  {
    id: 'P-11_Stim_Pistol',
    name: 'P-11 Stim Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Secondary/Special/P-11_Stim_Pistol.png',
  },
  {
    id: 'SG-22_Bushwhacker',
    name: 'SG-22 Bushwhacker',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Secondary/Special/SG-22_Bushwhacker.png',
  },
  {
    id: 'P-72_Crisper',
    name: 'P-72 Crisper',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Secondary/Special/P-72_Crisper.png',
  },
  {
    id: 'GP-31_Grenade_Pistol',
    name: 'GP-31 Grenade Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Grenade_Pistol.png',
  },
  {
    id: 'LAS-7_Dagger',
    name: 'LAS-7 Dagger',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Secondary/Special/LAS-7_Dagger.png',
  },
  {
    id: 'GP-31_Ultimatum',
    name: 'GP-31 Ultimatum',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Ultimatum.png',
  },
  {
    id: 'PLAS-15_Loyalist',
    name: 'PLAS-15 Loyalist',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Secondary/Special/PLAS-15_Loyalist.png',
  },
  {
    id: 'Las-58_Talon',
    name: 'Las-58 Talon',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Secondary/Special/Las-58_Talon.png',
  },
];

export const throwableWeapons: Weapon[] = [
  {
    id: 'G-6_Frag',
    name: 'G-6 Frag',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Standard/G-6_Frag.png',
  },
  {
    id: 'G-12_High_Explosive',
    name: 'G-12 High Explosive',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Throwable/Standard/G-12_High_Explosive.png',
  },
  {
    id: 'G-10_Incendiary',
    name: 'G-10 Incendiary',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Throwable/Standard/G-10_Incendiary.png',
  },
  {
    id: 'G-16_Impact',
    name: 'G-16 Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-16_Impact.png',
  },
  {
    id: 'G-13_Incendiary_Impact',
    name: 'G-13 Incendiary Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Throwable/Special/G-13_Incendiary_Impact.png',
  },
  {
    id: 'G-23_Stun',
    name: 'G-23 Stun',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Throwable/Special/G-23_Stun.png',
  },
  {
    id: 'G-4_Gas',
    name: 'G-4 Gas',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Throwable/Special/G-4_Gas.png',
  },
  {
    id: 'G-50_Seeker',
    name: 'G-50 Seeker',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Throwable/Special/G-50_Seeker.png',
  },
  {
    id: 'G-3_Smoke',
    name: 'G-3 Smoke',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-3_Smoke.png',
  },
  {
    id: 'G-123_Thermite',
    name: 'G-123 Thermite',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Throwable/Special/G-123_Thermite.png',
  },
  {
    id: 'K-2_Throwing_Knife',
    name: 'K-2 Throwing Knife',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Throwable/Special/K-2_Throwing_Knife.png',
  },
];

export const allWeapons: Weapon[] = [
  {
    id: 'AR-23_Liberator',
    name: 'AR-23 Liberator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-23_Liberator.png',
  },
  {
    id: 'AR-23P_Liberator_Penetrator',
    name: 'AR-23P Liberator Penetrator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23P_Liberator_Penetrator.png',
  },
  {
    id: 'AR-23C_Liberator_Concussive',
    name: 'AR-23C Liberator Concussive',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23C_Liberator_Concussive.png',
  },
  {
    id: 'StA-52_Assault_Rifle',
    name: 'StA-52 Assault Rifle',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/StA-52_Assault_Rifle.png',
  },
  {
    id: 'AR-23A_Liberator_Carbine',
    name: 'AR-23A Liberator Carbine',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Viper_Commandos',
    iconPath:
      './assets/Weapons/Primary/Assault%20Rifle/AR-23A_Liberator_Carbine.png',
  },
  {
    id: 'AR-61_Tenderizer',
    name: 'AR-61 Tenderizer',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/AR-61_Tenderizer.png',
  },
  {
    id: 'BR-14_Adjudicator',
    name: 'BR-14 Adjudicator',
    type: 'Primary',
    category: 'Assault Rifle',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Assault%20Rifle/BR-14_Adjudicator.png',
  },
  {
    id: 'R-2124_Constitution',
    name: 'R-2124 Constitution',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Liberty_Day',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-2124_Constitution.png',
  },
  {
    id: 'R-6_Deadeye',
    name: 'R-6 Deadeye',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-6_Deadeye.png',
  },
  {
    id: 'R-63_Diligence',
    name: 'R-63 Diligence',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Marksman%20Rifle/R-63_Diligence.png',
  },
  {
    id: 'R-63CS_Diligence_Counter_Sniper',
    name: 'R-63CS Diligence Counter Sniper',
    type: 'Primary',
    category: 'Marksman Rifle',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Marksman%20Rifle/R-63CS_Diligence_Counter_Sniper.png',
  },
  {
    id: 'PLAS-39_Accelerator_Rifle',
    name: 'PLAS-39 Accelerator Rifle',
    type: 'Primary',
    category: 'Sniper Rifle',
    warbond: 'Helldivers_x_Killzone',
    iconPath:
      './assets/Weapons/Primary/Sniper%20Rifle/PLAS-39_Accelerator_Rifle.png',
  },
  {
    id: 'MP-98_Knight',
    name: 'MP-98 Knight',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Super_Citizen_Edition',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/MP-98_Knight.png',
  },
  {
    id: 'StA-11_SMG',
    name: 'StA-11 SMG',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_x_Killzone',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/StA-11_SMG.png',
  },
  {
    id: 'SMG-32_Reprimand',
    name: 'SMG-32 Reprimand',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-32_Reprimand.png',
  },
  {
    id: 'SMG-37_Defender',
    name: 'SMG-37 Defender',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-37_Defender.png',
  },
  {
    id: 'SMG-72_Pummeler',
    name: 'SMG-72 Pummeler',
    type: 'Primary',
    category: 'Submachine Gun',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Submachine%20Gun/SMG-72_Pummeler.png',
  },
  {
    id: 'SG-8_Punisher',
    name: 'SG-8 Punisher',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8_Punisher.png',
  },
  {
    id: 'SG-8S_Slugger',
    name: 'SG-8S Slugger',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-8S_Slugger.png',
  },
  {
    id: 'SG-20_Halt',
    name: 'SG-20 Halt',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-20_Halt.png',
  },
  {
    id: 'SG-451_Cookout',
    name: 'SG-451 Cookout',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-451_Cookout.png',
  },
  {
    id: 'SG-225_Breaker',
    name: 'SG-225 Breaker',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Shotgun/SG-225_Breaker.png',
  },
  {
    id: 'SG-225SP_Breaker_Spray_&_Pray',
    name: 'SG-225SP Breaker Spray & Pray',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Helldivers_Mobilize',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225SP_Breaker_Spray_&_Pray.png',
  },
  {
    id: 'SG-225IE_Breaker_Incendiary',
    name: 'SG-225IE Breaker Incendiary',
    type: 'Primary',
    category: 'Shotgun',
    warbond: 'Steeled_Veterans',
    iconPath:
      './assets/Weapons/Primary/Shotgun/SG-225IE_Breaker_Incendiary.png',
  },
  {
    id: 'CB-9_Exploding_Crossbow',
    name: 'CB-9 Exploding Crossbow',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/CB-9_Exploding_Crossbow.png',
  },
  {
    id: 'R-36_Eruptor',
    name: 'R-36 Eruptor',
    type: 'Primary',
    category: 'Explosive',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Primary/Explosive/R-36_Eruptor.png',
  },
  {
    id: 'SG-8P_Punisher_Plasma',
    name: 'SG-8P Punisher Plasma',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/SG-8P_Punisher_Plasma.png',
  },
  {
    id: 'ARC-12_Blitzer',
    name: 'ARC-12 Blitzer',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/ARC-12_Blitzer.png',
  },
  {
    id: 'LAS-5_Scythe',
    name: 'LAS-5 Scythe',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-5_Scythe.png',
  },
  {
    id: 'LAS-16_Sickle',
    name: 'LAS-16 Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Primary/Energy-Based/LAS-16_Sickle.png',
  },
  {
    id: 'LAS-17_Double-Edge_Sickle',
    name: 'LAS-17 Double-Edge Sickle',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Servants_of_Freedom',
    iconPath:
      './assets/Weapons/Primary/Energy-Based/LAS-17_Double-Edge_Sickle.png',
  },
  {
    id: 'PLAS-1_Scorcher',
    name: 'PLAS-1 Scorcher',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-1_Scorcher.png',
  },
  {
    id: 'PLAS-101_Purifier',
    name: 'PLAS-101 Purifier',
    type: 'Primary',
    category: 'Energy-Based',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Primary/Energy-Based/PLAS-101_Purifier.png',
  },
  {
    id: 'FLAM-66_Torcher',
    name: 'FLAM-66 Torcher',
    type: 'Primary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Primary/Special/FLAM-66_Torcher.png',
  },
  {
    id: 'JAR-5_Dominator',
    name: 'JAR-5 Dominator',
    type: 'Primary',
    category: 'Special',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Primary/Special/JAR-5_Dominator.png',
  },
  {
    id: 'P-2_Peacemaker',
    name: 'P-2 Peacemaker',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Secondary/Pistol/P-2_Peacemaker.png',
  },
  {
    id: 'P-19_Redeemer',
    name: 'P-19 Redeemer',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Secondary/Pistol/P-19_Redeemer.png',
  },
  {
    id: 'P-113_Verdict',
    name: 'P-113 Verdict',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Secondary/Pistol/P-113_Verdict.png',
  },
  {
    id: 'P-4_Senator',
    name: 'P-4 Senator',
    type: 'Secondary',
    category: 'Pistol',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Secondary/Pistol/P-4_Senator.png',
  },
  {
    id: 'CQC-19_Stun_Lance',
    name: 'CQC-19 Stun Lance',
    type: 'Secondary',
    category: 'Melee',
    warbond: 'Urban_Legends',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-19_Stun_Lance.png',
  },
  {
    id: 'CQC-30_Stun_Baton',
    name: 'CQC-30 Stun Baton',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-30_Stun_Baton.png',
  },
  {
    id: 'CQC-5_Combat_Hatchet',
    name: 'CQC-5 Combat Hatchet',
    type: 'Secondary',
    category: 'Melee',
    warbond: '',
    iconPath: './assets/Weapons/Secondary/Melee/CQC-5_Combat_Hatchet.png',
  },
  {
    id: 'P-11_Stim_Pistol',
    name: 'P-11 Stim Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Secondary/Special/P-11_Stim_Pistol.png',
  },
  {
    id: 'SG-22_Bushwhacker',
    name: 'SG-22 Bushwhacker',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Secondary/Special/SG-22_Bushwhacker.png',
  },
  {
    id: 'P-72_Crisper',
    name: 'P-72 Crisper',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Freedoms_Flame',
    iconPath: './assets/Weapons/Secondary/Special/P-72_Crisper.png',
  },
  {
    id: 'GP-31_Grenade_Pistol',
    name: 'GP-31 Grenade Pistol',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Grenade_Pistol.png',
  },
  {
    id: 'LAS-7_Dagger',
    name: 'LAS-7 Dagger',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Secondary/Special/LAS-7_Dagger.png',
  },
  {
    id: 'GP-31_Ultimatum',
    name: 'GP-31 Ultimatum',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Secondary/Special/GP-31_Ultimatum.png',
  },
  {
    id: 'PLAS-15_Loyalist',
    name: 'PLAS-15 Loyalist',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Truth_Enforcers',
    iconPath: './assets/Weapons/Secondary/Special/PLAS-15_Loyalist.png',
  },
  {
    id: 'Las-58_Talon',
    name: 'Las-58 Talon',
    type: 'Secondary',
    category: 'Special',
    warbond: 'Borderline_Justice',
    iconPath: './assets/Weapons/Secondary/Special/Las-58_Talon.png',
  },
  {
    id: 'G-6_Frag',
    name: 'G-6 Frag',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Standard/G-6_Frag.png',
  },
  {
    id: 'G-12_High_Explosive',
    name: 'G-12 High Explosive',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Standard_Issue',
    iconPath: './assets/Weapons/Throwable/Standard/G-12_High_Explosive.png',
  },
  {
    id: 'G-10_Incendiary',
    name: 'G-10 Incendiary',
    type: 'Throwable',
    category: 'Standard',
    warbond: 'Steeled_Veterans',
    iconPath: './assets/Weapons/Throwable/Standard/G-10_Incendiary.png',
  },
  {
    id: 'G-16_Impact',
    name: 'G-16 Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-16_Impact.png',
  },
  {
    id: 'G-13_Incendiary_Impact',
    name: 'G-13 Incendiary Impact',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Polar_Patriots',
    iconPath: './assets/Weapons/Throwable/Special/G-13_Incendiary_Impact.png',
  },
  {
    id: 'G-23_Stun',
    name: 'G-23 Stun',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Cutting_Edge',
    iconPath: './assets/Weapons/Throwable/Special/G-23_Stun.png',
  },
  {
    id: 'G-4_Gas',
    name: 'G-4 Gas',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Chemical_Agents',
    iconPath: './assets/Weapons/Throwable/Special/G-4_Gas.png',
  },
  {
    id: 'G-50_Seeker',
    name: 'G-50 Seeker',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Servants_of_Freedom',
    iconPath: './assets/Weapons/Throwable/Special/G-50_Seeker.png',
  },
  {
    id: 'G-3_Smoke',
    name: 'G-3 Smoke',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Helldivers_Mobilize',
    iconPath: './assets/Weapons/Throwable/Special/G-3_Smoke.png',
  },
  {
    id: 'G-123_Thermite',
    name: 'G-123 Thermite',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Democratic_Detonation',
    iconPath: './assets/Weapons/Throwable/Special/G-123_Thermite.png',
  },
  {
    id: 'K-2_Throwing_Knife',
    name: 'K-2 Throwing Knife',
    type: 'Throwable',
    category: 'Special',
    warbond: 'Viper_Commandos',
    iconPath: './assets/Weapons/Throwable/Special/K-2_Throwing_Knife.png',
  },
];

export const weaponsByCategory: { [category: string]: Weapon[] } = {
  Pistol: allWeapons.filter((weapon) => weapon.category === 'Pistol'),
  'Sniper Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Sniper Rifle'
  ),
  Explosive: allWeapons.filter((weapon) => weapon.category === 'Explosive'),
  Special: allWeapons.filter((weapon) => weapon.category === 'Special'),
  'Submachine Gun': allWeapons.filter(
    (weapon) => weapon.category === 'Submachine Gun'
  ),
  'Energy-Based': allWeapons.filter(
    (weapon) => weapon.category === 'Energy-Based'
  ),
  Shotgun: allWeapons.filter((weapon) => weapon.category === 'Shotgun'),
  'Assault Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Assault Rifle'
  ),
  Melee: allWeapons.filter((weapon) => weapon.category === 'Melee'),
  Standard: allWeapons.filter((weapon) => weapon.category === 'Standard'),
  'Marksman Rifle': allWeapons.filter(
    (weapon) => weapon.category === 'Marksman Rifle'
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
};
