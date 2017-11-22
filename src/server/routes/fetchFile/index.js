'use strict';

var request = require('request');
var q = require('q');
var _= require('lodash');
var async = require('async');

var ApiError = require('../../lib/error/apiError');

var TTT = {

	fetchTTTFile: function(req, res, next) {
		if(!req.body || !req.body.numValue) {
	    return next(new ApiError('NO_NUM'));
		}
		if(!Number(req.body.numValue)){
	    return next(new ApiError('NAN'));
		}
		var options = {
	    method  : 'GET',
	    url     : 'http://terriblytinytales.com/test.txt',
	    timeout : 20000
	  };
	  request(options, function(e,r,b) {
	  	//TODO:validation handling
	  	req.fileDtata = b;
	  	next();
	  });
	},

	mostFreqOccuringwords: function(req, res, next) {

		var aa = req.fileDtata;
		  async.waterfall([
		    _readFile,
		    _findWordCount
		  ], function (err) {
		  if (err) {
		    return cb(err, item);
		  }
		    return cb(null, item);
		  });


		  function _readFile(cb) {
		  	var result = [],
		  			hash = {};
		  			cb();
		  }

		  function _findWordCount (fileData, cb) {
		    next();
		  }
	}

};

module.exports= TTT;