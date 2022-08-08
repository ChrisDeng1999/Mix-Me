const db = require('../config/connection');
const { Ingredient } = require('../models');
const { Spirit } = require('../models');
const { User } = require('../models');
const { Recipes } = require('../models');
const { Drink } = require('../models');


const ingredientData = require('./ingredientData.json');
const spiritData = require('./spiritData.json');
const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const drinkData = require('./drinkData.json');

db.once('open', async () => {
  try {
    await Ingredient.deleteMany({});
    await Spirit.deleteMany({});
    await User.deleteMany({});
    await Drink.deleteMany({});
    await Recipes.deleteMany({});
  
  
    const ingredient = await Ingredient.insertMany(ingredientData);
    const spirit = await Spirit.insertMany(spiritData);
    const user = await User.create(userData);
    const recipe = await Recipes.insertMany(recipeData);

    for (let i = 0; i < drinkData.length; i++) {
    
      const { _id, drinkAuthor } = await Drink.create(drinkData[i]);
      const user = await User.findOneAndUpdate(
        { username: drinkAuthor },
        {
          $addToSet: {
            drinks: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  
  console.log('Ingredients seeded!');
    process.exit(0);

});

