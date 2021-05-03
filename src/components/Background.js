import React, { memo } from "react";
import {
	View,
	ImageBackground,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";

const Background = ({ dashboard, children }) => (
	<KeyboardAvoidingView
		style={dashboard ? styles.containerDashboard : styles.container}
		behavior="margin"
	>
		{children}
	</KeyboardAvoidingView>
);

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: "100%",
		backgroundColor: "white",
	},
	container: {
		flex: 1,
		padding: 40,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
	},
	containerDashboard: {
		flex: 1,
		padding: 60,
		width: "100%",
		alignItems: "center",
		backgroundColor: "white",
	},
});

export default memo(Background);
