var _ = require('lodash');
var shortid = require('shortid');

var client = require('../adapters/redis');

var usersCtrl = {
  getAllUsers: function(req, res, next){
    client.keys('*', function (err, keys) {
      keys = _.remove(keys,(key) =>{
        return key !== 'counter'
      });
      if (err) {
        return next(err);
      }
      return res.json({code: 'ok', body: keys});
    });
  },
  getUserById: function(req, res, next){
    if (!req.params.id){
      return next('Missing Args');
    }
    client.get(req.params.id, function(err, reply) {
      if (err){
        return next(err);
      }
      return res.json({
        code: 'ok',
        body: JSON.parse(reply)
      });
    });
  },
  createNewUser: function(req, res, next){
    var userId = shortid.generate();
    var userData = JSON.stringify(req.body);
    client.set(userId, userData);
    return res.json({
      code: 'ok',
      user: {
        id: userId
      }
    });
  },
  updateUser:  function(req, res, next){
    if (!_.has(req,'params.id')){
      return next('Missing Args');
    }
    client.get(req.params.id, function(err, reply) {
      if (err) {
        return next(err);
      }
      var userData = _.merge({}, JSON.parse(reply), req.body);
      client.set(req.params.id, JSON.stringify(userData));
      return res.json({code: 'ok', body: userData});
    })
  },
  deleteUser: function(req, res, next){
    if (!_.has(req,'params.id')){
      return next('Missing Args');
    }
    client.del(req.params.id, function(err, reply){
      if (err){
        return next(err);
      }
      return res.json({
        code: 'ok',
        user: {
          id: req.params.id
        },
        body: reply
      });
    });
  }
};

module.exports = usersCtrl;
