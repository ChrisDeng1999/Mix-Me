import React, { useState } from "react";
import { useEffect } from "react";
import {Container, Row, Col, Card} from "react-bootstrap"



function createElement (num, name, url) {
    console.log(name);
    const jsxArray = [];
  
    if (num > 1) {
        for (let i = 0; i < num; i++) {
            jsxArray.push(           
            <Col className = "mt-3">
            <Card>   
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
        <Card>   
        <img className = "ingBox" src = {url}/>  
            <p >{name}</p>
        
        </Card> 
        </Col> 
        );
    }
}


const DrinkMixer  = ({newIngredients}) => {
    
    const[mixing, setMixing] = useState()

    console.log(newIngredients)

    useEffect (() => {
        setTimeout(()=>{
            setMixing(
                <div>Hello</div>
            )
        }, 8000)
    }, ) 
    return (
        <div> 
        <div>
            <Container>  
            <Row>  
 
            {newIngredients && newIngredients.map(ing => (
                createElement(ing.quantity, ing.name, ing.url)
            ))}

            </Row>
            </Container>
        </div>
        
    </div>

    )
} 

export default DrinkMixer