"use client";

import React, { useEffect, useState } from 'react';

const Counter = (props) => {
  const { count, setCount } = props;

  const handleClick = () => {
      setCount(prevCount => prevCount + 1);
  };

  return (
    <div className='box'>
      <h2>Current Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};


export default Counter;
