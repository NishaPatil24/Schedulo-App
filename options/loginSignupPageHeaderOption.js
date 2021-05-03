import React from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoginOptions = {
	name: "Incomex",
	headerShown: false,
};

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		flexDirection: "row",
	},
	headingLabelStart: {
		fontSize: 20,
		color: "#fff",
	},
	headingLabelEnd: {
		fontSize: 20,
		color: "#fff",
		marginLeft: -100,
	},
	head: { paddingHorizontal: 10 },
	tinyLogo: {
		width: 20,
		height: 20,
		paddingHorizontal: 10,
		marginRight: 100,
	},
});

export default LoginOptions;
