import './App.css';
import React, { useState } from 'react';

export default function App() {

  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    if (number === 0) {
      return;
    }
    else {
      setNumber(number - 1);
    }
  }

  return (
    <div className="Container">
      <div className="Card">
        <h4 className="Number">{number}</h4>
        <button className="IncreaseButton" onClick={() => increase()}>Aumentar</button>
        <button className="DecreaseButton" onClick={() => decrease()}>Diminuir</button>
      </div>
    </div>
  );
}
