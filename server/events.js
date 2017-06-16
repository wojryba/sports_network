const express = require('express');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
require('dotenv').config();
const User = require('./models/userModel');
const Event = require('./models/eventModel');

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

router.post('/create', authCheck, (req, res) => {
  User.findOne({user: req.user.sub}).then(user => {
    const e = new Event ({
      creator: user._id,
      event: req.body.data.event,
      date: req.body.data.date,
      time: req.body.data.time,
      sport: req.body.data.sport,
      location: req.body.data.location,
      description: req.body.data.description
    });
    console.log(e);
    user.eventsCreated.push(e);
    e.save().then(() => {
      user.save().then(() => {
        res.send('event saved');
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      })
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    })
  })
  .catch(error => {
    console.log(error);
    res.status(400).send(error);
  })
})

router.get('/getEventsInLocation', (req, res) => {
  Event.find({location: 'London, United Kingdom'})
  .then(ev => {
    res.send(ev);
  })
  .catch(err => res.send(err))
})

router.get('/getAllEvents', (req, res) => {
  Event.find({}).populate('creator').exec((err, users) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.send(users);
  })
})

router.get('/testU', (req, res) => {
  const u = 'twitter|834376360588111877';
  User.find({user: u}).populate('eventsCreated').exec((err, user) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.send(user);
  })
})

module.exports = router;
