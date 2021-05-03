const signUpConfig = {
	header: "Create a new account",
	hideAllDefaults: false,
	hiddenDefaults: ["username"],
	defaultCountryCode: "91",
	signUpFields: [
		{
			label: "Username",
			key: "email",
			required: true,
			displayOrder: 1,
			type: "string",
			placeholder: "Enter your Email",
		},
	],
};

export { signUpConfig };
