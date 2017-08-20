(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.relativeDayUtc = factory());
}(this, (function () {
	'use strict';

	var main = function () {
		var addDays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var sinceDate = arguments[1];

		var date = sinceDate ? new Date(sinceDate) : new Date();
		date.setDate(date.getDate() + addDays);
		date.setUTCHours(0);
		date.setUTCMinutes(0);
		date.setUTCSeconds(0);
		date.setUTCMilliseconds(0);
		return date;
	};

	return main;

})));
