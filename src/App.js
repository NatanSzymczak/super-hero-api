import React, { useEffect, useState } from 'react';
import './App.css';
import { getHero, amountOfHeroesInBase } from './Requests'
import Input from './Input/Input';
import BoxHero from './BoxHero/BoxHero';

function App() {
  const [ heroes, setHero ] = useState([]);
  const [ amount, updateAmount ] = useState(0);

  const getRandomHeroId = () => Math.floor(Math.random() * (amountOfHeroesInBase - 1)) + 1;

  useEffect(() => {
    setHero([]);
    for(let i=0; i<amount; i++){
      getHero(getRandomHeroId()).then( resp =>
        setHero(prevState => [...prevState, resp.data] ));
    }
  }, [amount]);

  return (
    <div className="container">
      <Input updateAmount={updateAmount} />
      {console.log(heroes)}
      {heroes.map(hero =>  <BoxHero key={hero.id} hero={hero} />  )}
    </div>
  );
}

export default App;
