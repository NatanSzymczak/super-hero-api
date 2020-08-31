import React from 'react';
import './BoxHero.css'

function BoxHero ({ hero }) {
  return (
    <div className="box">
      <img src={hero.image.url} alt='Superhero look' />
      <div>
        <h1>{hero.name}</h1>
        <h2>Full name: {hero.biography["full-name"]}</h2>
        <h2>Alignment: {hero.biography.alignment}</h2>
        <h2>Group affiliation: {hero.connections["group-affiliation"]}</h2>
        <h2>Publisher: {hero.biography.publisher}</h2>
      </div>
    </div>
  );
}

export default BoxHero;