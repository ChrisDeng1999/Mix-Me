import React from 'react'; 

const IngredientPortion = (props) => {
    return(
        <div> 
        {props.showButtons.id === props.id?(
            <div className = {"show"}> 
            <button onClick={() => props.setIngredientPortion(props.ingredientPortion + 1)}>+</button>
            {props.ingredientPortion}
            <button onClick={() => props.setIngredientPortion(props.ingredientPortion - 1)}>-</button>
            <button onClick = {() => props.addIngredients(props.id, props.name, props.url)}>Add Ingredients</button>
            </div>
        ):(
            <div className = {"none"}> 
            <button className = "plus" onClick={() => props.setIngredientPortion(props.ingredientPortion + 1)}>+</button>
            {props.ingredientPortion}
            <button className = "minus" onClick={() => props.setIngredientPortion(props.ingredientPortion - 1)}>-</button>
            <button onClick = {() => props.addIngredients(props.id, props.name, props.url)}>Add Ingredients</button>
            </div>
        )}
        </div>
    )
}


export default IngredientPortion;