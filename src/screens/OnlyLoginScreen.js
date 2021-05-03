import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
//import { theme } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import Toast from "../components/Toast";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [toast, setToast] = useState(false);
	const [type, setType] = useState("");

	const _onLoginPressed = async () => {
		// if (loading) return;
		// const emailError = emailValidator(email.value);
		// const passwordError = passwordValidator(password.value);

		// if (emailError || passwordError) {
		// 	setEmail({ ...email, error: emailError });
		// 	setPassword({ ...password, error: passwordError });
		// 	return;
		// }
		// setLoading(true);

		// const response = await loginUser({
		// 	email: email.value,
		// 	password: password.value,
		// });

		// if (response.error) {
		// 	setError(response.error);
		// }

		// auth()
		// 	.currentUser.getIdToken(/* forceRefresh */ true)
		// 	.then(function (idToken) {
		// 		//console.log(idToken);
		// 		fetch(
		// 			link +
		// 				"/api/delete-user?accessToken=" +
		// 				idToken +
		// 				"&tokenType=firebase",
		// 			{
		// 				method: "POST",
		// 				headers: {
		// 					"Content-Type": "application/json",
		// 				},
		// 			}
		// 		)
		// 			.then((response) => response.json())
		// 			.then((resData) => {
		// 				if (resData.error) {
		// 					setType("error");
		// 					setError("Something went wrong!");
		// 					setLoading(false);
		// 				}
		// 				auth()
		// 					.currentUser.delete()
		// 					.then(() => {
		// 						setLoading(false);
		// 						setType("success");
		// 						setError("Account successfully deleted!");
		// 					})
		// 					.catch((error) => {
		// 						setType("error");
		// 						setError("Something went wrong!");
		// 						setLoading(false);
		// 						console.error("Error:", error);
		// 					});
		// 			})
		// 			.catch((error) => {
		// 				setType("error");
		// 				setError("Something went wrong!");
		// 				setLoading(false);

		// 				console.error("Error:", error);
		// 			});
		// 	})
		// 	.catch((error) => {
		// 		// Handle error
		// 		setType("error");
		// 		setError("Something went wrong!");
		// 		setLoading(false);
		// 		console.log("Here is error");
		// 	});
		console.log("pressed");
	};

	const _clearEverything = () => {
		setType("");
		setError("");
	};

	return (
		<Background>
			<Logo />

			<Header>Welcome back.</Header>

			<TextInput
				label="Email"
				returnKeyType="next"
				value={email.value}
				onChangeText={(text) => setEmail({ value: text, error: "" })}
				error={!!email.error}
				errorText={email.error}
				autoCapitalize="none"
				autoCompleteType="email"
				textContentType="emailAddress"
				keyboardType="email-address"
				theme={theme}
			/>

			<TextInput
				label="Password"
				returnKeyType="done"
				value={password.value}
				onChangeText={(text) => setPassword({ value: text, error: "" })}
				error={!!password.error}
				errorText={password.error}
				secureTextEntry
				theme={theme}
			/>

			{/* <View style={styles.forgotPassword}>
				<TouchableOpacity
					onPress={() => navigation.navigate("ForgotPasswordScreen")}
				>
					<Text style={styles.label}>Forgot your password?</Text>
				</TouchableOpacity>
			</View> */}

			<Button
				loading={loading}
				mode="contained"
				onPress={_onLoginPressed}
				color="#85bb65"
			>
				Login
			</Button>

			<Toast type={type} message={error} onDismiss={() => _clearEverything()} />
			{/* <Toast message={toast || error} onDismiss={() => setToast("")} /> */}
		</Background>
	);
};
const theme = {
	colors: {
		primary: "#85bb65",
	},
};
const styles = StyleSheet.create({
	forgotPassword: {
		width: "100%",
		alignItems: "flex-end",
		marginBottom: 24,
	},
	row: {
		flexDirection: "row",
		marginTop: 4,
	},
	label: {
		color: theme.colors.secondary,
	},
	link: {
		fontWeight: "bold",
		color: theme.colors.primary,
	},
});

export default memo(LoginScreen);
