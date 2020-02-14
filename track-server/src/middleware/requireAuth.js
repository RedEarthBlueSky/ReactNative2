const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const User = mongoose.model('User')

// JSON Web Token Middleware to...
// authenticate the user
module.exports = (req, res, next) => {
  //  retrieve the authorization header
  //  Express downcases any authorization names
  const { authorization } = req.headers
  // authorization === 'Bearer 	+ JWT'

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in. ' })
  }

  // console.log('authorization:  ', authorization)
  const token = authorization.replace('Bearer ', '')
  // console.log('Token: ', token)
  jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
    // console.log('payload: ', payload)
    if (err) {
      return res.status(401).send({ error: 'You must be signed in.' })
    }

    const { userId } = payload

    const user = await User.findById(userId)
    req.user = user
    next()
  })
}
