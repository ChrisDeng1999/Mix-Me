import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';
const postSignUp = () => {
    console.log("Submit signup clicked");
}


const Signup = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState },
            });
            console.log(data);

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="usr">Email:</label>
                <input type="text" className="form-control" name='email' id="email" onChange={handleChange} value={formState.email} ></input>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Username:</label>
                <input type="text" className="form-control" name='username' id="usr" onChange={handleChange} value={formState.username}></input>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    name='password'
                    id="pwd"
                    onChange={handleChange}
                    value={formState.password}>
                </input>
            </div>
            <button type='submit' onClick={postSignUp}>Sumbit</button>
        </form>
    )
}

export default Signup;