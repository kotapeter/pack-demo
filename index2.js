const express = require('express')

const server = express()

server.get('/', (req, res) => {
  console.log('RUNTIME_ENV', process.env.RUNTIME)
  res.send('Hello Kinsta 2!')
})
const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`Example Worker has started`)
})
