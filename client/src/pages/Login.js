import React from 'react';
import Button from 'react-bootstrap/Button';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const postLogin = () => {
    console.log("Submit Login clicked");
}


const Login = () => {
    return (
        <div>
            <div class="form-group">
                <label for="usr">Username:</label>
                <input type="text" class="form-control" id="usr"></input>
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"></input>
            </div>
            <button type='submit' onClick={postLogin}>Sumbit</button>
        </div>
    )
}

export default Login;