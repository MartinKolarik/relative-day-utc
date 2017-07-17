module.exports = (addDays = 0, sinceDate) => {
	let date = sinceDate ? new Date(sinceDate) : new Date();
	date.setDate(date.getDate() + addDays);
	date.setUTCHours(0);
	date.setUTCMinutes(0);
	date.setUTCSeconds(0);
	date.setUTCMilliseconds(0);
	return date;
};
