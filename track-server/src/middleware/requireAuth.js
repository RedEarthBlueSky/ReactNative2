const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const User = mongoose.model('User')

// JSON Web Token Middleware to authenticate the user
module.exports = (req, res, next) => {
  const { authorization } = req.headers
  // authorization === 'Bearer 	+ JWT'

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in. ' })
  }

  const token = authorization.replace('Bearer ', '')

  jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be signed in.' })
    }

    const { userId } = payload

    const user = await User.findById(userId)
    req.user = user
    next()
  })
}
