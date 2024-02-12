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
            const response = await axios.post('http://localhost:5000/api/create-account', {
              username,
              email,
              password,
            });
      
            console.log(response.data);
            // You can handle the response as needed, e.g., show a success message, redirect, etc.
            router.push('/appLogin')
        } catch (error) {
            console.error('Error creating account:', error.response.data);
            // Handle the error, e.g., show an error message to the user
        }
    };

    return (
        <div>
          <h1>Create an Account</h1>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <button onClick={handleCreateAccount}>Create Account</button>
          </div>
        </div>
      );
    };
export default createAccount;