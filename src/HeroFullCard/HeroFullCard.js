import React from 'react';
import './HeroFullCard.css'

function HeroFullCard ({ hero }) {
  return (
    <div className="container heroFullCard">
      <img className="heroFullCardImg" src={hero.image.url} alt='' />
      <div className="heroFullCardDesc">
        <h1>{hero.name}</h1>
        <h2>[ {hero.biography["full-name"]} ]</h2>
        <h3>Powerstats:</h3>
          <p>Intelligence: <span>{hero.powerstats.intelligence}</span></p>
          <p>Strength: <span>{hero.powerstats.strength}</span></p>
          <p>Speed: <span>{hero.powerstats.speed}</span></p>
          <p>Durability: <span>{hero.powerstats.durability}</span></p>
          <p>Power: <span>{hero.powerstats.power}</span></p>
          <p>Combat: <span>{hero.powerstats.combat}</span></p>
      </div>
    </div>
  );
}

export default HeroFullCard;