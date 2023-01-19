const mongoose = require('mongoose');

const Schema = mongoose.Schema

//creating new schema to store property information
const propertySchema = new Schema ({
    Address: {
        type: String,
        // required: true
    },
    Suburb: {
        type: String,
        // required: true
    },
    Bedrooms: {
        type: Number,
        // required: true
    },
    Bathrooms: {
        type: Number,
        // required: true
    },
    Carparks: {
        type: Number,
        // required: true
    },
    Property_type: {
        type: String,
        // required: true
    },
    Rent: {
        type: String,
        // required: true
    },
    Available: {
        type: String,
        // required: true
    },
    Amenities: {
        type: String,
    },
    Pets_allowed: {
        type: String,
        // required: true
    },
    Property_id: {
        type: String,
    },
    // Chattels: [String]
    // ,
    Property_manager_name: {
        type: String,
        // required: true
    },
    Property_manager_number: {
        type: String,
        // required: true
    },
    // Property_summary: [String]
    // ,
    Property_image: {
        type: String,
        // required: true
    },
    Property_manager_photo: {
        type: String,
        // required: true
    },
})

module.exports = mongoose.model('Property', propertySchema)