import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { emailValidator } from "../core/utils";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Paragraph from "../components/Paragraph";
//import { theme } from "../core/theme";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { theme } from "../core/theme";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = ({ route, navigation }) => {
	const [code, setCode] = useState({ value: "", error: "" });
	const [loading, setLoading] = useState(false);
	const [toast, setToast] = useState({ value: "", type: "" });
	const [email, setEmail] = useState({ value: "", error: "" });

	const _onSendPressed = async () => {
		// const emailError = emailValidator(email.value);

		// if (emailError) {
		// 	setEmail({ ...email, error: emailError });
		// 	return;
		// }

		// const response = await sendEmailWithPassword(email.value);

		// if (response.error) {
		// 	setToast({ type: "error", value: response.error });
		// } else {
		// 	setToast({
		// 		type: "success",
		// 		value: "Email with password has been sent.",
		// 	});
		// }

		if (loading) return;
		if (!route.params) {
			if (email.value === "" || code.value === "") {
				setToast({ type: "error", value: "Fields cannot be empty." });
			} else {
				try {
					setLoading(true);
					// console.log(
					// 	route.params ? route.params.username : email.value,
					// 	code.value
					// );
					await Auth.confirmSignUp(
						route.params ? route.params.username : email.value,
						code.value
					);
					setToast({
						type: "success",
						value: "Account verification successful.",
					});
					navigation.navigate("LoginScreen");
					// console.log("pressed");
				} catch (error) {
					// console.log("error confirming sign up", error);
					setToast({ type: "error", value: error });
				}
			}
		} else {
			try {
				setLoading(true);
				// console.log(
				// 	route.params ? route.params.username : email.value,
				// 	code.value
				// );
				await Auth.confirmSignUp(
					route.params ? route.params.username : email.value,
					code.value
				);
				setToast({
					type: "success",
					value: "Account verification successful.",
				});
				navigation.navigate("LoginScreen");
				// console.log("pressed");
			} catch (error) {
				// console.log("error confirming sign up", error);
				setToast({ type: "error", value: error });
			}
			setLoading(false);
		}
	};

	const handleResend = async () => {
		if (email.value === "") {
			setToast({ type: "error", value: "Email cannot be empty." });
		} else {
			try {
				await Auth.resendSignUp(
					route.params ? route.params.username : email.value
				);
				setToast({
					type: "success",
					value: "Code resent successfully",
				});
			} catch (err) {
				setToast({
					type: "error",
					value: err.message,
				});
			}
		}
	};
	return (
		<Background>
			<BackButton goBack={() => navigation.navigate("LoginScreen")} />

			<Logo />
			<Header>Account confirmation</Header>
			<Paragraph>
				Please check your email inbox for confirmation code.
			</Paragraph>

			{!route.params ? (
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
			) : null}
			<TextInput
				label="Confirmation Code"
				returnKeyType="done"
				value={code.value}
				onChangeText={(text) => setCode({ value: text, error: "" })}
				error={!!code.error}
				errorText={code.error}
				autoCapitalize="none"
				theme={theme}
			/>
			<Button
				loading={loading}
				mode="contained"
				onPress={_onSendPressed}
				style={styles.button}
				color={theme.colors.prime}
			>
				Confirm
			</Button>
			<View style={styles.row}>
				<Text style={styles.labelT}>Not received?</Text>
				<TouchableOpacity onPress={handleResend}>
					<Text style={styles.link}>Resend</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.back}
				onPress={() => navigation.navigate("HomeScreen")}
			>
				<Text style={styles.label}>← Back to Home</Text>
			</TouchableOpacity>

			<Toast
				type={toast.type}
				message={toast.value}
				onDismiss={() => setToast({ value: "", type: "" })}
			/>
		</Background>
	);
};

const styles = StyleSheet.create({
	back: {
		width: "100%",
		marginTop: 12,
	},
	button: {
		marginTop: 12,
	},
	label: {
		color: theme.colors.secondary,
		width: "100%",
	},
	labelT: {
		color: theme.colors.secondary,
	},
	row: {
		flexDirection: "row",
		marginTop: 4,
	},
	link: {
		fontWeight: "bold",
		color: theme.colors.primary,
	},
});

export default memo(ForgotPasswordScreen);
