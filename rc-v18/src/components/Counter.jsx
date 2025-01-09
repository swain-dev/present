import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      console.time('HMR Update'); 
      setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
      console.timeEnd('HMR Update')
    }, [count]); 
  
    return (
      <div>
        <h2>Current Count: {count}</h2>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
};
  

export default Counter;
