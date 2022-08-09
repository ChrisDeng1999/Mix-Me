import { rewriteURIForGET } from "@apollo/client";
import React, {useState} from "react";
import { Navigate, useParams } from 'react-router-dom';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import DrinkList from '../components/DrinkList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
const Profile = () => {
  function uploadProfilePic(){
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dniag1t6z', 
      uploadPreset: 'gg1ohqd6'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
        }
      }
    )
    
    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
      }, false);  
  }
  if (Auth.getToken() == null){
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <h2> Edit Profile</h2>
      <button onClick={uploadProfilePic} id="upload_widget" class="cloudinary-button">Upload files</button>
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
