import React from 'react';
import './Loader.css';
import iconLoader from './loading.png'

function Loader() {
  return (
    <div className="container ">
      <img src={iconLoader} className="rotate" alt="Loader icon" />
    </div>
  )
}

export default Loader