
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email, password
      });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/home';
    } catch (err) {
      alert('Login inválido');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-4">Login</h1>
      <input className="border mb-2 p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border mb-4 p-2" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={login}>Entrar</button>
    </div>
  );
}
