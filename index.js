module.exports = (addDays = 0) => {
	let date = new Date();
	date.setDate(date.getDate() + addDays);
	date.setUTCHours(0);
	date.setUTCMinutes(0);
	date.setUTCSeconds(0);
	date.setUTCMilliseconds(0);
	return date;
};
