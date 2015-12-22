var client = require('../adapters/redis');

var counterCtrl = {
  incr: (req, res, next) => {
    client.incr('counter', (err, result) => {
      if (err) {
        return next(err);
      }
      return res.json({code: 'ok', body: {counter: result}});
    });
  },
  decr: (req, res, next) => {
    client.decr('counter', (err, result) => {
      if (err) {
        return next(err);
      }
      return res.json({code: 'ok', body: {counter: result}});
    });
  }
};

module.exports = counterCtrl;
