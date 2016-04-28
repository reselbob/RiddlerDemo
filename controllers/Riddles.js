'use strict';

var url = require('url');


var Riddles = require('./RiddlesService');


module.exports.getRiddle = function getRiddle (req, res, next) {
  Riddles.getRiddle(req.swagger.params, res, next);
};
