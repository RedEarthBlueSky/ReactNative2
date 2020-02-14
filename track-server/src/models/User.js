  const mongoose = require('mongoose')

  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: false,
      required: false
    },
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
    anArray: {
      type: Array,
      unique: false,
      required: false,
    },
    anObject: {
      type: Object,
      unique: false,
      required: false,
    }
  })

  mongoose.model('User', userSchema)
