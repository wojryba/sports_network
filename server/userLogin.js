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
  User.findOrCreate({user: req.body.data.user_id}).then(user => {
    let response;
    if (user.created) {
      response = {
        isNew: true
      }
    } else {
      response = {
        isNew: false
      }
    }
    res.send(response);
  })
  .catch(error => {
    console.log(error);
  })
})

module.exports = router;
