import React from 'react';
import './HeroBasicCard.css'
import { Link } from "react-router-dom";


function HeroBasicCard ({ hero }) {
  return (
    <Link to={`/hero/${hero.id}`}>
      <div className="card">
        <img className="basicCardImg" src={hero.image.url} alt='' />
        <h2 className="basicHeroName">{hero.name}</h2>
      </div>
    </Link>
  );
}

export default HeroBasicCard;