const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const drinkSchema = new Schema({
    drinkName: {
        type: String,
        required: 'You need to name your drink!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    drinkAuthor: {
    type: String,
    required: true,
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
            reviewText: {
                type: String,
                trim: true,
            },
            reviewAuthor: {
                type: String,
                required: true,
                trim: true,
              },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp)  
              },
        }, 
    ],
});

const Drink = model('Drink', drinkSchema);

module.exports = Drink;