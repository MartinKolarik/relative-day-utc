(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.relativeDayUtc = factory());
}(this, (function () {
	'use strict';

	return function () {
		var addDays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var sinceDate = arguments.length > 1 ? arguments[1] : undefined;
		var date = sinceDate ? new Date(sinceDate) : new Date();
		date.setUTCHours(0, 0, 0, 0);
		date.setUTCDate(date.getUTCDate() + addDays);
		return date;
	};
})));
