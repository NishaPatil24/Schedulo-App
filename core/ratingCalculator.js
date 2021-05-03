module.exports.calculate_rating = (ratingData) => {
	const length = ratingData.length;
	let sum = 0;
	ratingData.forEach((cv, index) => {
		sum = sum + cv.rating;
	});
	return { ratings: length, value: sum / length };
};
