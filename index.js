/**
 * @param {number} [addDays=0]
 * @param {Date|string} [sinceDate]
 * @returns {Date}
 */
module.exports = (addDays = 0, sinceDate) => {
	let date = sinceDate ? new Date(sinceDate) : new Date();
	date.setUTCHours(0, 0, 0, 0);
	date.setUTCDate(date.getUTCDate() + addDays);
	return date;
};
