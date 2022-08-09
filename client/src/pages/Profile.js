import { rewriteURIForGET } from "@apollo/client";
import React from "react";
import { Navigate, useParams } from 'react-router-dom';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import DrinkList from '../components/DrinkList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
const Profile = () => {
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
