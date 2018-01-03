var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose')

//serving a static file use express.static
//passing entire directory
//app.listen (express server starting to listen for requests)
//pass in the port as first parameter
//pass in call back as second parameter
//assigned server as a variable
//info passed through our browser needs to be urlencoded and this is done through bodyparser
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var dbUrl = 'mongodb://user:user@ds239117.mlab.com:39117/learning-node'

//message model for mongoose
// passing schema with the properties and type
var Message = mongoose.model('Message', {
    name: String,
    message: String
})

//instead of sending an array we'll send messages from mongoDB
//message.find selecting all the messages passing no requirements through
//create error call back
//include all messages in the call back

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) =>{
        res.send(messages)
    })
})

//creating an object based on our new mongoose model
//pass the req.body because that's where our message is contained
//message.save to mongo DB
//if successful message save to the mongoDB then it will emit a socketIO EVENT
//it will send a status of 200
//if it errors it'll send a status of 500.

app.post('/messages', (req, res) => {
    var message = new Message(req.body)

    message.save((err) => {
        if (err)
            sendStatus(500)
        io.emit('message', req.body)
        res.sendStatus(200)
    })

})



io.on('connection',(socket) => {
  console.log('a user connected')
})

mongoose.connect(dbUrl, { useMongoClient: true }, (err) => {
    console.log('mongo db connection', err)
})


var server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port)
})
