import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Paragraph = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
	text: {
		fontSize: wp("3.89%"),
		lineHeight: hp("3.25%"),
		color: theme.colors.secondary,
		textAlign: "center",
		marginBottom: hp("1.75%"),
	},
});

export default memo(Paragraph);
