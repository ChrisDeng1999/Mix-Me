const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema ({
    ingredientName: String,
    ingredientType: String,
  


})

module.exports = ingredientSchema;