//Home
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '/src/app/globals.css'


const startPage = () => {
   const router = useRouter()
   
   const handleAppLogin = () => {
    router.push('/appLogin');
   };
   const handleCreateAccount = () => {
    router.push('/createAccount')
   }
   const profileRoute = () => {
    router.push('/profile')
   };

  return (
    <div>
    <div className="header">
    <h1>SeatFinder</h1>
    </div>

    <br></br>
    <h1 className="find">Welcome</h1>
    <hr></hr>
    <h3 className="sub-header">Would you like to login or create an account?</h3>
    
    <button className="button1" onClick={handleAppLogin}>Login</button>
    <button className="button1" onClick={handleCreateAccount}>Create Account</button>
    
    <div className="footer">
    <p>&copy; 2024 SeatFinder. All rights reserved.</p>
    </div>
    
  </div>
  );
};

export default startPage;