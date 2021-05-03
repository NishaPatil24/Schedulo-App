import React, { memo } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BackButton = ({ goBack }) => (
	<TouchableOpacity onPress={goBack} style={styles.container}>
		<Image style={styles.image} source={require("../assets/arrow_back.png")} />
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: hp("1.25%") + getStatusBarHeight(),
		left: wp("2.43%"),
	},
	image: {
		width: wp("5.83%"),
		height: hp("3%"),
	},
});

export default memo(BackButton);
