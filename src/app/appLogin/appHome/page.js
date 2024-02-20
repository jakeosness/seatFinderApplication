//Home

"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const appHome = () => {
    const router = useRouter();

    const profileRoute = () => {
        router.push('/profile')
    };
  return (
    <div>
    <div class="header">
    <h1>SeatFinder</h1>
    </div>

    <br></br>
    <h1 class="find">Welcome</h1>
    <hr></hr>
    <h3 class="sub-header">Would you like to login or create an account?</h3>
    
    <button class="button1" onClick={handleAppLogin}>Login</button>
    <button class="button1" onClick={handleCreateAccount}>Create Account</button>
    
    <div class="footer">
    <p>&copy; 2024 SeatFinder. All rights reserved.</p>
    </div>
    
  </div>
  );
      
};
export default appHome;