import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';

import useQueryMultiple from '../components/queryMultiple';





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



    const [
        { loading: loading1, data: data1 },
        { loading: loading2, data: data2 }
    ] = useQueryMultiple()
    
    useEffect (() => {
        if (data1) {
            setSpirits(data1.Spirit.filter((spirit) => (
                spirit.spiritType === "Sweet"
            )))
            setSecondarySpirits(data1.Spirit.filter((spirit) => (
                spirit.spiritType === "Sweet"
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
        console.log(data2);
    },[data2])


    const spirit = data1?.Spirit || [];
    const ingredient = data2?.Ingredient || [];


    return(
    <div>
        <h1>List of Spirits</h1>
        <div> 
        {spirit && spirit.map(spir => (
            <div key = {spir._id}>
                <p>{spir.spiritName} - {spir.spiritType}</p>
            </div>
        ))}
        </div> 
        <h1>List of Sweet Ingredients</h1>
        <div>
            {ingredient && sweets.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <h1>List of Sour Ingredients</h1>
        <div>
            {ingredient && sours.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <h1>List of Sweet & Sour Ingredients</h1>
        <div>
            {ingredient && bothSweetSour.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <h1>List of Bitter Ingredients</h1>
        <div>
            {ingredient && bitter.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <h1>List of Savory Ingredients</h1>
        <div>
            {ingredient && savory.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <h1>List of Mixers</h1>
        <div>
            {ingredient && mixer.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
        <h1>List of Accoutrements</h1>
        <div>
            {ingredient && accoutrements.map(ing => (
                <div key = {ing._id}>
                    <p>{ing.ingredientName} - {ing.ingredientType}</p>
                </div>
            ))}
        </div>
    </div>)
}

export default Mixer;
