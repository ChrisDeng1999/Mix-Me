const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Ingredient, Review, Spirit } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

    Query: {
        User: async () => {
            return await User.find({}).populate('Drink').populate({
                path: 'Drink',
                populate: ''
            });
        },
        Ingredient: async () => {
            return Ingredient.find({});
        }, 

        Spirit: async () => {
            return Spirit.find({});
        }, 
    },


    // Mutation: {




    // }, 







}











module.exports = resolvers;