const Property = require('../models/propertyModel')
const mongoose = require('mongoose')

//get all properties
const getProperties = async (request, response) => {
    const properties = await Property.find({})
    response.status(200).json(properties)
}


module.exports = {
    // createProperty,
    getProperties,
    // getProperty
}