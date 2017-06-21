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
    user.eventsCreated.push(e);
    e.save().then(() => {
      user.save().then(() => {
        res.send('event saved');
      })
      .catch(error => {
        console.log(error);
        res.send(error);
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

router.get('/fetch', authCheck, (req, res) => {
  User.findOne({user: req.user.sub}).then(user => {
    Event.find({location: user.location})
    .then(ev => {
      const response = ev.filter(e => {
        if (user.sportsFollowed.includes(e.sport)) {

          // check if this user created this event
          if (e.creator == user._id) {
            e.enableDelete = true;
          } else {
            e.enableDelete = false;
          }

          // getting proper dates
          const d = new Date();
          let eventDate = new Date(e.date);
          const parsedEventDate = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
          let todaysDate = new Date(parsedEventDate);


          // if isnt already in the past
          if (eventDate >= todaysDate) {
            // if today
            if (eventDate.valueOf() == todaysDate.valueOf()) {
              // check if time is ahed of now and if so send
              if (e.time > `${d.getHours()}:${d.getMinutes()}`) {
                return e;
              };
            } else { // if in future date
              return e;
            }
          }
        }
      });
      res.send(ev);
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    })
  }).catch(error => {
    console.log(error);
    res.status(400).send(error);
  })
})

router.post('/addToEvent', authCheck, (req, res) => {
  User.findOne({user: req.user.sub}).then(user => {
    Event.findOne({_id: req.body.data}).then(ev => {
      let me = ev.people.filter(e => {
        if (e.toString() == user._id) {
          return e
        }
      });
      if (me.length > 0) {
        res.status(400).send('error');
      } else {
        ev.people.push(user._id);
        ev.save().then(() => res.send('done'));
      }
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

router.post('/deleteEvent', authCheck, (req, res) => {
  User.findOne({user: req.user.sub}).populate('eventsCreated').exec((error, user) => {
    if(error) {
      res.status(400).send(error);
    }
    const event = user.eventsCreated.filter(e => {
      if (e._id == req.body.data) {
        return e;
      }
    });
    event[0].remove().then(()=>res.send('done'))
  })
})

module.exports = router;
