const { urlencoded } = require('body-parser');
const express = require('express');
console.log('express', express);

// Create our app
const app = express();

const port = 5000;

// INCANTATION:
// Share any files in "./server/public" folder

app.use(express.static('server/public'));
app.use(express.json());
app.use(urlencoded({extended: true}))


// Listen for network requests
app.listen(port, function () {
  // When the server is ready, call this function
  console.log('listening', port);
});
