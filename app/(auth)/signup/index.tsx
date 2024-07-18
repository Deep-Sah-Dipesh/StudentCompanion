import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Button,
	Image,
	ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
	const [fullName, setFullName] = useState("");
	const [usn, setUsn] = useState("");
	const [branch, setBranch] = useState("");
	const [semester, setSemester] = useState("");
	const [password, setPassword] = useState("");
	const { onLogin } = useAuth();

	const router = useRouter();

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
		onLogin!("admin", "admin");
	};

	const saveProfile = async () => {
		onLogin!(usn, semester, branch);

		// Prepare the data to send
		const data = {
			fullName: fullName,
			usn: usn,
			branch: branch,
			semester: semester,
			password: password,
		};
		const b = await fetch("http:10.230.1.109:3000/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		// Send POST request using fetch
		// fetch("http:10.230.1.109:3000/request", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// })
		// 	.then((response) => response.json())
		// 	.then((responseData) => {
		// 		console.log("Profile Saved:", responseData);
		// 		// Handle success, e.g., show a success message to the user
		// 	})
		// 	.catch((error) => {
		// 		console.error("Error saving profile:", error);
		// 		// Handle error, e.g., show an error message to the user
		// 	});
	};

	return (
		<View style={styles.outerContainer}>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.header}>
					<Image
						style={styles.logo}
						source={{
							uri: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/1024px-BMS_College_of_Engineering.svg.png",
						}} // Replace with your logo URL
					/>
				</View>
				<Text style={styles.title}>Student Companion</Text>
				<Text style={styles.heading}>Set up your profile</Text>
				<Text style={styles.subHeading}>
					Fill in your details to continue setting up your profile
				</Text>

				<Text style={styles.label}>Full Name</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter Name"
					value={fullName}
					onChangeText={setFullName}
				/>

				<Text style={styles.label}>USN</Text>
				<TextInput
					style={styles.input}
					placeholder="Enter USN"
					value={usn}
					onChangeText={setUsn}
				/>
				<Text style={styles.label}>Password</Text>

				<TextInput
					style={styles.input}
					placeholder="Enter your password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>

				<Text style={styles.label}>Select your Branch</Text>
				<Picker
					selectedValue={branch}
					style={styles.picker}
					onValueChange={(itemValue) => setBranch(itemValue)}>
					<Picker.Item label="Branch" value="" />
					<Picker.Item label="Computer Science" value="cs" />
					<Picker.Item label="Information Science" value="is" />
					{/* Add more branches as needed */}
				</Picker>

				<Text style={styles.label}>Select your Semester</Text>
				<Picker
					selectedValue={semester}
					style={styles.picker}
					onValueChange={(itemValue) => setSemester(itemValue)}>
					<Picker.Item label="Semester" value="" />
					<Picker.Item label="1" value="1" />
					<Picker.Item label="2" value="2" />
					<Picker.Item label="3" value="3" />
					<Picker.Item label="4" value="4" />
				</Picker>

				<TouchableOpacity
					style={styles.saveButton}
					onPress={() => {
						saveProfile();
					}}>
					<Text style={styles.saveButtonText}>Save my Profile</Text>
				</TouchableOpacity>
			</ScrollView>
			<View style={styles.footer}>
				<TouchableOpacity>
					<Text
						style={styles.signOutButton}
						title="Login"
						onPress={() => {
							router.push("/login");
						}}>
						Proceed to Login
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		flexGrow: 1,
		paddingTop: 2,
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		paddingBottom: 60, // Added paddingBottom to ensure the bottom elements are not cut off
	},
	header: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 4,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		alignSelf: "center",
		marginVertical: 3,
	},
	signOutButton: {
		width: "100%",
		paddingVertical: 10,
		backgroundColor: "#0066cc",
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 10,
	},
	subHeading: {
		fontSize: 14,
		textAlign: "center",
		marginBottom: 2,
	},
	label: {
		fontSize: 16,
		marginVertical: 5,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 10,
		marginVertical: 5,
	},
	picker: {
		height: 50,
		width: "100%",
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		marginVertical: 5,
	},
	saveButton: {
		backgroundColor: "#0066cc",
		padding: 15,
		borderRadius: 5,
		marginTop: 20,
		alignItems: "center",
	},
	saveButtonText: {
		color: "white",
		backgroundColor: "#0066cc",

		fontSize: 16,
	},
	logo: {
		width: 50, // Adjust as per your logo's size
		height: 50, // Adjust as per your logo's size
		alignSelf: "center",
		marginTop: 20,
	},
	footer: {
		paddingHorizontal: 20,
		backgroundColor: "#fff",
		justifyContent: "flex-end",
	},
});
