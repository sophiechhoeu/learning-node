//requiring file system
var fs = require('fs')

//accessing JSON file directly without using readfile system
var data = require('./data.json')

//accessing properties within the object
console.log(data.name)

//accessing file system
//passing location of the file (asynchronous function)
//callback will pass an error then the data that's readin
//specifiy file format
//this will display json file

//previously it was undefined to change this
//taking data param converting it to json, overwriting then able to access the name 

fs.readFile('./data.json', 'utf-8', (err,data) => {
  var data = JSON.parse(data)
  console.log(data.name)
})
