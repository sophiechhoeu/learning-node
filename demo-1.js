
//bringing in the file system
var fs = require('fs')

var data = {
  name: 'Bob'
}

//accessing the file system called write File
//first param = path
//second param is the data (which needs to match the information passed through in this case json)
// call back (otherwise an error, and pass the err if there is one)

fs.writeFile('data.json', JSON.stringify(data), (err) => {
  console.log('write finished', err)
})
