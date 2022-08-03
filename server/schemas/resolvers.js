const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Ingredient, Review, Spirit, Profile } = require('../models');
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
            const user = await User.create({ name, email, password });
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      console.log(email, password);
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
          },
    }







}











module.exports = resolvers;