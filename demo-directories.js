//reading directories with the file system

var fs = require('fs')

fs.readdir(':c/',(err,data) => {
  console.log(data)
})
