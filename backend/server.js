const express = require('express');
const server = express();
const cors = require('cors');
server.use(cors());
server.use(express.json())
const {connectToDb, getDb} = require('./db')

//db connection
let db

connectToDb((error) => {
    if(!error) {
        server.listen(4000, () => {
            console.log("listening to port 4000");
        });
        db = getDb()
    }
})


//routes
server.get('/',(request,response) => {
    let objects = []

    db.collection('testing')
        .find()
        .forEach(object => {objects.push(object)})
        .then(() => {
            response.json(objects)
        })
})


