'use strict';
var path = require('path');

var slice = Array.prototype.slice;

function _create(path, methodName) {
	return function () {
		var args1 = slice.call(arguments);
		return function () {
			return path[methodName].apply(path, args1.concat(slice.call(arguments)));
		};
	};
}

function create(path) {
	var ret = {};
	['relative', 'resolve', 'join'].forEach(function (name) {
		ret[name] = _create(path, name);
	});
	return ret;
}

module.exports = create(path);
module.exports.win32 = create(path.win32);
module.exports.posix = create(path.posix);
