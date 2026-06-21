// src/components/Results.jsx

import { heroes } from '../data/heroes';

function Results({ result }) {
  if (!result) {
    return (
      <div className="results-placeholder">
        <h3>Counter Strategy</h3>
        <p>Fill out the form on the left to generate a counter strategy.</p>
      </div>
    );
  }

  const { counterScenario, leadHeroes, joiningHeroes, troopRatio, estimatedCounterStrength } = result;

  const getHeroNames = (ids) => {
      return ids.map(id => {
          const hero = heroes.find(h => h.id === id);
          return hero ? hero.name : 'Unknown Hero';
      }).join(', ');
  };

  return (
    <div className="results-container">
      <h2>Recommended Counter Strategy</h2>
      
      <div className="result-section">
        <h3>Action:</h3>
        <p className="highlight">{counterScenario}</p>
      </div>

      <div className="result-section">
        <h3>Counter Lead Heroes:</h3>
        <p>{getHeroNames(leadHeroes)}</p>
      </div>

      <div className="result-section">
        <h3>Counter Joining Heroes:</h3>
        <p>{getHeroNames(joiningHeroes)}</p>
      </div>

      <div className="result-section">
        <h3>Recommended Troop Ratio (Inf/Cav/Arch):</h3>
        <p className="highlight">{troopRatio.label}</p>
      </div>

      <div className="result-section">
        <h3>Estimated Counter Strength:</h3>
        <p>{estimatedCounterStrength}</p>
      </div>
    </div>
  );
}

export default Results;
