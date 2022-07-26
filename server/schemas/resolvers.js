const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Ingredient, Review, Spirit, Profile, Recipes } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

  Query: {
    users: async () => {
      return User.find().populate('drinks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('drinks');
    },
    drinks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return User.findOne(params).sort({ createdAt: -1 }).populate('drinks').populate({path: "drinks", populate: "drinkIngredients"});
    },
    drink: async (parent, { thoughtId }) => {
      return Drink.findOne({ _id: thoughtId });
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

    addRecipes: async (parent, { recipeName, ingredientList, spiritList }) => {
      const recipe = await Recipes.create({
        recipeName,
        ingredientList,
        spiritList
      })
    },
    addDrink: async (parent, { drinkName, drinkIngredients, drinkAuthor }) => {
      
      
        const drinks = await Drink.create({
          drinkName,
          drinkIngredients,
          drinkAuthor,
        });

        await User.findOneAndUpdate(
          { username: drinkAuthor },
          { $addToSet: { drinks: drinks._id } }
        );

        return drinks;
      
     
    },
    addDescription: async (parent, { description }) => {
      return User.findOneAndUpdate(
        {description:description}
        )
    },
    addImg: async (parent, { userImg }) => {
      return User.findOneAndUpdate(
        {userImg: userImg}
      )
    },

  }
};












module.exports = resolvers;