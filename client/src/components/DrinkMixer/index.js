import React, { useState } from "react";
import { useEffect } from "react";
import {Container, Row, Col, Card} from "react-bootstrap"
import 'animate.css';
import './DrinkMaster.css'
import image from './images/Mixercup.jpg'
import { useMutation } from '@apollo/client'
import { ADD_DRINK } from '../../utils/mutations';
import { QUERY_ALLDRINKS, QUERY_USER } from '../../utils/queries';

const test = document.getElementsByClassName("test");
const cards = document.getElementsByClassName("card")


const DrinkMixer  = ({newIngredients, filterIngredients}) => {

    const [drinkName, setDrinkName] = useState ("")
    const [ingredientId, setIngredientId] = useState ([])

    

    const [addDrink, { error }] = useMutation(ADD_DRINK) 

    useEffect (() => {
        const tempArr = newIngredients.map(ing => ing.id)
        setIngredientId(tempArr);
    }, [])


    console.log(newIngredients)
    async function addAnimation () {
            
        for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add('animate__animated');
                cards[i].classList.add('animate__bounceOutDown');
            }
            
        const { data } = await addDrink({
            variables: {
                drinkName: drinkName,
                drinkIngredients: ingredientId
            }
        })
    }

    function createElement (num, name, url, j) {
   
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

    
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addThought({
//         variables: {
//           thoughtText,
//           thoughtAuthor: Auth.getProfile().data.username,
//         },
//       });

//       setThoughtText('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (name === 'thoughtText' && value.length <= 280) {
//       setThoughtText(value);
//       setCharacterCount(value.length);
//     }
//   };

    return (
        <div> 
        <div>
            <Container>  
            <Row>  
 
            {newIngredients && newIngredients.map((ing, i) => (
                
                createElement(ing.quantity, ing.name, ing.url, i)
                
            ))}

            
            </Row>

        <div className="row"> 
            <div className="col"> 
                <div >  
                <button className="center" onClick = {() => addAnimation()}><img src= { image } className = "mixerBtn" ></img></button>
                </div>
            </div>
            
            {/* <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={thoughtText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form> */}
        </div>

            

            </Container>
        </div>
        
    </div>

    )
} 


export default DrinkMixer