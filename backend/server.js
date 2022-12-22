const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
server.use(express.json())
const { connectToDb, getDb } = require('./db')

//db connection
let db

connectToDb((error) => {
    if (!error) {
        server.listen(4000, () => {
            console.log("listening to port 4000");
        });
        db = getDb()
    }
})


//routes
server.get('/', (request, response) => {
    let objects = []

    db.collection('testing')
        .find()
        .forEach(object => { objects.push(object) })
        .then(() => {
            response.json(objects)
        })
})


// const express = require('express');
// const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient

// const app = express()

// app.use(cors());
// app.use(express.json())
// let database

// app.listen(4000, () => {
//     MongoClient.connect('mongodb://db/mission-5', { useNewUrlParser: true }, (error, result) => {
//         if (error) throw error
//         database = result.db('mission-5')
//         console.log('connection successful')
//     })
// })

// app.get('/', (request, response) => {
//     response.send('Welcome to MongoDB API')
// })

// app.get('/api', (request, response) => {
//     database.collection('testing').find({}).toArray((error, result) => {
//         if (error) throw error
//         response.send(result)
//     })
// })

