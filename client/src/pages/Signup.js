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
            <div class="form-group">
                <label for="usr">Email:</label>
                <input type="text" class="form-control" id="email"></input>
            </div>
            <div class="form-group">
                <label for="usr">Username:</label>
                <input type="text" class="form-control" id="usr"></input>
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"></input>
            </div>
            <button type='submit' onClick={postSignUp}>Sumbit</button>
        </div>
    )
}

export default Signup;