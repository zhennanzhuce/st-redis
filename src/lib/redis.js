/*!
 * speedt-redis
 * Copyright(c) 2017 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

const redis = require('redis');

module.exports = function(opts){
  return new Method(opts);
}

var Method = function(opts){
  var client = redis.createClient(opts || {});

  client.on('error', err => {
    console.error(err);
  });

  return client;
};

var pro = Method.prototype;