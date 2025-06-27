import React, { useState } from 'react';

const counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <h2>Q1: counter</h2>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase</button>
      <hr/>
    </div>
  );
};

export default counter;


