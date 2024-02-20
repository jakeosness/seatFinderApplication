//Login Page

"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleLogin = () => {
      axios.post('http://localhost:3000/appLogin', { username, password })
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
      <div class="header">
      <h1>SeatFinder</h1>
      </div>

    <br></br>

    <h1 class="find">Login</h1>

    <hr></hr>

    <h3 class="sub-header">Welcome back!<br></br>Enter login info below</h3>

    <input id="username" class="input" type="text" placeholder="username" value={username}
          onChange={(e) => setUsername(e.target.value)} required></input>

    <br></br>

    <input id="password" class="input" type="password" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)} required></input>

    <br></br>

    <button class="buttonbasic" onClick={handleLogin}> Login </button>  
   
    <div class="footer">
    <p>&copy; 2024 SeatFinder. All rights reserved.</p>
    </div>

    </div>
  );
};

export default Login;