import React from "react";
import {
	Dimensions,
	StyleSheet,
	Image,
	Text,
	View,
	Button,
	TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "../src/core/theme";
import {
	CardStyleInterpolators,
	createStackNavigator,
	TransitionSpecs,
} from "@react-navigation/stack";

const HomeOptions = ({ navigation }) => ({
	name: "Schedulo",
	headerTintColor: "white",
	headerStyle: { backgroundColor: theme.colors.secondary },

	cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
});

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		flexDirection: "row",
	},
	headingLabelStart: {
		fontSize: hp("2.5%"),
		color: "#fff",
	},
	headingLabelEnd: {
		fontSize: hp("2.5%"),
		color: "#fff",
		marginLeft: wp("-24.33%"),
	},
	headingLabelEND: {
		fontSize: hp("2.5%"),
		color: theme.colors.primary,
	},
	head: { paddingHorizontal: 10 },
	tinyLogo: {
		width: wp("2.50%"),
		height: wp("4.86%"),
		paddingHorizontal: wp("2.43%"),
		marginRight: wp("24.33%"),
	},
});

export default HomeOptions;
