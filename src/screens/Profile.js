import React, { useState, useEffect } from "react";
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
	Button,
	Menu,
	Divider,
} from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
	faEnvelope,
	faUser,
	faBuilding,
} from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import InputField from "../components/InputField.js";

import { theme } from "../core/theme";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { useDispatch, useSelector } from "react-redux";

import { getTeacherReq } from "../graphql/queries";
import { updateTeacherReq } from "../graphql/mutations";

const Profile = ({ navigation }) => {
	const [Name, setName] = useState("");
	const [TeacherCode, setTeacherCode] = useState("");
	const [Phone, setPhone] = useState("");
	const [Dept, setDept] = useState("");

	const [Data, setData] = useState([]);
	const [InitState, setInitState] = useState(true);
	const [Loading, setLoading] = useState(false);
	const [Error, setError] = useState(false);
	const [MenuVisibility, setMenuVisibility] = useState(false);

	const dispatch = useDispatch();

	const openDial = () => {
		if (Platform.OS === "android") {
			Linking.openURL(`tel:${profile.phone}`);
		} else {
			Linking.openURL(`telprompt:${data.phone}`);
		}
	};

	const _loading = () => {
		setLoading(true);
		setInitState(true);
	};

	const _loaded = () => {
		setLoading(false);
	};

	const _error = () => {
		setError(true);
		setInitState(false);
	};

	const _success = () => {
		setError(false);
		setInitState(false);
		setTimeout(() => {
			setInitState(true);
		}, 3000);
	};

	useEffect(() => {
		Auth.currentUserInfo().then((user) => {
			console.log(user);
			API.graphql(
				graphqlOperation(getTeacherReq, {
					id: user.attributes.email,
				})
			).then((teacher) => {
				console.log(teacher);
				setTeacherCode(teacher.data.getTeacher.teacherId);
				setPhone(teacher.data.getTeacher.phone);
				setDept(teacher.data.getTeacher.dept);
				setName(teacher.data.getTeacher.name);
			});
		});
	}, []);

	const updateInfo = () => {
		_loading();
		Auth.currentUserInfo().then((user) => {
			console.log(user);
			const updateDetails = {
				id: user.attributes.email,
				name: Name,
				phone: Phone,
				dept: Dept,
			};
			API.graphql(graphqlOperation(updateTeacherReq, { input: updateDetails }))
				.then((teacher) => {
					_loaded();
					_success();
				})
				.catch((error) => {
					console.log(error);
					_loaded();
					_error();
				});
		});
	};

	const LogOut = async () => {
		try {
			await Auth.signOut();
			dispatch({ type: "CHECK_USER" });
			dispatch({ type: "CHECK_SIGNED", payload: false });
		} catch (error) {
			console.log("error signing out: ", error);
		}
	};

	return (
		<View style={styles.root}>
			{/* {Loading === true ? (
				<LoadingInd loading={Loading} />
			) : ( */}
			<View style={styles.main}>
				{/* <View style={styles.imageView}>
					<Image
						style={styles.profileImage}
						source={require("../assets/user.png")}
					></Image>
				</View> */}
				{/* <View style={styles.topInput}>
					<InputField
						iconVisibility={false}
						placeholder={profile.name || ""}
						value={Name}
						valueFound={true}
						label="Name"
						maxLength={60}
						onChangeText={(value) => setName(value)}
					/>
					<InputField
						iconVisibility={false}
						placeholder={profile.profession || ""}
						value={Profession}
						valueFound={true}
						label="Profession"
						maxLength={100}
						onChangeText={(value) => setProfession(value)}
					/>
				</View> */}
				<View style={styles.midInput}>
					<InputField
						iconVisibility={true}
						placeholder={Name || ""}
						icon={faUser}
						value={Name}
						valueFound={true}
						label="Name"
						onChangeText={(value) => setName(value)}
					/>
					<InputField
						iconVisibility={true}
						icon={faMobileAlt}
						placeholder={Phone}
						value={Phone}
						valueFound={true}
						label="Phone"
						maxLength={10}
						keyboardType="numeric"
						onChangeText={(value) => setPhone(value)}
					/>
					<InputField
						iconVisibility={true}
						// placeholder={profile.name || ""}
						icon={faBuilding}
						value={Dept}
						valueFound={true}
						label="Department"
						onChangeText={(value) => setDept(value)}
					/>
				</View>

				<View style={styles.bottom}>
					<Text style={styles.label}>Teacher Code</Text>
					<View style={styles.bottomView}>
						<View style={styles.cardEdit}>
							<FontAwesomeIcon
								icon="key"
								size={wp("3.40%")}
								color={theme.colors.primary}
							/>
						</View>
						<View style={styles.cardView}>
							<Text style={styles.cardText}>{TeacherCode}</Text>
						</View>
					</View>
				</View>

				<View style={styles.saveButtonView}>
					<Button
						style={styles.button}
						theme={th}
						mode="contained"
						labelStyle={styles.buttonLabelStyle}
						loading={Loading}
						disabled={Error}
						onPress={() => {
							updateInfo();
						}}
					>
						{InitState ? "Save" : Error ? "Failed!" : "Saved"}
					</Button>
				</View>
				<View style={styles.saveButtonView}>
					<Button
						style={styles.button}
						theme={th}
						mode="contained"
						labelStyle={styles.buttonLabelStyle}
						disabled={Error}
						onPress={() => {
							LogOut();
						}}
					>
						Log Out
					</Button>
				</View>
			</View>
			{/* )} */}
		</View>
	);
};
const th = {
	colors: {
		primary: theme.colors.secondary,
	},
};
const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "white",
	},
	imageView: {
		alignItems: "center",
		marginTop: hp("13%"),
	},
	midInput: {
		paddingVertical: hp("1"),
	},
	profileImage: {
		height: hp("10.025"),
		width: hp("10.025"),
		borderRadius: wp("18.24%"),
		marginTop: hp("-9.39%"),
	},
	topInput: {
		marginVertical: hp("2%"),
	},
	bottomInput: {},
	personDescriptionView: {
		alignItems: "center",
	},
	profileInfo: {
		marginTop: hp("1.25%"),
	},
	personDescriptionCard: {
		marginTop: hp("1.25%"),
		marginHorizontal: wp("4.86%"),
		backgroundColor: "white",
	},
	bottom: {
		marginBottom: hp("6%"),
	},
	bottomView: {
		flexDirection: "row",
		marginVertical: hp("-4%"),
		marginHorizontal: wp("0.3%"),
	},
	cardView: {
		marginVertical: hp("1%"),
		flexDirection: "row",
	},
	label: {
		top: hp("-2%"),
		marginHorizontal: wp("18.9%"),
		paddingBottom: hp("2%"),
		color: theme.colors.secondary,
		fontSize: hp("1.6%"),
	},
	cardText: {
		marginHorizontal: wp("-3.8%"),
		fontSize: hp("2.25%"),
	},
	cardEdit: {
		borderWidth: 1,
		marginHorizontal: wp("8%"),
		marginTop: hp("0.5%"),
		marginBottom: hp("2%"),
		top: hp("-1%"),
		padding: hp("0.6%"),
		borderRadius: wp("15%"),
		borderColor: "rgba(0,0,0,0.2)",
	},
	saveButtonView: {
		marginHorizontal: wp("10%"),
		marginVertical: hp("2%"),
	},
	button: {
		padding: hp("0.5%"),
	},
	buttonLabelStyle: {
		fontSize: wp("3.2%"),
	},
	menuItemTextHead: {
		fontSize: wp("4%"),
		fontWeight: "bold",
	},
	menuItemText: {
		fontSize: wp("4%"),
	},
});
export default Profile;
