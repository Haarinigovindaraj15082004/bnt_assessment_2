import React from 'react';
import Parent from './Parent'; 

const GrandParent = () => {
  const message = "Hello from GrandParent";

  return (
    <div>
      <h2>Q4</h2>
      <h3>GrandParent Component</h3>
      <Parent message={message} />
      <hr/>
    </div>
  );
};

export default GrandParent;
