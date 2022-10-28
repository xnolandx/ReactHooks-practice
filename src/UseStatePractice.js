import React, { useState } from 'react';
import styles from './App.css'



function UseStatePractice() {

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('Potato')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('Less Potatos')
  };

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('More Potatos')
  };

  return (
    <div className="incrementer">
      <button onClick={decrementCount} className="minus" >-</button>
      <span className="count"> {count} </span>
      <button onClick={incrementCount} className="plus">+</button>
      <span className="theme"> {theme} </span>
      
      
    </div>
  );
};

export default UseStatePractice;
