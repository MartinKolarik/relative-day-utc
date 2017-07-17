module.exports = (addDays = 0, sinceDate = new Date()) => {
	let date = new Date(sinceDate);
	date.setDate(date.getDate() + addDays);
	date.setUTCHours(0);
	date.setUTCMinutes(0);
	date.setUTCSeconds(0);
	date.setUTCMilliseconds(0);
	return date;
};
