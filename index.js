const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

// MONGOOSE
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
})

// User model => users collection
const User = mongoose.model('User', {
  name: String,
  age: Number,
  email: String,
  birthDate: Date,
})

// Task model => tasks collection
const Task = mongoose.model('Task', {
  text: String,
  completed: Boolean,
  date: Date,
})

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World',
  })
})

// use async if we want to use await inside the function
app.get('/users', async (req, res) => {
  const users = await User.find() // slow process
  // wait until User.find() is finished using await

  // fast process
  res.send({
    message: 'List of all users',
    users: users,
  })
})

app.listen(port, () => {
  console.log(`Express app is running on localhost:${port}`)
})
