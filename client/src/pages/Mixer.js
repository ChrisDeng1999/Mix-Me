import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';

import useQueryMultiple from '../components/queryMultiple';
import IngredientPortion from '../components/IngredientPortion';




const Mixer = () => {
    
    const [spirits, setSpirits] = useState([])
    const [secondarySpirits, setSecondarySpirits] = useState([])

    const [sweets, setSweets] = useState([])
    const [sours, setSours] = useState([])
    const [bothSweetSour, setBothSweetSour] = useState([])
    const [bitter, setBitter] = useState([])
    const [savory, setSavory] = useState([])
    const [mixer, setMixer] = useState([])
    const [accoutrements, setAccoutrements] = useState([])

    const [newIngredients, setNewIngredients] = useState([])
    const [ingredientPortion, setIngredientPortion] = useState(0)
    const [showButtons, setShowButtons] = useState({display : "none", index : 0})

    const [
        { loading: loading1, data: data1 },
        { loading: loading2, data: data2 }
    ] = useQueryMultiple()
    
    useEffect (() => {
        if (data1) {
        setSpirits(data1.Spirit.filter((spirit) => (
            spirit.spiritType === "Spirit"
        )))
        setSecondarySpirits(data1.Spirit.filter((spirit) => (
            spirit.spiritType === "Secondary Spirit"
        )))
        }
        if (data2) { 
        setSweets(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Sweet"
        )))
        setSours(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Sour"
        )))
        setBothSweetSour(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Sweet & Sour"
        )))
        setBitter(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Bitters"
        )))
        setSavory(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Savory"
        )))
        setMixer(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Mixers"
        )))
        setAccoutrements(data2.Ingredient.filter((ingredient) => (
            ingredient.ingredientType === "Accoutrements"
        )))
    }
    },[data1, data2])

    useEffect(() => {
        console.log(newIngredients)
    }, [newIngredients])


    const spirit = data1?.Spirit || [];
    const ingredient = data2?.Ingredient || [];

    function addIngredients (ingredientId, name) {
        setNewIngredients([...newIngredients, {id : ingredientId, quantity: ingredientPortion, name: name}])
    }

    return(
    <div className='row'>
        <div className='col'> 
        <h1>List of Spirits</h1>
        <div> 
        {spirit && spirits.map(spir => (
            <div key = {spir._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: spir._id}) : setShowButtons({display:"none", id: spir._id})}> </button>
                {spir.spiritName} - {spir.spiritType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {spir._id}
                name = {spir.spiritName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
            </div>
        ))}
        </div> 

        <h1>List of Seconday Spirits</h1>
        <div> 
        {spirit && secondarySpirits.map(spir => (
            <div key = {spir._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: spir._id}) : setShowButtons({display:"none", id: spir._id})}> </button>
                {spir.spiritName} - {spir.spiritType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {spir._id}
                name = {spir.spiritName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
            </div>
        ))}
        </div> 

        <h1>List of Sweet Ingredients</h1>
        <div>
            {ingredient && sweets.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                </div>
            ))}
        </div>

        <h1>List of Sour Ingredients</h1>
        <div>
            {ingredient && sours.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                
                
                </div>
            ))}
        </div>

        <h1>List of Sweet & Sour Ingredients</h1>
        <div>
            {ingredient && bothSweetSour.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                </div>
            ))}
        </div>

        <h1>List of Bitter Ingredients</h1>
        <div>
            {ingredient && bitter.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                </div>
            ))}
        </div>

        <h1>List of Savory Ingredients</h1>
        <div>
            {ingredient && savory.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                </div>
            ))}
        </div>
        
        <h1>List of Mixers</h1>
        <div>
            {ingredient && mixer.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                </div>
            ))}
        </div>

        <h1>List of Accoutrements</h1>
        <div>
            {ingredient && accoutrements.map(ing => (
                <div key = {ing._id}>
                <button className = "circle" onClick = {()=> showButtons.display === "none"? setShowButtons({display:"show", id: ing._id}) : setShowButtons({display:"none", id: ing._id})}></button>
                {ing.ingredientName} - {ing.ingredientType}
                <IngredientPortion 
                showButtons = { showButtons }
                setIngredientPortion = { setIngredientPortion }
                id = {ing._id}
                name = {ing.ingredientName}
                addIngredients = {addIngredients}
                ingredientPortion = { ingredientPortion }
                />
                </div>
            ))}
        </div>
        </div>
        <div className='col'>
        <h1>Ingredient Added</h1>
        {newIngredients.map(ing => <p>{ing.name} {ing.quantity}</p>)}
        <button>Mix Me</button>
        </div>
       

    </div>)
}

export default Mixer;
