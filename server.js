const express = require('express')
const constMessage = require('./src/shared/constant');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(constMessage))

app.get('/ping', (req, res) => res.send({ message: 'Pong' }))

app.listen(port, () => console.log(`Express API listening at http://localhost:${port}`))