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

module.exports = {
  // ---------------------------------------------------------------------------
  // Get all users
  getUsers: async (req, res) => {
    const users = await User.find({})
    res.send({
      message: 'List of users',
      users: users,
    })
  },

  // ---------------------------------------------------------------------------
  // Create new user
  createNewUser: async (req, res) => {
    const newUser = new User({
      name: req.body.name || null,
      age: req.body.age || null,
      email: req.body.email || null,
      birthdate: req.body.birthdate || null,
    })

    await newUser.save()

    res.send({
      message: 'Created new user',
      newUser: newUser,
    })
  },

  // ---------------------------------------------------------------------------
  // Delete all users
  deleteAllUsers: (req, res) => {
    // Empty all users
    users = []

    res.send({
      message: 'All users has been deleted',
      users: users,
    })
  },

  // ---------------------------------------------------------------------------
  // Delete one user by id
  deleteOneUserById: (req, res) => {
    // Get id from params (/users/:id)
    const id = Number(req.params.id)

    // Replace users with filtered users
    users = users.filter(user => user.id !== id)

    res.send({
      message: 'One user has been deleted',
      id: id,
    })
  },

  // ---------------------------------------------------------------------------
  // Update one user by id
  updateOneUserById: (req, res) => {
    // Get id from params (/users/:id)
    const id = Number(req.params.id)

    // Get new name from request body (req.body)
    const newName = req.body.name

    // Change name in user with matching id
    const newUsers = users.map(user => {
      if (user.id === id) {
        user.name = newName
        return user
      } else {
        return user
      }
    })

    res.send({
      message: 'One user has been updated',
      id: id,
      newName: newName,
    })
  },
}
