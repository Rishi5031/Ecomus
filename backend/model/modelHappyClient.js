const mongoose = require('mongoose');

// Define the schema for HappyClient
const happyClientSchema = new mongoose.Schema({
    stars: {
        type: Number,
        required: true,
        min: 1, // Minimum rating of 1 star
        max: 5  // Maximum rating of 5 stars
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true, // URL of the client's image
    },
    product_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0, // price should be a positive number
    },
}, { timestamps: true }); // adds createdAt and updatedAt fields

// Create the model from the schema
const HappyClient = mongoose.model('HappyClient', happyClientSchema);

// Export the model
module.exports = HappyClient;
