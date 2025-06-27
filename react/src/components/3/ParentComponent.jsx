import React from 'react';
import ChildComponent from './ChildComponent'; 

const ParentComponent = () => {
  return (
    <div>
      <h2>Q3: parent child comp</h2>
      <h3>Parent Component</h3>
      <ChildComponent message="Good morning" />
    </div>
  );
};

export default ParentComponent;
