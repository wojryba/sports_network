const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const connect = process.env.MONGODB_URI || "mongodb://localhost/sportsApp"

//plug in promise liblary for mongoose
mongoose.Promise = global.Promise;

mongoose.connect(connect);
mongoose.connection.on('connected', () => console.log('connected to database'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

const user = require('./userLogin');
app.use('/userLogin', user);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
