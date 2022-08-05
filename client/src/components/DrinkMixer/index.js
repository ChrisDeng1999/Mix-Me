import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap"
import Vodka from "../../images/Vodka.png"


function createElement (num, name, url) {
    console.log(name);
    const jsxArray = [];
  


    if (num > 1) {
        for (let i = 0; i < num; i++) {
            jsxArray.push(           
            <Col className = "mt-3">
            <Card>   
            <img style = {{height:300}} src = {url}/> 
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
        <img style = {{height:300}} src = {url}/>  
            <p >{name}</p>
        
        </Card> 
        </Col> 
        );
    }
}


const DrinkMixer  = ({newIngredients}) => {
    console.log(newIngredients)
    return(
        <div>
            <Container>  
            <Row>  
 
            {newIngredients && newIngredients.map(ing => (
                createElement(ing.quantity, ing.name, ing.url)
            ))}

            </Row>
            </Container>
        </div>


    )
} 

export default DrinkMixer