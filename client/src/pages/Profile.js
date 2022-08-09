import React, { useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DRINK } from '../utils/queries';


import Auth from '../utils/auth';


const Profile = () => {
 

  const { loading, data } = useQuery(QUERY_DRINK, {
    variables: { username: Auth.getProfile().data.username },
  });


  const user = data?.drinks.drinks || []

  useEffect (() => {
    console.log(user)
  }, [user])




  if (Auth.getToken() == null){
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <h2> Edit Profile</h2>
      <button>Upload Photo</button>
      <h3>Description</h3>
      <textarea></textarea>
      <h3>Username</h3>
      <p>{Auth.getProfile().data.username}</p>
      <h3>Drinks Created</h3>
      <ul>
        <li>Vodka Soda</li>
        <li>Rum and Coke</li>
      </ul>
    </div>
  );
};

export default Profile;
