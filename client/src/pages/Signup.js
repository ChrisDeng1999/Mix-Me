import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        <div className="homeImage">
        <form className="formDiv" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label className="loginLabels" htmlFor="usr">Email:</label>
                <input
                    type="text"
                    className="form-control"
                    name='email'
                    id="email"
                    onChange={handleChange}
                    value={formState.email}>
                </input>
            </div>
            <div className="form-group">
                <label className="loginLabels" htmlFor="usr">Username:</label>
                <input
                    type="text"
                    className="form-control"
                    name='username'
                    id="usr"
                    onChange={handleChange}
                    value={formState.username}>
                </input>
            </div>
            <div className="form-group">
                <label className="loginLabels" htmlFor="pwd">Password:</label>
                <input
                    type="password"
                    className="form-control mb-3"
                    name='password'
                    id="pwd"
                    onChange={handleChange}
                    value={formState.password}>
                </input>
            </div>
            <Button
                className="submitSignUpButton"
                type='submit'
                variant="primary"
                onClick={postSignUp}>Submit</Button>
        </form>
        </div>
    )
}

export default Signup;