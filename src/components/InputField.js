import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	Modal,
	Linking,
	Platform,
	TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../core/theme";

import { Input } from "react-native-elements";

const InputField = (props) => {
	if (props.iconVisibility === true) {
		return (
			<View style={styles.InputLarge}>
				<View style={styles.Icon}>
					<FontAwesomeIcon
						icon={props.icon}
						size={14}
						color={theme.colors.primary}
					/>
				</View>
				<Input
					label={props.label}
					placeholder={props.placeholder}
					placeholderTextColor={
						props.valueFound === true ? "black" : "rgba(0,0,0,0.3)"
					}
					value={props.value}
					labelStyle={styles.labelStyleLarge}
					style={styles.InputFieldLarge}
					inputContainerStyle={styles.InputFieldLarge}
					keyboardType={props.keyboardType}
					maxLength={props.maxLength}
					onChangeText={props.onChangeText}
					inputStyle={styles.inputStyle}
				/>
			</View>
		);
	} else if (props.iconVisibility === false) {
		return (
			<View style={styles.Input}>
				<Input
					label={props.label}
					placeholder={props.placeholder}
					placeholderTextColor={
						props.valueFound === true ? "black" : "rgba(0,0,0,0.3)"
					}
					value={props.value}
					labelStyle={styles.labelStyle}
					style={styles.InputField}
					inputContainerStyle={styles.InputField}
					keyboardType={props.keyboardType}
					maxLength={props.maxLength}
					onChangeText={props.onChangeText}
					inputStyle={styles.inputStyle}
				/>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	Input: {
		marginHorizontal: wp("5%"),
		marginVertical: wp("-2%"),
	},
	labelStyle: {
		fontSize: hp("1.6%"),
		fontWeight: "normal",
		color: theme.colors.secondary,
	},
	inputStyle: {
		fontSize: hp("2.2%"),
	},
	InputField: {
		borderColor: "rgba(0,0,0,0.6)",
		height: hp("3%"),
		width: wp("80%"),
	},
	InputContainer: {},
	InputLarge: {
		marginHorizontal: wp("8%"),
		marginVertical: wp("-3%"),
		flexDirection: "row",
	},
	labelStyleLarge: {
		fontSize: hp("1.6%"),
		fontWeight: "normal",
		color: theme.colors.secondary,
	},
	InputFieldLarge: {
		borderColor: "rgba(0,0,0,0.6)",
		height: hp("5%"),
		width: wp("68%"),
	},
	Icon: {
		marginRight: wp("1.5%"),
		marginBottom: hp("7%"),
		marginVertical: hp("2%"),
		borderWidth: 1,
		padding: wp("1.2%"),
		borderRadius: wp("15%"),
		borderColor: "rgba(0,0,0,0.2)",
	},
});

export default InputField;
