// Require express - gives us back a function
const express = require('express');

// get body-parser
const bodyParser = require('body-parser');

// Create an instance of express by calling the function
// gives us back an object
const app = express();
const port = process.env.PORT || 5000; // Used to direct traffic

// without this line, there is no data to be found on req.body
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serves up static files
app.use(express.static('server/public'));

// Quotes array
let quotes = [{
  text: 'If you want to go fast, go alone. If you want to go far, go together.',
  author: 'African Proverb'
}, {
  text: 'If I have seen further than others, it is by standing upon the shoulders of giants.',
  author: 'Isaac Newton'
}, {
  text: 'Class Nunki, that funky Nunki',
  author: 'Nunki Cohort'
}];

// route
app.get('/quotes', function (req, res) {
  let responseString = 'hello';
  res.send(quotes);
});

// post request
app.post('/quotes', function (req, res) {
  console.log('here is request.body', req.body);
  // push to quotes array
  quotes.push(req.body);
  //send response
  response.sendStatus(201);
})

// Start up the server
app.listen(port, function () {
  console.log('listening on port', port);
});