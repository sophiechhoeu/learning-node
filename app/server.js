var express = require('express')
var app = express()

//serving a static file use express.static
//passing entire directory
//app.listen (express server starting to listen for requests)
//pass in the port as first parameter
//pass in call back as second parameter
//assigned server as a variable 
app.use(express.static(__dirname))
var server = app.listen(3000, () => {
  console.log('server is listening on port', server.address().port)
})
