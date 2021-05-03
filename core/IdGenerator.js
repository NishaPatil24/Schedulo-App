const uuid = require("react-native-uuid");
var uniqid = require("uniqid");

module.exports.uniqueID = (orderNumber) => {
	uniqid(`${count}_`);
};

// function () {
// 	const id = uuid.v4() + uuid.v1();
// 	return id.slice(3, 6) + id.slice(33, 39) + id.slice(64, 67);
// };

module.exports.uniqueIDSession = uniqid();

// function () {
// 	const id = uuid.v4() + uuid.v1();
// 	return (
// 		id.slice(0, 3) + id.slice(30, 34) + id.slice(39, 42) + id.slice(67, 69)
// 	);
// };
