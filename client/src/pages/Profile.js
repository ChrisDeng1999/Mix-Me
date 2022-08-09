import React, { useEffect, useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DRINK } from '../utils/queries';
import { ADD_IMG } from '../utils/mutations'
import { useMutation } from '@apollo/client'
// import { ADD_DESCRIPTION } from '../../utils/mutations';

import Auth from '../utils/auth';


const Profile = () => {
  const { loading, data } = useQuery(QUERY_DRINK, {
    variables: { username: Auth.getProfile().data.username },
  });
  
  const user = data?.drinks.drinks || [];
  const [allDrinks, setAllDrinks] = useState ([])
  const [getImage, myWidget] = useState ("")
  
  const [addImage, { error }] = useMutation(ADD_IMG) 
  useEffect(() => {
    const getDrinks = user.map(drink => drink.drinkName)
    console.log(getDrinks)
    setAllDrinks(getDrinks)
  }, [user]);

      function useUploadProfilePic(error, result) {
    const myWidget = window.cloudinary.createUploadWidget(
    
      {
        cloudName: "dniag1t6z",
        uploadPreset: "gg1ohqd6",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const {result} = addImage({
            variables: {userImg: result.info.url}
          })
        } 
      }
    );

    console.log(result);

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
    <div className="homeImage justify-content-center" align="center">
      <h1>{Auth.getProfile().data.username} Profile</h1>
      <h2 className="profileTag"> Edit Profile</h2>
      <button
        onClick={useUploadProfilePic}
        id="upload_widget"
        class="cloudinary-button mb-4"
      >
        Upload Avatar 
      </button>
      <h3 className="profileTag">Description</h3>      
      <textarea className="textArea"></textarea>
      <h3 className="profileTag">Username</h3>
      <p className="profileTag">{Auth.getProfile().data.username}</p>
      <h3 className="profileTag">Drinks Created</h3>
        {allDrinks && allDrinks.map(drink => (
          <div className="profileTag" key = {drink.id}>
            {drink}
          </div>
        ))}
    </div>
  );
};

export default Profile;
