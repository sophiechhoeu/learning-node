# Node JS notes
[Lynda guide](https://www.lynda.com/Node-js-tutorials/Socket-io/612195/677554-4.html)

* Javascript Benefits

- front end and back end share language

- front end and back end share

- dynamic language - type is determined by value not when it is declared

- works well with json - comes naturally to Javascript ideal for both on the front end and the back end


* Web Frameworks
 the supporting structure that allows you to build on top of it:

- Web api
A service that allows us to get and save data to our server or back end

### Web frameworks for Node:
ie Express, Koa, Sails


### Express
- runs within Node.js and is just on the backend

### Socket.io
- enables real time event based communication
ie express allows the client to send a request to the server but the server cannot send a request to the client

- socket.io solves this- it pushes notifications from the sever to the client when an event happens as well as other data.

- consists of two parts : client side library(runs on the browser), server side library for node.js

### Databases

- SQL or noSQL
*SQL*
**like an automatic car**
Structured Query Language - the data stored inside is structured. The database knows and cares about the structure and the tables that store this data must be designed with that in mind

*no SQL*
**like a manual car**
No structure - just collections of data

### MongoDB
[mLab](https://mlab.com/) to host for MongoDB

*follow steps to sign up for free*

### Mongoose

Allows us to work with our MongoDB database with object schemas.

Object schemas are Javascript objects we create that will represent the type of data we will put in our database.

Unlike mongoDB mongoose has a bit of structure which will mean we need to design initially.

benefits: validation

**installation**

```sh
$ npm install -s mongoose
```
