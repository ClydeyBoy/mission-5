const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(cors());
app.use(express.json())
let database

app.listen(4000, () => {
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (error, result) => {
        if (error) throw error
        database = result.db('mission-5')
        console.log('connection successful')
    })
})

// app.get('/', (request, response) => {
//     response.send('Welcome to MongoDB API')
// })

app.get('/propertypage/:id', (request, response) => {
    database.collection('Properties').find({}).toArray((error, result) => {
        if (error) throw error
        response.send(result)
    })
})

