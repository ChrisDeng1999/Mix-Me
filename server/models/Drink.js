const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const drinkSchema = new Schema ({
    drinkName: {
        type: String,
        required: 'You need to name your drink dumbass!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    drinkIngredients: [
        { 
            type: Schema.Types.ObjectId,
            ref: 'Ingredient',
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
});

const Drink = model ('Drink', drinkSchema);

module.exports = Drink;