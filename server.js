require('dotenv').config()
require('colors')
const express = require('express')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
const twilioApiKey = process.env.TWILIO_API_KEY
const twilioApiSecret = process.env.TWILIO_API_SECRET

app.get('/api/token-service', (req, res) => {
  const AccessToken = require('twilio').jwt.AccessToken
  const VideoGrant = AccessToken.VideoGrant

  const videoGrant = new VideoGrant()

  const { identity } = req.query

  // create access token tht is signed by twilio and return to client
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    // identity
    { identity }
  )

  token.addGrant(videoGrant)
  const accessToken = token.toJwt()

  res.send({
    accessToken,
  })
})

app.get('/api/room-exists', (req, res) => {
  const { roomId } = req.query
  const client = require('twilio')(twilioAccountSid, twilioAuthToken)

  client.video
    .rooms(roomId)
    .fetch()
    .then((room) => {
      if (room) {
        res.send({
          roomExists: true,
          room,
        })
      } else {
        res.send({
          roomExists: false,
        })
      }
    })
    .catch((error) => {
      res.send({
        roomExists: false,
        error,
      })
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () =>
  console.log(`\n** server is listening on port ${PORT}`.cyan)
)
