const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

const users = require('./middlewares/users/')

app.use(bodyParser.json())

// Task model => tasks collection
// const Task = mongoose.model('Task', {
//   text: String,
//   completed: Boolean,
//   date: Date,
// })

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World',
  })
})

// use async if we want to use await inside the function
app.get('/users', users.getUsers)

app.listen(port, () => {
  console.log(`Express app is running on localhost:${port}`)
})
