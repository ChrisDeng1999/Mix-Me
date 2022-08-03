const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Ingredient, Review, Spirit } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

    Query: {
        User: async () => {
            return await User.find({}).populate('Drink').populate({
                path: 'Drink',
                populate: 'Ingredient'
            });
        },
        Ingredient: async () => {
            return Ingredient.find({});
        }, 

        Spirit: async () => {
            return Spirit.find({});
        }, 
    },

    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const profile = await Profile.create({ name, email, password });
            const token = signToken(profile);
      
            return { token, profile };
          },
          login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
    }







}











module.exports = resolvers;