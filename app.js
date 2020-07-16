const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

// app.post('/webhook', (req, res) => res.sendStatus(200))
// app.listen(port)

app()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/', (req, res) => res.send(`Hi there! This is a nodejs-line-api running on PORT: ${ PORT }`))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));