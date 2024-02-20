"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './findUser.css';

const admin = () => {
const router = useRouter();

return (
// Test

<div>
<h1>Test</h1>
<div className="header">
<h1>SeatFinder</h1>
<div className="buttons">
<button id="home">Home</button>
<button id ="notify">Notifications</button>
</div>
</div>

{/*Page content here*/}
<br></br>

<h1 className="find">Find User</h1>
<hr></hr>
<h3 class="sub-header">Enter Username Below</h3>

<input type="text" id="username-input" placeholder="Enter Username" />
<button id="search">Search</button>

<div id="content" style={{ display: 'none' }}>
<div className="user-info">
<h2 id="user-name">Sir Tester</h2>
<p id="user-email">testiscool@gmail.com</p>
<p id="user-phone">555-555-5555</p>
</div>
</div>

<div className="footer">
<p>&copy; 2024 SeatFinder. All rights reserved.</p>
</div>
</div>

);
};

export default admin;