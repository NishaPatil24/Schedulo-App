import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Button = ({ mode, style, children, ...props }) => (
	<PaperButton
		style={[
			styles.button,
			mode === "outlined" && { backgroundColor: theme.colors.surface },
			style,
		]}
		labelStyle={[
			styles.text,
			mode === "contained" && { color: theme.colors.surface },
		]}
		mode={mode}
		{...props}
	>
		{children}
	</PaperButton>
);

const styles = StyleSheet.create({
	button: {
		width: "100%",
		marginVertical: hp("1.25%"),
	},
	text: {
		fontWeight: "bold",
		fontSize: wp("3.64"),
		lineHeight: hp("3.25"),
	},
});

export default memo(Button);
