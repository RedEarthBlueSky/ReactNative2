const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { name, email, password, anArray, anObject } = req.body

  try {
    const user = User({ name, email, password, anArray, anObject })
    await user.save()

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    console.log('Token from authRoutes: ', token)
    res.send({ token })
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

module.exports = router
