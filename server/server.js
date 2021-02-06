const express = require('express');
console.log('express', express);
const guesses = require('./modules/guesses');

// Create our app
const app = express();
const PORT = 5000;

// Share any files inside the 'public' folder
app.use(express.static('server/public'));
// INCANTATION
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

// GET & POST Routes go here

// GET route to display previous guesses
app.get('/guesses', function (request, response) {
  console.log('getting guesses');
  console.log(guesses);
  console.log(guess);
  response.send(guess);
});

// POST route to submit guesses
app.post('/guesses', function (request, response) {
  console.log('submitted to guesses');
  let users = request.body.data_to_add;
  console.log(users);
  response.sendStatus(200);
});

// POST route to grab randomInt
app.post('/get-random', function (request, response) {
  let guess = String(guesses());
  response.send(guess);
});
