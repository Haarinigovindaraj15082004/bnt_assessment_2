import React from 'react';
import NameItem from './NameItem'; 

const NameList = () => {
  const names = ["John", "Jane", "Alex"];

  return (
    <div>
    <h2>Q5: array</h2>
      <h3>List of Names</h3>
      <ul>
        {names.map((name, index) => (
          <NameItem key={index} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default NameList;
