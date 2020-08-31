import React from 'react';
import './Navigation.css'

function Navigation () {
  return (
    <>
      <nav>
        <div className="container nav">
          <a href="http://localhost:3000/">Superhero Database</a>
          <div class="input-group mb-4 mr-3 inputSearch">
            <input type="text" className="form-control" placeholder="Enter the name of your hero" />
            <div class="input-group-append">
              <button className="btn btn-light " type="button">Search</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;