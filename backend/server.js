const express = require('express');
require('dotenv').config()
const propertyRoutes = require('./routes/properties')
const applicationRoutes = require('./routes/applications')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const cors = require('cors')

//expres app
const app = express()


//middleware
app.use(cors());
app.use(express.json())


//routes
app.use('/propertypage', propertyRoutes)
app.use('/propertypage', applicationRoutes)
app.use('/user', userRoutes)

//connect to db
mongoose.connect('mongodb://db/mission-5') 
.then(() => {
    app.listen(4000, () => {
        console.log('connected to DB and listening on port 4000')
    })
})
.catch((error) => {
    console.log(error)
})


// mongodb://localhost:27017/mission-5
//mongodb://db/mission-5

//

