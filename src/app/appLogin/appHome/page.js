"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const appHome = () => {
    const router = useRouter();

    // const profileRoute = () => {
    //     router.push('/profile')
    // };
  return (
        <div>
          <h1 style={{ textAlign: 'center', fontSize: '100px' }}>ASU Seat-Finder</h1>
          <div style= {{ textAlign: 'center' }}>
          <button style={{ width:'200px', borderRadius: '8px', padding: '10px' }}>Account Details</button>
          
          </div>
          
        </div>
  );
      
};
export default appHome;