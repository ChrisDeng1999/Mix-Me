import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Header = () => {

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    
    return(
        <header>
        <h1 className="headerSlogan">Make something amazing, easily.</h1>
        <li><a  className="btn btn-lg btn-secondary m-2 mixerButton"  href="/mixer">Mixer</a></li>
        <li><a  className="btn btn-lg btn-dark m-2 homeButton"  href="/">Home</a></li>
        {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2 specProfileButton" to="/profile">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2 logoutButton" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2 loginButton" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 signUpButton" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </header>
        );
    };
    
    
    export default Header;