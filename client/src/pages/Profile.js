import React from "react";
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import DrinkList from '../components/DrinkList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
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
      <h2>List of Drinks</h2>
      <ul>
        <li>Bloody Mary</li>
        <li>Corkscrew</li>
      </ul>
    </div>
  );
};

export default Profile;
