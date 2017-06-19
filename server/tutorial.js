const express = require('express');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
require('dotenv').config();
const User = require('./models/userModel');

const authCheck = jwt({
  secret: process.env.SECRET,
  // to make sure the token is recived properly
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization) {
      let token = req.headers.authorization;
      token = token.slice(7, token.length);
      return token
    }
  }
});

const router = express.Router();

router.post('/', authCheck, (req, res) => {
  User.findOne({user: req.user.sub}).then(user => {
    user.sportsFollowed = req.body.data.sports;
    user.location = req.body.data.location;
    user.name = req.body.data.name;
    user.save().then(() => {
      res.send('done');
    });
  }).catch(error => {
    res.status(400).send(error);
  })
})


module.exports = router;
