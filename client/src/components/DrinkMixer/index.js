import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap"
// import Vodka from "../../images/Vodka.png"


function createElement (num, name) {
    console.log(name);
    const jsxArray = [];

    if (num > 1) {
        for (let i = 0; i < num; i++) {
            jsxArray.push(           
            <Col className = "mt-3">
            <Card>   
                <p>{name}</p>
                
                <img src = {require("../../images/{name}.png")}/>      
            </Card> 
            </Col> 
            
            );
        }
        return jsxArray;
    } else {
        return (            
        <Col className = "mt-3">
        <Card>   
            <p >{name}</p>
            <img src = {require(`../../images/${name}.png`)}></img>       
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
                createElement(ing.quantity, ing.name)
            ))}

            </Row>
            </Container>
        </div>


    )
} 

export default DrinkMixer