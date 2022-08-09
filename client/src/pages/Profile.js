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
    <div className="homeImage">
      <h1 className="profilePageTag">Profile Page</h1>
      <h2 className="profileEditTag"> Edit Profile</h2>
      <button className="loginButton">Upload Photo</button>
      <h3 className="profileDescriptionTag">Description</h3>
      <textarea className="textArea"></textarea>
      <h3 className="profileNameLabelTag">Username</h3>
      <p className="profileNameTag">{Auth.getProfile().data.username}</p>
      <h3 className="profileDrinksTag">Drinks Created</h3>
      <ul>
        <li className="profileFirstDrinkTag">Vodka Soda</li>
        <li className="profileSecondDrinkTag">Rum and Coke</li>
      </ul>
    </div>
  );
};

export default Profile;
