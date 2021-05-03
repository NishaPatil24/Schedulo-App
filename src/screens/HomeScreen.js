import React, { memo } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { theme } from "../core/theme";

const HomeScreen = ({ navigation }) => (
	<Background>
		<Logo />
		<Button
			mode="contained"
			color={theme.colors.prime}
			onPress={() => navigation.navigate("LoginScreen")}
		>
			Login
		</Button>
		<Button
			mode="outlined"
			color={theme.colors.prime}
			onPress={() => navigation.navigate("RegisterScreen")}
		>
			Sign Up
		</Button>
		<View style={styles.row}>
			<Text style={styles.label}>Account not confirmed? </Text>
			<TouchableOpacity onPress={() => navigation.navigate("ConfirmAccount")}>
				<Text style={styles.link}>Confirm now</Text>
			</TouchableOpacity>
		</View>
	</Background>
);

const styles = StyleSheet.create({
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
export default memo(HomeScreen);
