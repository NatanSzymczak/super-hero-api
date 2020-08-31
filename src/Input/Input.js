import React from 'react';
import './Input.css'

function Input ({ updateAmount }) {
  return (
    <>
      <h3>Amount of Heroes</h3>
      <input
        type="text"
        placeholder="Amount of Heroes"
        onChange={event => {updateAmount(+event.target.value)}}
      />
    </>
  );
}

export default Input;