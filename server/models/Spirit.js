const { Schema, model } = require('mongoose');


const spiritSchema = new Schema ({
    spiritName: String,
    spiritType: String,
    alcoholProof: Number,
    spiritImage: String,
})

const Spirit = model('Spirit', spiritSchema);

module.exports = Spirit;