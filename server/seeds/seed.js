const db = require('../config/connection');
const { Ingredient } = require('../models');
const { Spirit } = require('../models');
const { User } = require('../models');
const { Recipes } = require('../models');

const ingredientData = require('./ingredientData.json');
const spiritData = require('./spiritData.json');
const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

db.once('open', async () => {
  await Ingredient.deleteMany({});
  await Spirit.deleteMany({});
  await User.deleteMany({});
  await Recipes.deleteMany({});


  const ingredient = await Ingredient.insertMany(ingredientData);
  const spirit = await Spirit.insertMany(spiritData);
  const user = await User.create(userData);
  const recipe = await Recipes.insertMany(recipeData);


  console.log('Ingredients seeded!');
  process.exit(0);
});
