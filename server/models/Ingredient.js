const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  ingredientName: String,

  ingredientType: String,

  alcholProof: Number,
});

const Ingredient = model("Ingredient", ingredientSchema);
module.exports = Ingredient;
