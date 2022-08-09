import React, { useEffect, useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DRINK } from '../utils/queries';
import { ADD_IMG, ADD_DESCRIPTION } from '../utils/mutations'
import { useMutation } from '@apollo/client'


import Auth from '../utils/auth';


const Profile = () => {
  const { loading, data } = useQuery(QUERY_DRINK, {
    variables: { username: Auth.getProfile().data.username },
  });
  
  const user = data?.drinks.drinks || [];
  const [allDrinks, setAllDrinks] = useState ([])
  const [getImage, setGetImage] = useState ("")

  const [getDescription, setGetDescription] = useState ("")

  const [addImage, { error }] = useMutation(ADD_IMG); 
  const [addDescription] = useMutation(ADD_DESCRIPTION);


  useEffect(() => {
    const getDrinks = user.map(drink => drink.drinkName)
    console.log(getDrinks)
    setAllDrinks(getDrinks)
  }, [user]);


  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //     const { data } = await addDescription({
        
  //       variables: {
  //           description: description,
  //       },
      
  //   });


  // const handleChange = (event) => {
  //   const { value } = event.target;

  //   if (value.length <= 60) {
  //     setGetDescription(value);
  //   }
  // };



      function useUploadProfilePic(error, result) {
    const myWidget = window.cloudinary.createUploadWidget(
    
      {
        cloudName: "dniag1t6z",
        uploadPreset: "gg1ohqd6",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const savedImage = result.info.url
          return savedImage
        } 
        const savedImage = addImage({
          variables: {
            userImg: result.info.url
          }
        }
        )
        addImage({

          variables: {
            userImg: savedImage
          }
        },
        );
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
      <textarea 
      className="textArea"
      placeholder="Please write a short description about yourself :D"
      // onChange={handleChange}
      ></textarea>
      <button 
      type="submit"
      // onClick = {handleFormSubmit}
      >
      </button>



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
