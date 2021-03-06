# Node JS notes
[Lynda guide](https://www.lynda.com/Node-js-tutorials/Socket-io/612195/677554-4.html)

* Javascript Benefits

- front end and back end share language

- front end and back end share

- dynamic language - type is determined by value not when it is declared

- works well with json - comes naturally to Javascript ideal for both on the front end and the back end

- callback function format:
() => {

}
### Synchronous Loading & Requests
- Loading
When the browser must halt the rendering of the page in order to complete the execution of Javascript code. When the browser encounters a synchronous JavaScript tag, it blocks the page from rendering until the code execution completes.

- Requests
Synchronous XHR is now in deprecation state.

**example**

```javascript

var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

* request.send : sends the request
* null : parameter indicates that no body content is need for the GET request
* if function : checks the status code after the transaction is completed. If the result is 200 - http's OK result then the document text content is outputted to the console.


### Asynchronous Loading & requests
- Loading
In this method Javascript code is processed in parallel to the rest of the page content. This means that even if a tag is slow to respond or load it does not slow down the rest of the page.

- Requests
If you use an asynchronous XMLHttpRequest, you receive a callback when the data has been received. This lets the browser continue to work as normal while your request is being handled.


**Example**
Sending a file to the console log
```javascript

var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
```

- true parameter: indicates the request should be handled asynchronously
- onload attribute: creates an event handler function object which looks at readyState to see if the transaction is completed if it is and the status returns 200 then it will display received content if an error occurs the error message is displayed.
- send: initiates the request



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

### Testing

- Jasmine

unit test: a test that only checks a signle thing

**installation**

```sh
$ npm install --save-dev jasmine
```

accessing the module
```sh
$ ./node_modules/.bin/jasmine init

```

*make sure you are in the spec folder to run jasmine tests*

then

*testing server requests are correct with Jasmine*

```sh
$ npn install --save-dev request

```
