const express = require('express');
console.log('express', express);

// Create our app
const app = express();

const port = 5000;


// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('listening', port);
});
