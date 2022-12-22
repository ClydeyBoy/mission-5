const {MongoClient} = require('mongodb')
let dbConnection

module.exports = {

    connectToDb: (callback) => {
        MongoClient.connect('mongodb://localhost:27017/mission-5')
            .then((client) =>{
                dbConnection = client.db()
                return callback()
            })
            .catch(error => {
                console.log(error)
                return callback(error)
            })
    },

    getDb: () => dbConnection
}