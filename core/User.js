import { Auth } from "aws-amplify";

const userEmail = () => {
	const email = new Promise((resolve, reject) => {
		Auth.currentUserInfo().then((user) => {
			resolve(user.attributes.email);
		});
	});
	return email;
};

export { userEmail };
