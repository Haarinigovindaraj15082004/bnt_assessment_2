import React, { useState } from 'react';

const Toggle = () => {
  const [message, setMessage] = useState('Hello');

  const handleToggle = () => {
    setMessage((prev) => (prev === 'Hello' ? 'Welcome Back' : 'Hello'));
  };

  return (
    <>
      <h2>Q2 :toggle</h2>
      <h2>{message}</h2>
      <button onClick={handleToggle}>Toggle Message</button>
      <hr></hr>
    </>
  );
};

export default Toggle;
