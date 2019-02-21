require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const url = process.env.URL // Connection URL
const dbName = process.env.DB_NAME // Database Name

const createNewUser = function(db) {
  const newUser = {
    name: 'Haidar Hanif',
    age: '25',
    email: 'mhaidarhanif@gmail.com',
  }

  db.collection('users').insert(newUser, (err, result) => {
    if (err) {
      console.log({
        message: 'Failed to create new user',
      })
    } else {
      console.log({
        message: 'Created new user',
        result: result,
      })
    }
  })
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log({
    message: 'Connected successfully to server',
  })

  const db = client.db(dbName)

  // insertDocument
  createNewUser(db)

  client.close()
})
