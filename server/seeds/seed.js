const db = require('../config/connection');
const { Ingredient } = require('../models');
const { Spirit } = require('../models');
const { User } = require('../models');

const ingredientData = require('./ingredientData.json');
const spiritData = require('./spiritData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await Ingredient.deleteMany({});
  await Spirit.deleteMany({});
  await User.deleteMany({});


  const ingredient = await Ingredient.insertMany(ingredientData);
  const spirit = await Spirit.insertMany(spiritData);
  const user = await User.insertMany(userData);

  console.log('Ingredients seeded!');
  process.exit(0);
});
