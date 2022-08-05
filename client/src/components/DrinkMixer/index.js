import React from "react";



const DrinkMixer  = ({newIngredients}) => {
    console.log(newIngredients)
    return(
        <div>
            {newIngredients && newIngredients.map(ing => (
                <p>{ing.name} {ing.quantity}</p>
            ))}
                
        </div>


    )
} 

export default DrinkMixer