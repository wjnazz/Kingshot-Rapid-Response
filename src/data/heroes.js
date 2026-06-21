// src/data/heroes.js

// This file contains the mock data for heroes in Kingshot.
// You can later expand this with specific skills, stats, and counter rules.

export const heroes = [
  {
    id: "h1",
    name: "Arthur",
    type: "lead", // 'lead' or 'joining'
    skills: ["Shield Wall", "Command"],
    // Add more attributes as needed for calculation later
    baseStrength: 100
  },
  {
    id: "h2",
    name: "Lancelot",
    type: "lead",
    skills: ["Charge", "Bravery"],
    baseStrength: 110
  },
  {
    id: "h3",
    name: "Merlin",
    type: "lead",
    skills: ["Magic Missile", "Wisdom"],
    baseStrength: 95
  },
  {
    id: "h4",
    name: "Guinevere",
    type: "joining",
    skills: ["Healing", "Inspire"],
    baseStrength: 80
  },
  {
    id: "h5",
    name: "Gawain",
    type: "joining",
    skills: ["Sun Strength", "Strike"],
    baseStrength: 105
  },
  {
    id: "h6",
    name: "Percival",
    type: "joining",
    skills: ["Quest", "Purity"],
    baseStrength: 90
  },
  {
    id: "h7",
    name: "Robin",
    type: "joining",
    skills: ["Archery", "Stealth"],
    baseStrength: 85
  },
  {
    id: "h8",
    name: "Joan",
    type: "joining",
    skills: ["Rally", "Faith"],
    baseStrength: 100
  }
];

// Common troop ratios used in the game (Infantry / Cavalry / Archers)
export const troopRatios = [
  { id: "r1", label: "50/20/30", inf: 50, cav: 20, arch: 30 },
  { id: "r2", label: "50/30/20", inf: 50, cav: 30, arch: 20 },
  { id: "r3", label: "60/40/0", inf: 60, cav: 40, arch: 0 },
  { id: "r4", label: "40/20/40", inf: 40, cav: 20, arch: 40 }
];
