const config = require('config')
const strpad = require('strpad')
const ip = require('ip')

const PORT = config.get('APP.PORT')
const VERSION = config.get('APP.VERSION')
const IP = ip.address()

const charWidth = 40
const padChar = '='

const separator = strpad.center(padChar, charWidth, padChar)
const titleLine = strpad.center(
  `  LastChapter API ${VERSION}  `,
  charWidth,
  padChar
)
const runningOnLine = strpad.center(`  ${IP}:${PORT}  `, charWidth, padChar)

module.exports = `
${separator}
${titleLine}
${separator}
${runningOnLine}
${separator}
`
