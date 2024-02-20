"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const appAdmin = () => {
    const router = useRouter();

    const profileRoute = () => {
        router.push('/appLogin/appHome/appAdmin/adminDelete')
    };

    const profileRouteTwo = () => {
      router.push('/appLogin/appHome/appAdmin/adminFind')
  };
  return (
        <div>
          <h1 style={{ textAlign: 'center', fontSize: '100px' }}>ASU Seat-Finder</h1>
          <div style= {{ textAlign: 'center' }}>
          <button onclick={profileRouteTwo} style={{ width:'200px', borderRadius: '8px', padding: '10px' }}>Find User</button>
          <button onclick={profileRoute} style={{ width:'200px', borderRadius: '8px', padding: '10px' }}>Delete User</button>
          </div>
          
        </div>
  );
      
};
export default appAdmin;