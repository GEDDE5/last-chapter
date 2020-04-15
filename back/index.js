const PORT = require('config').get('APP.PORT')
const server = require('server').listen(PORT)
const message = require('utils/log/messages/init-server')

server.on('listening', () => console.log(message))
