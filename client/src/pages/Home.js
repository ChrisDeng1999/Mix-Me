import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';


const Home = () => {
    return(
    <div>
<h1>Mix Easy</h1>
<h2>Create Drink</h2>
<Link to="/Mixer"><button>Mix!</button></Link>
<h2>Top 3 Drinks</h2>
<Link to="/Signup"><button>Sign Up/Login</button></Link>
    </div>
    );
};


export default Home;

// Test 