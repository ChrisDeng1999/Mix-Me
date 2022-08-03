import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_INGREDIENT} from "../utils/queries"

// import DrinkIngredients from '../components/DrinkIngredients';



const Mixer = () => {
    
    const {loading, data} = useQuery(QUERY_INGREDIENT)

    const ingredient = data?.Ingredient || [];
    
    useEffect(() => {
        console.log(ingredient)
    })

    return(
    <div>
        {ingredient && ingredient.map(ing => (
            <div key = {ing._id}>
                {ing.ingredientName}
                {ing.ingredientType}
            </div>
        ))}
   
    </div>)
}

export default Mixer;
