const express = require('express');
const propertyRoutes = require('./routes/properties')
const mongoose = require('mongoose')
const cors = require('cors')

//expres app
const app = express()


//middleware
app.use(cors());
app.use(express.json())
// app.use((request, response, next) => {
//     console.log(request.path, request.method)
//     next()
// })

//routes
app.use('/propertypage', propertyRoutes)

//connect to db
mongoose.connect('mongodb://localhost:27017/mission-5')
.then(() => {
    app.listen(4000, () => {
        console.log('connected to DB and listening on port 4000')
    })
})
.catch((error) => {
    console.log(error)
})


