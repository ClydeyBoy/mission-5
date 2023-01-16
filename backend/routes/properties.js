const express = require('express');
const { getProperties, getProperty} = require('../controllers/propertyController')


const router = express.Router()

//GET all properties
router.get('/', getProperties)

//GET a single property
router.get('/:id', getProperty )

// //POST a new property
// router.post('/', createProperty)

module.exports = router