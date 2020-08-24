import React, { useEffect, useState } from 'react';
import './App.css';
import { getHero, amountOfHeroesInBase } from './Requests'
import BoxHero from './BoxHero/BoxHero';

function App() {
  const [ heroRight,  setHeroRight ]  = useState({});
  const [ heroCenter, setHeroCenter ] = useState({});
  const [ heroLeft,   setHeroLeft ]   = useState({});

  const getRandomHeroId = () => Math.floor(Math.random() * (amountOfHeroesInBase - 1)) + 1;

  useEffect(() => {
    getHero(getRandomHeroId()).then( resp => setHeroRight(resp.data));
    getHero(getRandomHeroId()).then( resp => setHeroCenter(resp.data));
    getHero(getRandomHeroId()).then( resp => setHeroLeft(resp.data));
  }, []);

  return (
    <>
      <BoxHero heroRight={heroRight} heroCenter={heroCenter} heroLeft={heroLeft} />
    </>
  );
}

export default App;
