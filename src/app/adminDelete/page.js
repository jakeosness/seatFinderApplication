"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const DeleteUser = () => {
  const router = useRouter();

  const confirmUserDeletion = () => {
    const userName = document.getElementById("userName").value;

    if (userName.trim() === "") {
      alert("Please enter a valid user's name.");
    } else {
      const confirmation = window.confirm("Are you sure you want to delete the user '" + userName + "'?");
      if (confirmation) {
        alert("User '" + userName + "' deleted successfully!");
      } else {
        alert("Deletion canceled.");
      }
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '100px' }}>ASU Seat-Finder</h1>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center', fontSize: '50px' }}>Delete User</h2>
        <div style={{ textAlign: 'center' }}></div>
        <input type="text" id="userName" placeholder="Type user's name" />
        <div style={{ textAlign: 'center' }}></div>
        <button onClick={confirmUserDeletion}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteUser;