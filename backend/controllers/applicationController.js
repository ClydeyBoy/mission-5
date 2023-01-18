const Application = require('../models/sumbitApplicationModel')
const mongoose = require('mongoose')

//create a new tenancy application
const createApplication = async (request, response) => {
    const { propertyAddress, moveInDate, rentalPeriod, weeklyRent, viewing, applicantName, dateOfBirth, applicantEmail, applicantMobile, applicantPhone, refereeName, refereeRelationship, 
        refereePhone, refereeEmail, employerName, employerPhone, employerEmail, occupation, weeklyIncome, landlordAddress, timeAtAdress, reasonForLeaving} = request.body

    //add doc to db
    try {
        const application = await Application.create({ propertyAddress, moveInDate, rentalPeriod, weeklyRent, viewing, applicantName, dateOfBirth, applicantEmail, applicantMobile, applicantPhone, refereeName, refereeRelationship, 
            refereePhone, refereeEmail, employerName, employerPhone, employerEmail, occupation, weeklyIncome, landlordAddress, timeAtAdress, reasonForLeaving})
        response.status(200).json(application)
    } catch (error) {
        response.status(200).json({ error: error.message })
    }
}

module.exports = {
    createApplication
}