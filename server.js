// Require/import the HTTP module
var http = require("http");

// ===========================================================================
// Define a port to listen for incoming requests
//var PORT = 8080;
var PORT1 = 7000;
var PORT2 = 7500;

// ===========================================================================
//***** PORT 1 *****//
// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Youre GREAT! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT1, function () {

  // Log (server-side) when our server has started
  console.log("You are amazing!!! Server listening on: http://localhost:" + PORT1);
});



//***** PORT 2 *****//
// Create a generic function to handle requests and responses
function handleRequestTwo(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You suck! Path Hit: " + request.url);
  }

  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  var serverOne = http.createServer(handleRequestTwo);

  // Start our server so that it can begin listening to client requests.
  serverOne.listen(PORT2, function () {

  // Log (server-side) when our server has started
  console.log("You still suck!!! Server listening on: http://localhost:" + PORT2);
  });