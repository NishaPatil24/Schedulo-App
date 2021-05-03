import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/theme";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
	header: {
		fontSize: wp("6.32%"),
		color: theme.colors.secondary,
		fontWeight: "bold",
		paddingVertical: hp("1.75%"),
	},
});

export default memo(Header);
