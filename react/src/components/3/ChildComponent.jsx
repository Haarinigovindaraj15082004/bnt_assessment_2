import React from 'react';

const ChildComponent = ({ message }) => {
  return (
    <div>
      <h2>child : {message}</h2>
      <hr></hr>
    </div>
  );
};

export default ChildComponent;
