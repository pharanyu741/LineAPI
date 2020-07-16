const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000


app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port)

app.get('/', (req, res) => {
    res.send("hello world")
})