import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap"



function createElement (num, name) {
    const jsxArray = [];
    
    if (num > 1) {
        for (let i = 0; i < num; i++) {
            jsxArray.push(           
            <Col>
            <Card>   
                <p>{name}</p>      
            </Card> 
            </Col> 
            
            );
        }
        return jsxArray;
    } else {
        return (            
        <Col>
        <Card>   
            <p>{name}</p>      
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