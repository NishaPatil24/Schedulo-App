import React, { memo, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ActivityIndicator,
	Linking,
	Platform,
	TouchableOpacity,
} from "react-native";
import {
	Title,
	Card,
	TextInput,
	Button as ButtonPaper,
	Menu,
	Divider,
} from "react-native-paper";
import { Input, Icon, Badge } from "react-native-elements";
import { ListItem, BottomSheet } from "react-native-elements";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import TextInputC from "../components/TextInput";
import Button from "../components/Button";
import { theme } from "../core/theme";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { updateTeacherReq } from "../graphql/mutations";
import { getTeacherReq } from "../graphql/queries";

const Dashboard = ({ navigation }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [Loading, setLoading] = useState(false);
	const [status, setstatus] = useState("In Lecture");
	// const [teacherId, setTeacherId] = useState("");
	const [lecture, setLecture] = useState("");
	const [roomNumber, setRoomNumber] = useState("");
	const list = [
		{
			title: "In Lecture",
			type: "error",
			onPress: () => {
				setstatus("In Lecture");
				setLecture("");
				setRoomNumber("");
			},
		},
		{
			title: "On Leave",
			type: "warning",
			onPress: () => {
				setstatus("On Leave");
				setLecture("");
				setRoomNumber("");
			},
		},
		{
			title: "In Cabin",
			type: "primary",
			onPress: () => {
				setstatus("In Cabin");
				setLecture("");
				setRoomNumber("");
			},
		},
		{
			title: "Free",
			type: "success",
			onPress: () => {
				setstatus("Free");
				setLecture("");
				setRoomNumber("");
			},
		},
		{
			title: "Done",
			containerStyle: {
				backgroundColor: theme.colors.secondary,
			},
			titleStyle: { color: theme.colors.primary, alignSelf: "center" },
			onPress: () => setIsVisible(false),
		},
	];
	const th = {
		colors: {
			primary: theme.colors.secondary,
		},
	};

	const _loading = () => {
		setLoading(true);
	};

	const _loaded = () => {
		setLoading(false);
	};

	const updateInfo = () => {
		_loading();
		Auth.currentUserInfo().then((user) => {
			console.log(user);

			API.graphql(
				graphqlOperation(getTeacherReq, {
					id: user.attributes.email,
				})
			).then((teacher) => {
				// setTeacherCode(teacher.data.getTeacher.teacherId);
				const updateDetails = {
					id: user.attributes.email,
					lecture: lecture,
					roomNumber: parseInt(roomNumber),
				};
				// console.log(updateDetails);
				API.graphql(
					graphqlOperation(updateTeacherReq, { input: updateDetails })
				)
					.then((teacher) => {
						_loaded();
						clearInputs();
					})
					.catch((error) => {
						console.log(error);
						_loaded();
					});
				_loaded();
			});
		});
	};

	const handleLectureChange = (text) => {
		// console.log(text);
		setLecture(text);
	};
	const clearInputs = () => {
		setLecture("");
		setRoomNumber("");
	};

	return (
		<View style={styles.root}>
			{status === "In Lecture" && (
				<View style={styles.section}>
					<View style={styles.headerView}>
						<Text style={styles.headerStatus}>{status}</Text>
						<View style={styles.headerIcon}>
							<Icon
								reverse
								size={hp("2")}
								containerStyle={styles.headIcon}
								name="edit"
								type="font-awesome"
								color={theme.colors.secondary}
								onPress={() => setIsVisible(true)}
							/>
						</View>
					</View>
					<View style={styles.container}>
						<TextInput
							style={styles.textInput}
							label="Subject"
							value={lecture}
							mode="outlined"
							theme={th}
							onChangeText={(text) => {
								setLecture(text);
							}}
						/>
						<TextInput
							style={styles.textInput}
							label="Room Number"
							value={roomNumber}
							name="roomNumber"
							mode="outlined"
							theme={th}
							onChangeText={(text) => {
								setRoomNumber(text);
							}}
						/>
					</View>
				</View>
			)}
			{status === "In Cabin" && (
				<View style={styles.section}>
					<View style={styles.headerViewCabin}>
						<Text style={styles.headerStatus}>{status}</Text>
						<View style={styles.headerIcon}>
							<Icon
								reverse
								size={hp("2")}
								containerStyle={styles.headIcon}
								name="edit"
								type="font-awesome"
								color={theme.colors.secondary}
								onPress={() => setIsVisible(true)}
							/>
						</View>
					</View>
					<View style={styles.container}>
						<TextInput
							style={styles.textInput}
							label="Room Number"
							value={roomNumber}
							mode="outlined"
							theme={th}
							onChangeText={(text) => {
								setRoomNumber(text);
							}}
						/>
					</View>
				</View>
			)}
			{status === "On Leave" && (
				<View style={styles.section}>
					<View style={styles.headerViewLeave}>
						<Text style={styles.headerStatus}>{status}</Text>
						<View style={styles.headerIcon}>
							<Icon
								reverse
								size={hp("2")}
								containerStyle={styles.headIcon}
								name="edit"
								type="font-awesome"
								color={theme.colors.secondary}
								onPress={() => setIsVisible(true)}
							/>
						</View>
					</View>
					<View style={styles.container}></View>
				</View>
			)}
			{status === "Free" && (
				<View style={styles.section}>
					<View style={styles.headerViewFree}>
						<Text style={styles.headerStatus}>{status}</Text>
						<View style={styles.headerIcon}>
							<Icon
								reverse
								size={hp("2")}
								containerStyle={styles.headIcon}
								name="edit"
								type="font-awesome"
								color={theme.colors.secondary}
								onPress={() => setIsVisible(true)}
							/>
						</View>
					</View>
					<View style={styles.container}>
						<TextInput
							style={styles.textInput}
							label="Current Room Number"
							value={roomNumber}
							mode="outlined"
							theme={th}
							onChangeText={(text) => {
								setRoomNumber(text);
							}}
						/>
					</View>
				</View>
			)}
			<View style={styles.buttonSection}>
				<Button
					// loading={loading}
					mode="contained"
					// onPress={h}
					loading={Loading}
					color={theme.colors.prime}
					onPress={updateInfo}
				>
					Save
				</Button>
			</View>

			<BottomSheet
				isVisible={isVisible}
				containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
			>
				{list.map((l, i) => (
					<ListItem
						key={i}
						containerStyle={l.containerStyle}
						onPress={l.onPress}
					>
						<ListItem.Content style={styles.listContent}>
							{l.title != "Done" && (
								<Badge
									containerStyle={{ marginHorizontal: 10 }}
									status={l.type}
								/>
							)}
							<ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
						</ListItem.Content>
					</ListItem>
				))}
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	container: {
		justifyContent: "center",
		paddingTop: hp("10"),
		backgroundColor: "white",
	},
	headerView: {
		alignItems: "center",
		borderWidth: 2,
		margin: wp("4"),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		height: hp("5.5"),
		justifyContent: "center",
		borderRadius: 10,
		borderColor: theme.colors.error,
		backgroundColor: theme.colors.errorFade,
		flexDirection: "row",
	},
	headerViewCabin: {
		alignItems: "center",
		borderWidth: 2,
		margin: wp("4"),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		height: hp("5.5"),
		justifyContent: "center",
		borderRadius: 10,
		borderColor: theme.colors.info,
		backgroundColor: theme.colors.infoFade,
		flexDirection: "row",
	},
	headerViewLeave: {
		alignItems: "center",
		borderWidth: 2,
		margin: wp("4"),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		height: hp("5.5"),
		justifyContent: "center",
		borderRadius: 10,
		borderColor: theme.colors.warning,
		backgroundColor: theme.colors.warningFade,
		flexDirection: "row",
	},
	headerViewFree: {
		alignItems: "center",
		borderWidth: 2,
		margin: wp("4"),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		height: hp("5.5"),
		justifyContent: "center",
		borderRadius: 10,
		borderColor: theme.colors.success,
		backgroundColor: theme.colors.successFade,
		flexDirection: "row",
	},
	header: {
		color: "black",
		fontSize: hp("2.6"),
		marginHorizontal: wp("1"),
		color: "rgba(0,0,0,0.8)",
	},
	headerStatus: {
		color: "black",
		fontSize: hp("2.6"),
		marginHorizontal: wp("1"),
		color: "rgba(0,0,0,0.8)",
		fontWeight: "bold",
	},
	headerIcon: { position: "absolute", right: 0 },
	textInput: {
		margin: wp("4"),
		backgroundColor: "white",
		borderColor: theme.colors.primary,
	},
	label: {
		color: theme.colors.secondary,
	},
	row: {
		flexDirection: "row",
		marginTop: 4,
	},
	link: {
		fontWeight: "bold",
		color: theme.colors.primary,
	},
	linkText: {
		fontWeight: "bold",
		color: "white",
		position: "absolute",
		zIndex: 999,
	},
	btnView: {
		alignItems: "center",
	},
	btnRoot: {
		backgroundColor: theme.colors.secondary,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
		borderWidth: 3,
		borderColor: theme.colors.info,
		borderRadius: wp("10"),
		width: wp("40%"),
		paddingHorizontal: wp("1"),
		paddingVertical: hp("4"),
	},
	listContent: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonSection: {
		paddingHorizontal: wp("20"),
	},
});
export default memo(Dashboard);
