// src/utils/calculator.js

import { heroes, troopRatios } from '../data/heroes';

/**
 * Calculates a counter build based on the user's input build.
 *
 * @param {Object} inputBuild
 * @param {string} inputBuild.scenario - "Garrison" or "Attacking"
 * @param {string[]} inputBuild.leadHeroes - Array of selected lead hero IDs
 * @param {string[]} inputBuild.joiningHeroes - Array of selected joining hero IDs
 * @param {Object} inputBuild.troopRatio - Selected troop ratio object { inf, cav, arch }
 *
 * @returns {Object} The recommended counter build
 */
export function calculateCounter(inputBuild) {
  // --------------------------------------------------------------------------
  // PLACEHOLDER LOGIC:
  // This is a very basic placeholder algorithm. It currently just finds
  // available heroes that weren't selected, and picks a simple opposing ratio.
  // You will replace this with your actual game logic and hero counter rules!
  // --------------------------------------------------------------------------

  const { scenario, leadHeroes, joiningHeroes, troopRatio } = inputBuild;

  if (!scenario || leadHeroes.length === 0 || joiningHeroes.length === 0 || !troopRatio) {
    return null; // Not enough data to calculate yet
  }

  // 1. Calculate a simple "strength score" (Mock logic)
  let totalStrength = 0;

  const allSelectedHeroIds = [...leadHeroes, ...joiningHeroes];
  const selectedHeroesData = heroes.filter(h => allSelectedHeroIds.includes(h.id));

  selectedHeroesData.forEach(h => {
      totalStrength += h.baseStrength;
  });

  // Example: Garrison gets a defensive bonus in strength calculation
  if (scenario === 'Garrison') {
      totalStrength *= 1.1;
  }

  // 2. Determine Counter Build (Mock logic)

  // Pick a lead hero counter (just picking the first available lead that isn't the input lead)
  const availableLeadHeroes = heroes.filter(h => h.type === 'lead' && !leadHeroes.includes(h.id));
  const counterLeadHeroes = availableLeadHeroes.slice(0, 3).map(h => h.id);

  // Pick joining hero counters (picking available joiners that aren't the input joiners)
  const availableJoiningHeroes = heroes.filter(h => h.type === 'joining' && !joiningHeroes.includes(h.id));
  const counterJoiningHeroes = availableJoiningHeroes.slice(0, 4).map(h => h.id);

  // Pick a counter troop ratio based on a simple rock-paper-scissors mock rule
  // E.g., if they have high infantry (>50), counter with high cavalry/archers
  let counterRatioId = troopRatios[0].id; // default

  if (troopRatio.inf >= 50) {
      // If high inf, counter with something that has high archers
      counterRatioId = troopRatios.find(r => r.label === "40/20/40")?.id || troopRatios[0].id;
  } else if (troopRatio.cav >= 40) {
       // If high cav, counter with something high inf
       counterRatioId = troopRatios.find(r => r.label === "60/40/0")?.id || troopRatios[0].id;
  } else {
       // else use standard balanced
       counterRatioId = troopRatios.find(r => r.label === "50/30/20")?.id || troopRatios[0].id;
  }

  const counterRatio = troopRatios.find(r => r.id === counterRatioId);

  return {
    counterScenario: scenario === 'Garrison' ? 'Attacking' : 'Garrison',
    leadHeroes: counterLeadHeroes,
    joiningHeroes: counterJoiningHeroes,
    troopRatio: counterRatio,
    estimatedCounterStrength: Math.round(totalStrength * 1.05) // Mock: Counter is 5% stronger
  };
}
