const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

//creating new schema for login and signup
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }
})

//static signup method
userSchema.statics.signup = async function(email, password) {
    
    //validation
    // if(!email || !password) {
    //     throw Error('All fields must be filled')
    // }
    // if(!validator.isEmail(email)) {
    //     throw Error('Email is not valid')
    // }
    // if(!validator.isStrongPassword(password)) {
    //     throw Error('Password not strong enough')
    // }


    //validation testing prior to letting user sign up
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('email already in use')
    }

    //salt and hash the password prior to storing the the db.
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

//static login method
userSchema.statics.login = async function(email,password) {

       //validation testing prior to letting user login
    if(!email || !password) {
        throw Error('Error: All fields must be filled')
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Error: Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Error: Incorrect password')
    }

    return user

}

module.exports = mongoose.model('User', userSchema)