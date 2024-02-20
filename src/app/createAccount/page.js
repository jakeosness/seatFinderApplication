//Create Account Page

"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const createAccount = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleCreateAccount = async () => {
        try {
            const response = await axios.post('http://localhost:3000/createAccount', {
              username,
              email,
              password,
            });
      
            console.log(response.data);
            // You can handle the response as needed, e.g., show a success message, redirect, etc.
            router.push('/appLogin')
        } catch (error) {
          if (error.response && error.response.data) {
            // If the response exists and has a 'data' property, log it
            console.error('Error creating account:', error.response.data);
            // Handle the error, e.g., show an error message to the user
          } else {
            // If 'error.response' is undefined or doesn't have a 'data' property
            console.error('Unexpected error:', error);
        }
    }
  };

    return (
      <div>

      <div class="header">
        <h1>SeatFinder</h1>
      </div>

        <br></br>
        
      <h1 class="find">Create Account</h1>

        <hr></hr>

      <h3 class="sub-header">Welcome!<br></br>Enter info below</h3>


      <input class="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
        <br></br>

      <input class="input" type="text" placeholder="School Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
        <br></br>

      <input class="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        <br></br>
       
      <button class="buttonbasic" onClick={handleCreateAccount}> Create Account </button>

      <div class="footer">
        <p>&copy; 2024 SeatFinder. All rights reserved.</p>
      </div>
      </div>
      );
    };
export default createAccount;