import React from 'react';
import Button from 'react-bootstrap/Button';

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';



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
        </div>
    )
}

export default Login;