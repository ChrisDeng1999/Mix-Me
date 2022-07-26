const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  ingredientName: String,
  ingredientType: String,
  alcoholProof: Number,
  ingredientUrl: String,
})

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = Ingredient;


