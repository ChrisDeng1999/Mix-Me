const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Ingredient, Review } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

    Query: {
        Users: async () => {
            return await User.find({}).populate('Drinks').populate({
                path: 'classes',
                populate: ''
            });
        }



    },


    Mutation: {




    }, 







}











module.exports = resolvers;