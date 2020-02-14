  const mongoose = require('mongoose')

  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: false,
      required: true,
    },
    somestuff: {
      type: String,
      unique: false,
      required: true,
    },
    otherstuff: {
      type: String,
      unique: false,
      required: true,
    }
  })

  mongoose.model('User', userSchema)
