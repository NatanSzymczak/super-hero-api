import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeroRandom from './HeroRandom/HeroRandom';

function App() {
  return (

    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HeroRandom />
        </Route>
        <Route path="/search/:name">
          <SearchHero />
        </Route>
        <Route path="/hero/:id">
          <ShowHero />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;


