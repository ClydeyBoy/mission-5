const Property = require('../models/propertyModel')
const mongoose = require('mongoose')

//get all properties
const getProperties = async (request, response) => {
    const properties = await Property.find({})
    response.status(200).json(properties)
}


// get a single property
const getProperty = async (request, response) => {
    const { id } = request.params

//check if the requested property exists
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({error: 'no such property'})
    }

    const property = await Property.findById(id)
    
//check if the requested property exists
    if (!property) {
        return response.status(404).json({ error: 'No such property' })
    }
    response.status(200).json(property)
}


// //create a new property
// const createProperty = async (request, response) => {
//     const { Address, Suburb, Bedrooms, Bathrooms, Carparks, Property_type, Rent, Available, Amenities, Pets_allowed, Property_id, Chattels, Property_manager_name, Property_manager_number, Property_summary, Property_image, Property_manager_photo } = request.body

//     //add doc to db
//     try {
//         const property = await Property.create({ Address, Suburb, Bedrooms, Bathrooms, Carparks, Property_type, Rent, Available, Amenities, Pets_allowed, Property_id, Chattels, Property_manager_name, Property_manager_number, Property_summary, Property_image, Property_manager_photo })
//         response.status(200).json(property)
//     } catch (error) {
//         response.status(200).json({ error: error.message })
//     }
// }

module.exports = {
    // createProperty,
    getProperties,
    getProperty
}