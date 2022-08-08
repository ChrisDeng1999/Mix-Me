const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipeName: String,
  ingredientList: String,
  spiritList: String,
})

const Recipes = model("Recipes", recipeSchema);

module.exports = Recipes;
