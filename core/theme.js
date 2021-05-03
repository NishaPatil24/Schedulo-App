import { DefaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "#e84e4e",
		secondary: "#51a84d",
		blue: "#4e9be8",
		error: "#f13a59",
		success: "#00B386",
		primaryFaintShade: "#fdeded",
		primaryMidShade: "rgba(	255, 255, 255,0.9)",
		cardBackground: "#fcfaf3",
		oliveGreen: "#6B8E23",
		faintBlack: "rgba(0,0,0,0.5)",
		primaryFaint: "#eb6565",
		variableBlack: function (opacity) {
			return `rgba(0,0,0,${opacity})`;
		},
	},
};

const AmplifyThemeN = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		paddingTop: 20,
		width: "100%",
		backgroundColor: "#FFF",
	},

	section: {
		flex: 1,
		width: "100%",
		padding: 30,
	},
	sectionHeader: {
		width: "100%",
		marginBottom: 32,
	},
	sectionHeaderText: {
		color: theme.colors.primary,
		fontSize: 20,
		fontWeight: "500",
	},
	sectionFooter: {
		width: "100%",
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
		marginBottom: 20,
	},
	sectionFooterLink: {
		fontSize: 14,
		color: theme.colors.primaryFaint,
		alignItems: "baseline",
		textAlign: "center",
	},
	navBar: {
		marginTop: 35,
		padding: 15,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 4,
	},
	cell: {
		flex: 1,
		width: "50%",
	},
	errorRow: {
		flexDirection: "row",
		justifyContent: "center",
	},
	errorRowText: {
		marginLeft: 10,
	},
	photo: {
		width: "100%",
	},
	album: {
		width: "100%",
	},
	button: {
		backgroundColor: theme.colors.primary,
		alignItems: "center",
		padding: 16,
	},
	buttonDisabled: {
		backgroundColor: theme.colors.primaryFaint,
		alignItems: "center",
		padding: 16,
	},
	buttonText: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "600",
	},
	formField: {
		marginBottom: 22,
	},
	input: {
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: "#C4C4C4",
	},
	inputLabel: {
		marginBottom: 8,
	},
	phoneContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	phoneInput: {
		flex: 2,
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: "#C4C4C4",
	},
	picker: {
		flex: 1,
		height: 44,
	},
	pickerItem: {
		height: 44,
	},
});

export { theme, AmplifyThemeN };
