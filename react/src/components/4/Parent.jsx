import React from 'react';
import Child from './Child'; 

const Parent = ({ message }) => {
  return (
    <div>
      <h4>Parent Component</h4>
      <Child message={message} />
    </div>
  );
};

export default Parent;
