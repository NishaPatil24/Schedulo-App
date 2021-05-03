import React from "react";
import { StyleSheet } from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StatementOptions = {
	name: "Incomex",
	headerTintColor: "white",
	headerStyle: { backgroundColor: "#85bb65", height: hp("7.5%") },
	headerTitleStyle: { fontSize: hp("2.506%"), left: -wp("3%") },
	headerBackAllowFontScaling: true,
};

// const styles = StyleSheet.create({
// 	header: {
// 		alignItems: "center",
// 		flexDirection: "row",
// 	},
// 	headingLabelStart: {
// 		fontSize: 20,
// 		color: "#fff",
// 	},
// 	headingLabelEnd: {
// 		fontSize: 20,
// 		color: "#fff",
// 		marginLeft: -100,
// 	},
// 	head: { paddingHorizontal: 10 },
// 	tinyLogo: {
// 		width: 20,
// 		height: 20,
// 		paddingHorizontal: 10,
// 		marginRight: 100,
// 	},
// });

export default StatementOptions;
