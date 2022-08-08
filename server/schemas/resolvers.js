const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Ingredient, Review, Spirit, Profile, Recipes } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

    Query: {
        User: async () => {
            return await User.find({});
        },
        Users: async (parent, { userId }) => {
          return User.findOne({ _id: userId}).populate("Recipes");
      },
        Ingredient: async () => {
            return Ingredient.find({});
        }, 

        Spirit: async () => {
            return Spirit.find({});
        }, 
        Recipes: async () => {
          return Recipes.find({});
      }, 
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
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
          addRecipes: async (parent, {recipeName, ingredientList, spiritList}) => {
        
            const recipe = await Recipes.create({
                recipeName, 
                ingredientList, 
                spiritList
            })
          
            await User.findOneAndUpdate(
              { _id: userId },
              { $addToSet: { recipe: recipe._id } }
            );
              return recipe;
            }
          },

  }














module.exports = resolvers;