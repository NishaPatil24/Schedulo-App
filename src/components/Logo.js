import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Logo = () => (
	<Image
		style={styles.image}
		source={{
			uri: "https://schedulo.s3.ap-south-1.amazonaws.com/SCHEDULO.png",
		}}
		resizeMode="center"
	/>
);

const styles = StyleSheet.create({
	image: {
		width: hp("30.04"),
		height: hp("30.04"),
		marginBottom: hp("1.5"),
	},
});

export default memo(Logo);

// {
// 	uri: "https://epsilon0images.s3.ap-south-1.amazonaws.com/rupee.png",
// }
//require("../../assets/rupee1128.png")
