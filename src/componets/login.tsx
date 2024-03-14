"use client"
import { LoginFetch } from '@/actions/login';
import React, { useState } from 'react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await LoginFetch(username, password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Usuário</label>
      <input
        type="text"
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor='password'>Senha</label>
      <input
        type="password"
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">
        Fazer login
      </button>
    </form>
  );
}
