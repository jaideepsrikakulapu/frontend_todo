import React, { useState } from 'react';

const AuthForm = ({ onSubmit, buttonText }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="auth form">
      <label htmlFor="username">Username</label>
      <input id="username" value={username} onChange={e => setUsername(e.target.value)} aria-required="true" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} aria-required="true" />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default AuthForm;
