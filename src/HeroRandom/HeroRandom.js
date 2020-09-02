import React, { useEffect, useState } from 'react';
import HeroBasicCard from '../HeroBasicCard/HeroBasicCard'
import { getHero, amountOfHeroesInBase } from '../Requests'
import Loader from '../Loader/Loader';
import './HeroRandom.css';

const RANDOM_HEROES = 3;

function HeroRandom( { heroes, setHero } ) {
  const getRandomHeroId = () => Math.floor(Math.random() * (amountOfHeroesInBase - 1)) + 1;
  const [ isLoading, setLoadingState ] = useState(true);
  const heroList = [];

  for (let i=0; i<RANDOM_HEROES; i++) {
    heroList.push(getRandomHeroId());
  }

  useEffect(() => {
    setLoadingState(true);
    heroList.map( curr => getHero(curr)
      .then(resp => setHero(prevState => [...prevState, resp.data] ))
    )
    setLoadingState(false);
  }, []);


  return (
    <>
      { !isLoading &&
        (<div className="container randomHeroes">
          {console.log(heroes)}
          {heroes.map(hero =>  <HeroBasicCard key={hero.id} hero={hero} /> )}
        </div>)
        }
      { isLoading && <Loader /> }
    </>
  );
}

export default HeroRandom;