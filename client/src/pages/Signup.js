import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';
const postSignUp = () => {
console.log("Submit signup clicked");
}


const Signup = () => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="usr">Email:</label>
                <input type="text" className="form-control" id="email"></input>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Username:</label>
                <input type="text" className="form-control" id="usr"></input>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"></input>
            </div>
            <button type='submit' onClick={postSignUp}>Sumbit</button>
        </div>
    )
}

export default Signup;