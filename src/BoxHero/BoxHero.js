import React from 'react';

function BoxHero ({ heroRight, heroCenter, heroLeft }) {
  return (
    <>
      <div>{heroRight.name}</div>
      <div>{heroCenter.name}</div>
      <div>{heroLeft.name}</div>
    </>
  );
}

export default BoxHero;