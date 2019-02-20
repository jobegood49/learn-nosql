const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World',
  })
})

app.listen(port, () => {
  console.log(`Express app is running on localhost:${port}`)
})
