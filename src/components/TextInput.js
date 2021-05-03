import React, { memo, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../core/theme";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TextInput = ({ errorText, ...props }) => (
	<View style={styles.container}>
		<Input
			style={styles.input}
			selectionColor={theme.colors.primary}
			underlineColor="transparent"
			mode="outlined"
			dense={true}
			{...props}
		/>
		{errorText ? <Text style={styles.error}>{errorText}</Text> : null}
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginVertical: hp("1.50%"),
	},
	input: {
		backgroundColor: theme.colors.surface,
	},
	error: {
		fontSize: wp("3.40%"),
		color: theme.colors.error,
		paddingHorizontal: wp("0.97"),
		paddingTop: wp("0.97"),
	},
});

export default memo(TextInput);
