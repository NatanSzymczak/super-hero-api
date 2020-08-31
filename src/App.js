import React, { useEffect, useState } from 'react';
import './App.css';
import { getHero, amountOfHeroesInBase } from './Requests'
// import Input from './Input/Input';
import HeroCard from './HeroCard/HeroCard';
import Navigation from './Navigation/Navigation';

function App() {
  const [ heroes, setHero ] = useState([]);
  const getRandomHeroId = () => Math.floor(Math.random() * (amountOfHeroesInBase - 1)) + 1;

  // const heroList = [70, 644, 620];
  const heroList = [];

  for (let i=0; i<3; i++) {
    heroList.push(getRandomHeroId());
  }

  useEffect(() => {
    heroList.map( curr => getHero(curr)
      .then(resp => setHero(prevState => [...prevState, resp.data] ))
    )
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        {console.log(heroes)}
        {heroes.map(hero =>  <HeroCard key={hero.id} hero={hero} />  )}
      </div>
    </>
  );
}

export default App;


