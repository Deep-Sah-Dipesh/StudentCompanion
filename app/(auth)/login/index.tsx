import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import axios from "axios";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";

const App = () => {
	const [usn, setUsn] = useState("");
	const [password, setPassword] = useState("");
	const { onLogin1 } = useAuth();

	const { authState } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	// const handleSignIn = () => {
	//   axios
	//     .post("https://your-api-url/request", data)
	//     .then((response) => {
	//       console.log("Profile Saved:", response.data);
	//       // Handle success, e.g., show a success message to the user
	//     })
	//     .catch((error) => {
	//       console.error("Error saving profile:", error);
	//       // Handle error, e.g., show an error message to the user
	//     });

	//   // Add your sign-in logic here
	//   console.log("USN:", usn);
	//   console.log("Password:", password);
	// };

	useEffect(() => {
		const b = async () => {
			const a = await fetch("http:10.230.1.109:3000/");
			console.log(a);
		};

		b();
	}, []);

	const hello = async () => {
		const b = async () => {
			const a = await fetch("http:10.210.32.199:3000/");
			console.log(a);
		};

		b();

		const a = await fetch("http:10.210.32.199:3000/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				usn: usn,
				password: password,
			}),
		});

		console.log(a, "hithesh");
		onLogin1!("admin", "admin", "hjvjh");
	};

	const onSignInPress = async () => {
		onLogin1!("admin", "admin", "jhvhjvjh");
	};

	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/1024px-BMS_College_of_Engineering.svg.png",
				}}
				style={styles.logo}
			/>
			<Text style={styles.title}>STUDENT COMPANION</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter USN"
				value={usn}
				onChangeText={setUsn}
			/>
			<TextInput
				style={styles.input}
				placeholder="Enter your password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TouchableOpacity
				style={styles.forgotPassword}
				onPress={() => {
					/* Add forgot password logic */
				}}>
				<Text style={styles.forgotPasswordText}>Forgot password?</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					onSignInPress();
					hello();
					router.replace("/(protected)");
				}}>
				<Text style={styles.buttonText}>Sign In</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	logo: {
		width: 100,
		height: 100,
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 40,
		fontWeight: "bold",
	},
	input: {
		width: "80%",
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	forgotPassword: {
		alignSelf: "flex-end",
		marginBottom: 20,
		marginRight: 35,
	},
	forgotPasswordText: {
		color: "#0066cc",
		fontSize: 14, // Adjust the font size as needed
	},

	button: {
		width: "80%",
		height: 40,
		backgroundColor: "#0066cc",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default App;
