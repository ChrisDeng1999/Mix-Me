import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';

// import {QUERY_SPIRIT, QUERY_INGREDIENT} from "../utils/queries"
import useQueryMultiple from '../components/queryMultiple';

// import DrinkIngredients from '../components/DrinkIngredients/index';



const Mixer = () => {
    

    const [
        { loading: loading1, data: data1 },
        { loading: loading2, data: data2 }
    ] = useQueryMultiple()

    // const {loading, data} = useQuery(QUERY_SPIRIT)
    // const {loading2, data2} = useQuery(QUERY_INGREDIENT)

    const spirit = data1?.Spirit || [];
    const ingredient = data2?.Ingredient || [];


    useEffect(() => {
        console.log(spirit);
    })

    return(
    <div>
        <div>
            {/* <DrinkIngredients /> */}
        </div>
        <div>
            {ingredient && ingredient.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName}</p>
                    <p>{ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <div> 
        {spirit && spirit.map(spir => (
            <div key = {spir._id}>
                <p>{spir.spiritName}</p>
                <p>{spir.spiritType}</p>
            </div>
        ))}
        </div> 
    </div>)
}

export default Mixer;
