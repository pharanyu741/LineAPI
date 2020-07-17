const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const axios = require('axios')
const port = process.env.PORT || 4000
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message/reply';
const LINE_HEADER = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {jhfNrA/i4anorqWcZXFexfXBzehsU8srKgjTTXPVPQvlAjDk5/JBehz+fLidbgRGZ4nUZxUIxGY0lu5SvUKnZBxLRPCX1iiwm7Q4OzWNREUUWWyBkpXMG3f0knk5VrDJIGWYhrHu/GeuuWUAFTvTawdB04t89/1O/w1cDnyilFU=}'
};

/*/*/
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let event = req.body.events[0];
    let token = event.replyToken
    let msg = event.message.text
    splitStr(token, msg)
    res.sendStatus(200)
})

/* FUNCTIONS */
function splitStr(token, msg) {
    let newMs = msg.split(" ")
    if(event.message.type === 'text') {
        let num = newMs[0]
        let Currency = newMs[1]
        if(!isNaN(num)) {
            exchangeRate(token, num, Currency)
        }else{
            let res = "กรุณาระบุ จำนวนเงินเป็นตัวเลขเท่านั้น"
            reply(token, res)
        }
    }

}

function exchangeRate(token, num, Currency) {
    axios.get('http://data.fixer.io/api/latest?access_key=0ce347832d173f2f35790ef8ae0b527f&format=1')
    .then(response => {
        let euroBase = 1/response.data.rates[Currency]
        let rate = euroBase * response.data.rates['THB']
        let sum = rate*num
        let res = "เป็นเงิน "+sum.toFixed(2)+" บาท";
        reply(token, res)
    })
    .catch(error => {
        console.log(error);
    })
}

function reply(token, res) {
    let body = JSON.stringify({
        replyToken: token,
        messages: [{
            type: 'text',
            text: res
        }]
    })
    request.post({
        url: LINE_MESSAGING_API,
        headers: LINE_HEADER,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

app.listen(port)