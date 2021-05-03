import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faCheckSquare,
	faCoffee,
	faReceipt,
	faFileAlt,
	faHandHoldingUsd,
	faMoneyBillAlt,
	faMoneyCheckAlt,
	faFileInvoiceDollar,
	faFileInvoice,
	faUserCircle,
	faPlus,
	faMinus,
	faBook,
	faEnvelope,
	faPiggyBank,
	faSmileBeam,
	faSadTear,
	faFrown,
	faCog,
	faFolderPlus,
	faEdit,
	faCreditCard,
	faUserEdit,
	faPhone,
	faTrashAlt,
	faPen,
	faKey,
	faUser,
	faCheck,
	faCheckCircle,
	faTimes,
	faEye,
	faEyeSlash,
	faFilter,
	faSync,
	faCircleNotch,
	faRupeeSign,
	faShoppingCart,
	faHeart,
	faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faCheckSquare,
	faCoffee,
	faReceipt,
	faFileAlt,
	faHandHoldingUsd,
	faMoneyBillAlt,
	faMoneyCheckAlt,
	faFileInvoiceDollar,
	faFileInvoice,
	faUserCircle,
	faPlus,
	faMinus,
	faBook,
	faEnvelope,
	faPiggyBank,
	faSmileBeam,
	faSadTear,
	faFrown,
	faCog,
	faFolderPlus,
	faEdit,
	faCreditCard,
	faUserEdit,
	faPhone,
	faTrashAlt,
	faPen,
	faKey,
	faUser,
	faCheck,
	faCheckCircle,
	faTimes,
	faEye,
	faEyeSlash,
	faFilter,
	faSync,
	faCircleNotch,
	faRupeeSign,
	faShoppingCart,
	faHeart,
	faBars
);
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen.js";
import OnlyLoginScreen from "./src/screens/OnlyLoginScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import ConfirmAccount from "./src/screens/ConfirmAccount.js";
//import AuthLoadingScreen from "./src/screens/AuthLoadingScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import Dashboard from "./src/screens/Dashboard.js";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen.js";
import Profile from "./src/screens/Profile.js";
import { signUpConfig } from "./options/SignUpConfigs";
import HomeOptions from "./options/HomePageHeaderOptions";
import OtherOptions from "./options/OtherPagesHeaderOption";
// import GeneralOptions from "./options/GeneralOptions";import {
import {
	withAuthenticator,
	AmplifyTheme,
	Authenticator,
} from "aws-amplify-react-native";
import { theme, AmplifyThemeN } from "./core/theme";
import LoginOptions from "./options/loginSignupPageHeaderOption.js";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer/reducer.js";
import { useDispatch, useSelector } from "react-redux";
Amplify.configure(config);

const Stack = createStackNavigator();
const store = createStore(reducer);

function AuthScreens() {
	const [IsSigned, setSignedIn] = React.useState(false);
	const handleAuthStateChange = (state) => {
		if (state === "signedIn") {
			/* Do something when the user has signed-in */
			console.log("signed in");
			setSignedIn(true);
		} else {
			console.log("signed out");
			setSignedIn(false);
		}
	};
	const { checkUser, signed } = useSelector((state) => {
		//console.log(state);
		return state;
	});
	React.useEffect(() => {
		Auth.currentAuthenticatedUser({
			bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		})
			.then((user) => {
				setSignedIn(true);
			})
			.catch((err) => setSignedIn(false));
	}, [checkUser, IsSigned]);

	return (
		<View style={styles.container}>
			<Stack.Navigator
				screenOptions={{
					cardStyleInterpolator:
						CardStyleInterpolators.forFadeFromBottomAndroid,
				}}
			>
				{IsSigned || signed ? (
					<>
						<Stack.Screen
							name="Home"
							component={Dashboard}
							options={HomeOptions}
						/>
						<Stack.Screen
							name="Profile"
							component={Profile}
							options={OtherOptions}
						/>
					</>
				) : (
					<>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={LoginOptions}
						/>
						<Stack.Screen
							name="ConfirmAccount"
							component={ConfirmAccount}
							options={LoginOptions}
						/>
						<Stack.Screen
							name="RegisterScreen"
							component={RegisterScreen}
							options={LoginOptions}
						/>
						<Stack.Screen
							name="LoginScreen"
							component={LoginScreen}
							options={LoginOptions}
						/>
					</>
				)}
				{/* <Stack.Screen name="Home" component={Dashboard} options={HomeOptions} />
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={OtherOptions}
				/> */}
				{/* <Stack.Screen
					name="ForgotPasswordScreen"
					component={ForgotPasswordScreen}
					options={LoginOptions}
				/> */}
			</Stack.Navigator>
		</View>
	);
}

function AppScreens() {
	return (
		<View style={styles.container}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Dashboard} options={HomeOptions} />
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={OtherOptions}
				/>
			</Stack.Navigator>
		</View>
	);
}

const TAPP = () => {
	return (
		<NavigationContainer>
			<PaperProvider>
				<AuthScreens />
				{/* <QRCode /> */}
			</PaperProvider>
		</NavigationContainer>
	);
};

const FinalApp = () => (
	<Provider store={store}>
		<TAPP />
	</Provider>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});

const MyTheme = Object.assign({}, AmplifyTheme, {
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		alignSelf: "center",
		width: "100%",
		backgroundColor: "#FFF",
		marginTop: 30,
	},
	button: {
		backgroundColor: theme.colors.primary,
		alignItems: "center",
		padding: hp("1.5%"),
	},
	buttonDisabled: {
		backgroundColor: theme.colors.primaryFaint,
		alignItems: "center",
		padding: hp("1.5%"),
	},
	sectionHeader: {
		width: "100%",
		marginBottom: hp("2.04%"),
	},
	sectionHeaderText: {
		color: theme.colors.primary,
		fontSize: wp("5.5%"),
		fontWeight: "500",
	},
	sectionFooterLink: {
		fontSize: wp("3.88%"),
		color: theme.colors.primaryFaint,
		alignItems: "baseline",
		textAlign: "center",
	},
	sectionHeaderText: {
		color: theme.colors.primary,
		fontSize: wp("5.5%"),
		fontWeight: "500",
	},
	input: {
		padding: hp("1.5%"),
		borderWidth: 1,
		borderRadius: 3,
		borderColor: "#C4C4C4",
	},
	phoneInput: {
		flex: 2,
		padding: hp("1.5%"),
		borderWidth: 1,
		borderRadius: 3,
		borderColor: "#C4C4C4",
	},
});

export default FinalApp;
