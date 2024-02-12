"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleLogin = () => {
      axios.post('http://localhost:5000/api/login', { username, password })
        .then(response => {
          console.log('Login successful:', response.data);
          // Perform additional actions, e.g., redirect the user
          router.push('/appLogin/appHome');
        })
        .catch(error => {
          console.error('Login failed:', error.response.data);
          // Handle login failure, e.g., display an error message
        });
    };
  
  

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '100px' }}>ASU Seat-Finder</h1>

      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ textAlign: 'center', fontSize: '30px' }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style= {{ textAlign: 'center' }}>
      <button style={{ width:'200px', borderRadius: '8px', padding: '10px' }} onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  );
};

export default Login;