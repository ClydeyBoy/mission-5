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
    Chattels1: {
        type: String,
    },
    Chattels2: {
        type: String,
    },
    Chattels3: {
        type: String,
    },
    Chattels4: {
        type: String,
    },
    Chattels5: {
        type: String,
    },
    Chattels6: {
        type: String,
    },
    Chattels7: {
        type: String,
    },
    Chattels8: {
        type: String,
    },
    Property_manager_name: {
        type: String,
        // required: true
    },
    Property_manager_number: {
        type: String,
        // required: true
    },
    Property_summary_para1: {
        type: String,
    },
    Property_summary_para2: {
        type: String,
    },
    Property_summary_para3: {
        type: String,
    },
    Property_summary_para4: {
        type: String,
    },
    Property_summary_para5: {
        type: String,
    },
    Property_summary_para6: {
        type: String,
    },
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