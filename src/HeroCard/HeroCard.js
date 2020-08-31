import React from 'react';
import './HeroCard.css'

function HeroCard ({ hero }) {
  return (
    <div className="card">
      <img src={hero.image.url} alt='' />
      <h2>{hero.name}</h2>
    </div>
  );
}

export default HeroCard;