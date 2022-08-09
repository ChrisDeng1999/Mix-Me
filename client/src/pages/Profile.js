
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_DRINK } from '../utils/queries';
import Auth from "../utils/auth";
const Profile = () => {
  const { loading, data } = useQuery(QUERY_DRINK, {
    variables: { username: Auth.getProfile().data.username },
  });


  const user = data?.drinks.drinks || []

  useEffect (() => {
    console.log(user)
  }, [user])
  function uploadProfilePic() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dniag1t6z",
        uploadPreset: "gg1ohqd6",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
         if (Auth.getToken() == null){
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
    <div>
      <h1>Profile Page</h1>
      <h2> Edit Profile</h2>
      <button
        onClick={uploadProfilePic}
        id="upload_widget"
        class="cloudinary-button"
      >
        Upload files
      </button>
      <h3>Description</h3>
      <textarea></textarea>
      <h3>Username</h3>
      <p>{Auth.getProfile().data.username}</p>
      <h3>Drinks Created</h3>
      </div>
  );
};

export default Profile;
