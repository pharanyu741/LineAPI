const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000


app.post('/webhook', (req, res) => {
    let replyToken = req.body.events[0].replyToken;
    let msg = req.body.events[0].message.text;
        
    console.log(`Message token : ${ replyToken }`);
    console.log(`Message from chat : ${ msg }`);

    res.json({
        status: 200,
        message: `Webhook is working!`
    });
})

app.get('/', (req, res) => {
    res.send("hello world")
})

// PORT
app.listen(port)