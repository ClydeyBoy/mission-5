const mongoose = require('mongoose');

const Schema = mongoose.Schema

//creating new schema to post tenancy application
const submitApplicationSchema = new Schema ({
    propertyAddress: {
        type: String,
        // required: true
    },
    moveInDate: {
        type: String,
        // required: true
    },
    rentalPeriod: {
        type: String,
        // required: true
    },
    weeklyRent: {
        type: String,
        // required: true
    },
    viewing: {
        type: String,
        // required: true
    },
    applicantName: {
        type: String,
        // required: true
    },
    dateOfBirth: {
        type: Date,
        // required: true
    },
    applicantEmail: {
        type: String,
        // required: true
    },
    applicantMobile: {
        type: String,
    },
    applicantPhone: {
        type: String,
        // required: true
    },
    refereeName: {
        type: String,
    },
    refereeRelationship: {
        type: String,
    },
    refereePhone: {
        type: String,
        // required: true
    },
    refereeEmail: {
        type: String,
        // required: true
    },
    employerName: {
        type: String,
        // required: true
    },
    employerPhone: {
        type: String,
        // required: true
    },
    employerEmail: {
        type: String,
        // required: true
    },
    occupation: {
        type: String,
        // required: true
    },
    weeklyIncome: {
        type: String,
        // required: true
    },
    landlordAddress: {
        type: String,
        // required: true
    },
    timeAtAdress: {
        type: String,
        // required: true
    },
    reasonForLeaving: {
        type: String,
        // required: true
    },
})

module.exports = mongoose.model('application', submitApplicationSchema)