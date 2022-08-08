import React, { useState } from "react";
import { useEffect } from "react";
import {Container, Row, Col, Card} from "react-bootstrap"






const DrinkMixer  = ({newIngredients, filterIngredients}) => {
    
    
    // const[mixing, setMixing] = useState()

    console.log(newIngredients)

    // useEffect (() => {
    //     setTimeout(()=>{
    //         setMixing(
    //             <div>Hello</div>
    //         )
    //     }, 8000)
    // }, ) 

    function createElement (num, name, url, j) {
        console.log(name);
        const jsxArray = [];
      
        if (num > 1) {
            for (let i = 0; i < num; i++) {
                jsxArray.push(           
                <Col className = "mt-3">
                <Card onClick = {() => filterIngredients(j)}>   
                <img className = "ingBox" src = {url}/> 
                    <p>{name}</p>      
                </Card> 
                </Col> 
                );
            }
            return jsxArray;
        } else {
            return (            
            <Col className = "mt-3">
            <Card onClick = {() => filterIngredients(j)}>   
            <img className = "ingBox" src = {url}/>  
                <p >{name}</p>
            
            </Card> 
            </Col> 
            );
        }
    }

    return (
        <div> 
        <div>
            <Container>  
            <Row>  
 
            {newIngredients && newIngredients.map((ing, i) => (
                
                createElement(ing.quantity, ing.name, ing.url, i)
            ))}

            </Row>
            </Container>
        </div>
        
    </div>

    )
} 

export default DrinkMixer