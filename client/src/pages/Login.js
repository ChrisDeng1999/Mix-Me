import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const postLogin = () => {
    console.log("Submit Login clicked");
}


const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
          const { data } = await login({
            variables: { ...formState },
          });
    
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
    };    

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="usr">email:</label>
                <input type="text" className="form-control" id="usr" name='email' value={formState.email}  onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" name='password' value={formState.password}  onChange={handleChange}></input>
            </div>
            <button type='submit' onClick={postLogin} >Sumbit</button>
        </form>
    )
}

export default Login;