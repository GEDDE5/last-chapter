// eslint-disable-next-line
const express = require('express')
const server = express()

const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')

server
  .use(cors({ credentials: true }))
  .use(cookieParser())
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '/public')))

module.exports = server
