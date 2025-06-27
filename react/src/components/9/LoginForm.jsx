import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = username !== '' && password !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${username}`);
  };

  return (
    <div>
      <h2>Q9: Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <br />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      <hr/>
    </div>
  );
};

export default LoginForm;
