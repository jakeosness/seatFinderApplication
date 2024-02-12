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

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '100px' }}>ASU Seat-Finder</h1>
      <div style= {{ textAlign: 'center' }}>
      <button style={{ width:'200px', borderRadius: '8px', padding: '10px' }} onClick={handleAppLogin}>Login</button>
      </div>
      <div style = {{ textAlign: 'center'}}>
      <button style={{ width:'200px', borderRadius: '8px', padding: '10px' }} onClick={handleCreateAccount}>Create Account</button>
      </div>
      
    </div>
  );
};

export default startPage;