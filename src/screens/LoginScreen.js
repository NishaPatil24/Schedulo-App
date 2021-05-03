import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
//import { theme } from "../core/theme";
import Toast from "../components/Toast";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../core/theme";
import { emailValidator, passwordValidator } from "../core/utils";
import { Auth } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [Visibility, setVisibility] = useState(true);
	const dispatch = useDispatch();

	const _onLoginPressed = async () => {
		if (loading) return;

		// const response = await loginUser({
		// 	email: email.value,
		// 	password: password.value,
		// });

		// if (response.error) {
		// 	setError(response.error);
		// }

		// setLoading(false);
		try {
			const emailError = emailValidator(email.value);
			const passwordError = passwordValidator(password.value);

			if (emailError || passwordError) {
				setEmail({ ...email, error: emailError });
				setPassword({ ...password, error: passwordError });
				return;
			}
			setLoading(true);

			const user = await Auth.signIn(email.value, password.value);
			dispatch({ type: "CHECK_SIGNED", payload: true });
			// navigation.navigate("Home");
		} catch (error) {
			setError(error.message);
			console.log("error signing in", error);
		}
		// console.log("pressed");
		setLoading(false);
	};

	return (
		<Background>
			<BackButton goBack={() => navigation.navigate("HomeScreen")} />

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

			{/* <TextInput
				label="Password"
				returnKeyType="done"
				value={password.value}
				onChangeText={(text) => setPassword({ value: text, error: "" })}
				error={!!password.error}
				errorText={password.error}
				secureTextEntry
				theme={theme}
			/> */}
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
				color={theme.colors.prime}
			>
				Login
			</Button>

			<View style={styles.row}>
				<Text style={styles.label}>Don’t have an account? </Text>
				<TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
					<Text style={styles.link}>Sign up</Text>
				</TouchableOpacity>
			</View>
			<Toast message={error} onDismiss={() => setError("")} />
		</Background>
	);
};
const styles = StyleSheet.create({
	forgotPassword: {
		width: "100%",
		alignItems: "flex-end",
		marginBottom: hp("3%"),
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

export default memo(LoginScreen);
