import React, { useState } from "react";
import { useEffect } from "react";
import {Container, Row, Col, Card} from "react-bootstrap"
import 'animate.css';
import './DrinkMaster.css'
import image from './images/Mixercup.jpg'

const test = document.getElementsByClassName("test");
const cards = document.getElementsByClassName("card")


const DrinkMixer  = ({newIngredients, filterIngredients}) => {
    

    console.log(newIngredients)
    function addAnimation () {
            
        for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add('animate__animated');
                cards[i].classList.add('animate__bounceOutDown');
            }
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

        // const [items, setItems] = useState();


        // console.log(newIngredients)
    
    
        // function createElement (num, name, url, j) {
            
        //     console.log(j);
        //     const jsxArray = [];
            
    

        //     if (num > 1) {
            
        //         for (let i = 0; i < num; i++) {
        //             console.log(jsxArray) 
        //             jsxArray.push(     
        //             <Col className = "mt-3">
        //             <Card> 
        //             {/* <Card onClick = {() => filterIngredients(j)}>    */}
        //             <img className = "ingBox" src = {url}/> 
        //                 <p>{name}</p>
        //             <button onClick = {() => addAnimation()}>Add Me!</button>      
        //             </Card> 
        //             </Col>
        //               )
        //             function addAnimation () {
                
        //                 jsxArray.filter(( jsxArray[0] !== 0))
                    
        //                 return jsxArray     
        //                }
        //             } return jsxArray;
        //     } else {
        //         return (            
        //         <Col className = "mt-3">
        //         <Card>   
        //         <img className = "ingBox" src = {url}/>  
        //             <p >{name}</p>
        //             <button onClick = {() => addAnimation()}>Add Me!</button> 
        //         </Card> 
        //         </Col> 
        //         )
        //         function addAnimation () {
                
        //             jsxArray.filter(( jsxArray[0] !== 0))
                
        //             return jsxArray     
        //            };
        //     }


    // }

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
            </div>


            </Container>
        </div>
        
    </div>

    )
} 


export default DrinkMixer