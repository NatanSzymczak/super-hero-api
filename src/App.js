import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import HeroRandom from './HeroRandom/HeroRandom';
import HeroDetails from './HeroDetails/HeroDetails';
import HeroSearch from './HeroSearch/HeroSearch';
import NotFound from './NotFound/NotFound'
import './App.css';

function App() {
  const [ heroes, setHero ] = useState([]);
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <HeroRandom heroes={heroes} setHero={setHero}/>
          </Route>
          <Route path="/search/:name">
            <HeroSearch />
          </Route>
          <Route path="/hero/:id" component={HeroDetails} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;


