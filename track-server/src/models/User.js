  const mongoose = require('mongoose')
  const bcrypt = require('bcrypt')

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

  //  using 'function' because we want 'this' to refer
  //  to the function scope
  userSchema.pre('save', function (next) {
    const user = this
    if (user.isModified('password')) {
      //  if the password has not been changed do nothing
      return next()
    }

    //  generate the salt and hash it
  })

  mongoose.model('User', userSchema)
