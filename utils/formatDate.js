const formatDate = (timestamp) => {
	// Create a date object from the timestamp
	var date = new Date(timestamp);

	return date.toLocaleString('en-US')
};


export { formatDate as default }