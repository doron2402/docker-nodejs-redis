var router = require('express').Router();
var counterCtrl = require('./controllers/counterCtrl');
var usersCtrl = require('./controllers/usersCtrl');
var client = require('./adapters/redis');

router
  .get('/users', usersCtrl.getAllUsers)
  .get('/users/:id', usersCtrl.getUserById)
  .post('/users', usersCtrl.createNewUser)
  .post('/users/:id', usersCtrl.updateUser)
  .delete('/users/:id', usersCtrl.deleteUser)
  .get('/counter', counterCtrl.incr)
  .post('/counter', counterCtrl.decr);


module.exports = router;
