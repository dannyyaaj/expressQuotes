// Require express - gives us back a function
const express = require('express');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

// Serves up static files
app.use(express.static('server/public'));

// Quotes array
let quotes = 

// route
app.get('/quotes', function(req, res) {
  let responseString = 'hello';
  res.send(quotes);
})