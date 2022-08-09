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
        <div className="navBarButtons">
        <li><a  className="btn btn-lg btn-secondary m-2 Button"  href="/mixer">Mixer</a></li>
        <li><a  className="btn btn-lg btn-dark m-2 Button"  href="/">Home</a></li>
        {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2 Button" to="/profile">
                My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2 Button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2 Button" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2 Button" to="/signup">
                Sign Up
              </Link>
            </>
          )}
          </div>
        </header>
        );
    };
    
    
    export default Header;