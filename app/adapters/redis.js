var redis = require('redis');
var redisConfig = {
  host: process.env.REDIS_PORT_6379_TCP_ADDR || '127.0.0.1',
  port: process.env.REDIS_PORT_6379_TCP_PORT || 6379
};
module.exports = redis.createClient(redisConfig.port, redisConfig.host);
