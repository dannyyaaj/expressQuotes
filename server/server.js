// Require express - gives us back a function
const express = require('express');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

// Serves up static files
app.use(express.static('server/public'));

// Quotes array
let quotes = [{
  text: 'If you want to go fast, go alone. If you want to go far, go together.',
  author: 'African Proverb'
}, ]
let quotes = [{
  text: 'If I have seen further than others, it is by standing upon the shoulders of giants.',
  author: 'Isaac Newton'
}, ]
let quotes = [{
  text: 'Class Nunki, that funky Nunki',
  author: 'Nunki Cohort'
}];

// route
app.get('/quotes', function (req, res) {
  let responseString = 'hello';
  console.log(quotes);
  res.send(quotes);
})