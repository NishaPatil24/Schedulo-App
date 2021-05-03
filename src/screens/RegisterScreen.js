import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
//import { theme } from "../core/theme";
import {
	emailValidator,
	passwordValidator,
	nameValidator,
	ConfirmPasswordValidator,
} from "../core/utils";
import Toast from "../components/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Auth } from "aws-amplify";
import { theme } from "../core/theme";

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState({ value: "", error: "" });
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const [confirmPassword, setConfirmPassword] = useState({
		value: "",
		error: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [Visibility, setVisibility] = useState(true);
	// const [serverToast, setServerToast] = useState(false);
	// const [serverToastMessage, setServerToastMessage] = useState("");

	const _onSignUpPressed = async () => {
		// const response = await signInUser({
		// 	name: name.value,
		// 	email: email.value,
		// 	password: password.value,
		// });

		console.log(email.value);

		// if (response.error) {
		// 	setError(response.error);
		// }

		try {
			if (loading) return;

			const emailError = emailValidator(email.value);
			const passwordError = passwordValidator(password.value);
			const ConfirmPasswordError = ConfirmPasswordValidator(
				password.value,
				confirmPassword.value
			);

			if (emailError || passwordError || ConfirmPasswordError) {
				// setName({ ...name, error: nameError });
				setEmail({ ...email, error: emailError });
				setPassword({ ...password, error: passwordError });
				setConfirmPassword({ ...confirmPassword, error: ConfirmPasswordError });
				return;
			}

			setLoading(true);
			const { user } = await Auth.signUp({
				username: email.value,
				password: password.value,
				attributes: {
					email: email.value,
				},
			});
			// console.log(user);
			navigation.navigate("ConfirmAccount", { username: email.value });
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
		setLoading(false);
		// console.log("pressed");
	};

	return (
		<Background>
			<BackButton goBack={() => navigation.navigate("HomeScreen")} />

			<Logo />

			<Header>Create Account</Header>

			{/* <TextInput
				label="Name"
				returnKeyType="next"
				value={name.value}
				onChangeText={(text) => setName({ value: text, error: "" })}
				error={!!name.error}
				errorText={name.error}
				theme={theme}
			/> */}

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
			<View style={styles.passwordContainer}>
				<View style={styles.passwordSection}>
					<TextInput
						label="Password"
						returnKeyType="done"
						value={password.value}
						onChangeText={(text) => setPassword({ value: text, error: "" })}
						error={!!password.error}
						errorText={password.error}
						secureTextEntry={Visibility}
						theme={theme}
					/>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.eye}
						onPress={() => {
							setVisibility(!Visibility);
						}}
					>
						<View style={styles.TO}>
							<FontAwesomeIcon
								icon={Visibility ? "eye-slash" : "eye"}
								color="#000"
								size={20}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.passwordContainer}>
				<View style={styles.passwordSection}>
					<TextInput
						label="confirm Password"
						returnKeyType="done"
						value={confirmPassword.value}
						onChangeText={(text) =>
							setConfirmPassword({ value: text, error: "" })
						}
						error={!!confirmPassword.error}
						errorText={confirmPassword.error}
						secureTextEntry={Visibility}
						theme={theme}
					/>
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.eye}
						onPress={() => {
							setVisibility(!Visibility);
						}}
					>
						<View style={styles.TO}>
							<FontAwesomeIcon
								icon={Visibility ? "eye-slash" : "eye"}
								color="#000"
								size={20}
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<Button
				loading={loading}
				mode="contained"
				onPress={_onSignUpPressed}
				style={styles.button}
				color={theme.colors.prime}
			>
				Sign Up
			</Button>

			<View style={styles.row}>
				<Text style={styles.label}>Already have an account? </Text>
				<TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
					<Text style={styles.link}>Login</Text>
				</TouchableOpacity>
			</View>
			<Toast message={error} onDismiss={() => setError("")} />
		</Background>
	);
};

const styles = StyleSheet.create({
	label: {
		color: theme.colors.secondary,
	},
	button: {
		marginTop: 24,
	},
	row: {
		flexDirection: "row",
		marginTop: 4,
	},
	link: {
		fontWeight: "bold",
		color: theme.colors.primary,
	},
	passwordContainer: {},
	passwordSection: {
		alignSelf: "stretch",
		justifyContent: "center",
		position: "relative",
		flexDirection: "row",
	},
	eye: {
		position: "absolute",
		justifyContent: "center",
		height: 38,
		width: 35,
		padding: 7,
		right: 4,
		marginVertical: hp("2.8%"),
		zIndex: 999,
	},
});

export default memo(RegisterScreen);
