// import React from 'react';
// import {QUERY_INGREDIENT} from "../utils/queries"


// const DrinkIngredients = () => {
//     const {loading, data} = useQuery(QUERY_INGREDIENT)
    
//     const ingredient = data?.Ingredient || [];

//     useEffect(() => {
//         console.log(ingredient);
//     })

//     return(
//         <div>
//             {ingredient && ingredient.map(ing => (
//                 <div key = {ing._id}>
//                     <p>{ing.ingredientName}</p>
//                     <p>{ing.ingredientType}</p>
//                 </div>
//             ))}
//         </div>)
// }

// export default DrinkIngredients;