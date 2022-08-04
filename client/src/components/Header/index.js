import React from 'react';


const Header = () => {
    return(
        <header>
        
        <li><a href="/mixer" className="text-decoration-none text-white">Mixer</a></li>
        <li><a href="/profile" className="text-decoration-none text-white">Profile</a></li>
        <li><a href="/" className="text-decoration-none text-white">Home</a></li>
        <li><a href="/login" className="text-decoration-none text-white">Login</a></li>
        <li><a href="/signup" className="text-decoration-none text-white">Signup</a></li>
        
        </header>
        );
    };
    
    
    export default Header;