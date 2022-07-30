const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema ({
    reviewText: {
        type: String,
        trim: true,
    },
    reviewAuthor: {
        type: String,
        required: true,
        trim: true,
      },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)  
      },

});

const Review = model('Review', reviewSchema);

module.exports = Review;