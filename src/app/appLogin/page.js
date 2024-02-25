//Login Page

"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
  
    const handleLogin = () => {
      axios.post('http://localhost:5000/api/login', { username, password })
        .then(response => {
          console.log('Login successful:', response.data);
          // Perform additional actions, e.g., redirect the user
          router.push('/userProfile');
        })
        .catch(error => {
          if (error.response) {
            // The server responded with a status code other than 2xx
            console.error('Login failed:', error.response.data);
            setErrorMessage('Incorrect username or password');
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
          }
          // Handle login failure, e.g., display an error message
        });
    };
    
  

  return (
    <div>
      <div className="header">
      <h1>SeatFinder</h1>
      </div>

    <br></br>

    <h1 className="find">Login</h1>

    <hr></hr>

    <h3 className="sub-header">Welcome back!<br></br>Enter login info below</h3>

    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

    <input id="username" className="input" type="text" placeholder="username" value={username}
          onChange={(e) => setUsername(e.target.value)} required></input>

    <br></br>

    <input id="password" className="input" type="password" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)} required></input>

    <br></br>

    <button className="buttonbasic" onClick={handleLogin}> Login </button>  
   
    <div className="footer">
    <p>&copy; 2024 SeatFinder. All rights reserved.</p>
    </div>

    </div>
  );
};

export default Login;