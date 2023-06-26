export const changeDateStr = (dateTime) => {
	const dateObj = new Date(dateTime);

	const year = dateObj.getFullYear();
	const month = String(dateObj.getMonth() + 1).padStart(2, '0');
	const day = String(dateObj.getDate()).padStart(2, '0');

	const formattedDate = `${year}.${month}.${day}`;

	return formattedDate;
};

export const truncateString = (str, maxLength) => {
	if (str.length <= maxLength) {
		return str;
	} else {
		const truncatedStr = str.substring(0, maxLength).trim() + '...';
		return truncatedStr;
	}
};
