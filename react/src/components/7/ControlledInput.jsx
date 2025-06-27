import React, { useState } from 'react';

const ControlledInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value); 
  };

  return (
    <div>
      <h2>Q7 :Controlled Input</h2>
      <input 
        type="text" 
        value={text}         
        onChange={handleChange} 
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
      <hr/>
    </div>
  );
};

export default ControlledInput;

