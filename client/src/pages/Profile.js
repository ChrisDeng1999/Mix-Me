import React, { useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DRINK } from '../utils/queries';
// import { useMutation } from '@apollo/client'
// import { ADD_DESCRIPTION } from '../../utils/mutations';

import Auth from '../utils/auth';


const Profile = () => {
  const { loading, data } = useQuery(QUERY_DRINK, {
    variables: { username: Auth.getProfile().data.username },
  });

  const user = data?.drinks.drinks || [];

  useEffect(() => {
    console.log(user);
  }, [user]);
  function uploadProfilePic() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dniag1t6z",
        uploadPreset: "gg1ohqd6",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          if (Auth.getToken() == null) {
            return <Navigate to="/" />;
          }
        }
      }
    );

    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  if (Auth.getToken() == null) {
    return <Navigate to="/" />;
  }
  return (
    <div className="homeImage">
      <h1 className="profileTag">Profile Page</h1>
      <h2 className="profileTag"> Edit Profile</h2>
      <button
        onClick={uploadProfilePic}
        id="upload_widget"
        class="cloudinary-button"
      >
        Upload Avatar 
      </button>
      <h3 className="profileTag">Description</h3>      
      <textarea className="textArea"></textarea>
      <h3 className="profileTag">Username</h3>
      <p className="profileTag">{Auth.getProfile().data.username}</p>
      <h3 className="profileTag">Drinks Created</h3>
      <ul>
        <li className="profileTag">Vodka Soda</li>
        <li className="profileTag">Rum and Coke</li>
      </ul>
    </div>
  );
};

export default Profile;
