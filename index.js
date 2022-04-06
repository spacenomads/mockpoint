const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const { restart } = require('nodemon');

const ALLOWED_ORIGINS = [
  'http://localhost:8080'
];
const PORT = 3003;
const app = express();
app.use( cors() );





// ANCHOR STATICS
app.post('/pdv', function (req, res) {
  const { origin } = req;
  console.log(req, origin);
  res.status(200).send({
    'message': 'ok'
  });
});





// ANCHOR LISTENER
app.listen(PORT, function() {
  console.log('Ready when you are 🦄!');
});

