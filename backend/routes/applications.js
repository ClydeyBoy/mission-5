const express = require('express');
const {createApplication} = require('../controllers/applicationController')


const router = express.Router()

//POST a new tenancy application
router.post('/', createApplication)

module.exports = router