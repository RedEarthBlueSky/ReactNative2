const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middleware/requireAuth')

const Track = mongoose.model('Track')

const router = express.Router()

// require user to be signed in
router.use(requireAuth)

// request handler for list of tracks
router.get('/tracks', async (req, res) => {
  // get tracks from user ID
  const tracks = await Track.find({ userId: req.user._id })

  res.send({ tracks })
})

router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: 'Provide a name and locations' })
  }

  try {
    const track = new Track({ name, locations, userId: req.user._id })
    await track.save()
    res.send(track)
  } catch (err) {
    res.status(422).send({ error: `Error saving track: ${err.message}` })
  }
})

module.exports = router
