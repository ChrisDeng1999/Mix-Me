const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  recipeName: String,
  ingredientList: String,
  spiritList: String,
})

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
