import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './NotFound.css'


function NotFound(props) {
  const [counter, setCounter] = useState(4);
  const countdown = () => setCounter(counter-1);

  useEffect(() => {
    const intervalId = setInterval(countdown, 1500);
    !counter && clearInterval(intervalId);
  }, [counter]);

  return (
    <section>
      <div className="container notFound">
        <h3>No match for <code>{props.location.pathname}</code></h3>
        <h3>Redirect to homepage in {counter}</h3>
        { !counter && <Redirect to='/' /> }
      </div>
    </section>
  );
}

export default NotFound;