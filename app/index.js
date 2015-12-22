var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = module.exports = express();
app
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/', routes);
/* Error Handling */
app
  .use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({ error: err.message });
  })
  .use(function(req, res){
    res.status(404);
    res.send({ error: "Ooops.., can't find that" });
  });

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Server started on port 3000');
}
