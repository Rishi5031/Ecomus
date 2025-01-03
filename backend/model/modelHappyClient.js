const mongoose = require('mongoose');

// Define the schema for HappyClient
const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false, // Image is optional
    },
    productTitle: {
        type: String,
        required: true,
    },
    productPrice: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set createdAt to current date
    },
});

// Create the model from the schema
const HappyClient = mongoose.model('Review', reviewSchema);

// Export the model
module.exports = HappyClient;
