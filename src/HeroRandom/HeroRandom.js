import React, { useState, useEffect } from 'react';
import HeroCard from '../HeroCard/HeroCard'
import { getHero, amountOfHeroesInBase } from '../Requests'

function HeroRandom() {

  const [ heroes, setHero ] = useState([]);
  const getRandomHeroId = () => Math.floor(Math.random() * (amountOfHeroesInBase - 1)) + 1;

  // const heroList = [70, 644, 620];
  const heroList = [];
  const RANDOM_HEROES = 6;

  for (let i=0; i<RANDOM_HEROES; i++) {
    heroList.push(getRandomHeroId());
  }

  useEffect(() => {
    heroList.map( curr => getHero(curr)
      .then(resp => setHero(prevState => [...prevState, resp.data] ))
    )
  }, []);


  return (
    <div className="container">
      {console.log(heroes)}
      {heroes.map(hero =>  <HeroCard key={hero.id} hero={hero} />  )}
    </div>
  );
}

export default HeroRandom;