const db = require('../config/connection');
const { Ingredient } = require('../models');
const { Spirit } = require('../models');

const ingredientData = require('./ingredientData.json');
const spiritData = require('./spiritData.json');

db.once('open', async () => {
  await Ingredient.deleteMany({});
  await Spirit.deleteMany({});


  const ingredient = await Ingredient.insertMany(ingredientData);
  const spirit = await Spirit.insertMany(spiritData);

  console.log('Ingredients seeded!');
  process.exit(0);
});
