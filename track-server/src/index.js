  require('./models/User')
  const express = require('express')
  const mongoose = require('mongoose')
  const bodyParser = require('body-parser')
  const authRoutes = require('./routes/authRoutes')
  const requireAuth = require('./middleware/requireAuth')

  const app = express()
  app.use(bodyParser.json())
  app.use(authRoutes)

  const mongoUri = 'mongodb+srv://redearthbluesky:passwordpassword@cluster0-jnmrs.mongodb.net/test?retryWrites=true&w=majority'

  mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })

  mongoose.connection.on('connected', () => {
    console.log('Connected to mongoDB.Atlas instance')
  })

  mongoose.connection.on('error', (err) => {
    console.error('Error connected to mongo: ', err)
  })

  //  anytime a get type request is made to the root route('/')
  //  of the project fire a function
  app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
  })

  const port = 3000
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })
