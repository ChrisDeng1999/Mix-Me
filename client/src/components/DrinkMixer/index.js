import React, { useState } from "react";
import { useEffect } from "react";
import {Container, Row, Col, Card} from "react-bootstrap"
// import 'animate.css';
import './DrinkMaster.css'
import image from './images/Mixercup.jpg'
import { useMutation } from '@apollo/client'
import { ADD_DRINK } from '../../utils/mutations';
import Auth from '../../utils/auth';



const cards = document.getElementsByClassName("card")


const DrinkMixer  = ({newIngredients}) => {

    const [drinkName, setDrinkName] = useState ("")
    const [ingredientNumber, setIngredientNumber] = useState ([])

    

    const [addDrink, { error }] = useMutation(ADD_DRINK) 

    useEffect (() => {
        const tempArr = newIngredients.map(ing => ing.id)
        console.log(tempArr)
        setIngredientNumber(tempArr);
    }, [drinkName])


    console.log(newIngredients)


    function createElement (num, name, url) {
   
        const jsxArray = [];
    

        if (num > 1) {
        
            for (let i = 0; i < num; i++) {
                console.log(jsxArray) 
                jsxArray.push(     
                <Col className = "mt-3">
                <Card> 
                {/* <Card onClick = {() => filterIngredients(j)}>    */}
                <img className = "ingBox" src = {url}/> 
                    <p>{name}</p>  
                </Card> 
                </Col>
                )} return jsxArray;
        } else {
            return (            
            <Col className = "mt-3">
            <Card>   
            <img className = "ingBox" src = {url}/>  
                <p >{name}</p>
            </Card> 
            </Col>  
            );
        }}

    
  const handleFormSubmit = async (event) => {
    event.preventDefault();

            
        for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add('animate__animated');
                cards[i].classList.add('animate__rotateOut');
            }

    
    try {
    console.log(drinkName)
    console.log(ingredientNumber)
    console.log(Auth.getProfile().data.username);
      const { data } = await addDrink({
        
        variables: {
            drinkName: drinkName,
            drinkIngredients: ingredientNumber,
            drinkAuthor: Auth.getProfile().data.username,
        },
       
    });
        console.log(data);
      setDrinkName('');
    } catch (err) {
      console.error(err);
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'drinkName' && value.length <= 30) {
      setDrinkName(value);
    }
  };
    
    return (
        <div> 
        <div>
            <Container>  
            <Row>  
 
            {newIngredients && newIngredients.map((ing, i) => (
                
                createElement(ing.quantity, ing.name, ing.url, i)
                
            ))}

            
            </Row>

            <form>
            <div>
              <textarea
                name="drinkName"
                placeholder="Name your drink :D"
                value={drinkName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>

        <div className="row"> 
            <div className="col"> 
                <div >  
                <button 
                className="center" 
                type="submit"
                onClick = {handleFormSubmit}>
                    <img src= { image } className = "mixerBtn" >
                    </img>
                    </button>
                </div>
            </div>
            

        </div>

            

            </Container>
        </div>
        
    </div>

    )
} 


export default DrinkMixer