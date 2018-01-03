var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

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

var messages = [
  {name: 'Tim', message: 'Hi'},
  {name: 'Jane', message: 'herro'}
]

app.get('/messages',(req,res) => {
  res.send(messages)
})

app.post('/messages',(req,res) => {
  messages.push(req.body)
  io.emit('message', req.body)
  res.sendStatus(200)
})

io.on('connection',(socket) => {
  console.log('a user connected')
})

var server = http.listen(3000, () => {
  console.log('server is listening on port', server.address().port)
})
