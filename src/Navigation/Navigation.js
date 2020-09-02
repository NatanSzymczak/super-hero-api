import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation () {
  const [ searchInputValue, setSearchInputValue ] = useState('');

  return (
    <nav>
      <div className="container nav">
        <a className="logo" href="http://localhost:3000/">Superhero Database</a>
        <div className="input-group mr-4 inputSearch">
          <input
            name="search"
            type="text"
            className="form-control"
            placeholder="Find your superhero!"
            onChange={event => setSearchInputValue(event.target.value)}
            value={searchInputValue}
          />
          <div className="input-group-append">
            <Link to={`/search/${searchInputValue}`}>
              <button className="btn btn-light" type="button">Search</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;