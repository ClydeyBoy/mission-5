const express = require('express');
const {createApplication} = require('../controllers/applicationController')


const router = express.Router()

//POST a new property
router.post('/:id', createApplication)

module.exports = router