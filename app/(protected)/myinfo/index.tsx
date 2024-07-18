import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import useBearStore from "@/state/index";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

const AccountScreen = () => {
	const { authState, onLogout } = useAuth();
	const router = useRouter();

	return (
		<View style={styles.container}>
			<View style={styles.displayContainer}>
				<Text style={styles.displayText}>USN: 1BM22CS113</Text>
				<Text style={styles.displayText}>Branch: {authState.branch}</Text>
				<Text style={styles.displayText}>Semester: {authState.semester}</Text>
				<Pressable
					onPress={() => {
						onLogout();
						router.replace("(auth)/login");
					}}>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Logout</Text>
					</View>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonText: {
		color: "#ffffff", // Example text color for the button text
		fontSize: 18,
	},

	button: {
		marginTop: 16,
		backgroundColor: "#3498db", // Example background color for the button
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
	},

	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#fff",
	},
	displayContainer: {
		marginTop: 32,
	},
	displayText: {
		fontSize: 18,
		marginBottom: 8,
	},
});

export default AccountScreen;
