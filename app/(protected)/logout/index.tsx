import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function Logout() {
	const { onLogout } = useAuth();
	const router = useRouter();

	return (
		<View style={styles.container}>
			<Pressable
				style={styles.button}
				onPress={() => {
					onLogout();
					router.replace("/(auth)/signup");
				}}>
				<Text style={styles.buttonText}>Logout</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f0f0", // Example background color for the container
	},
	button: {
		backgroundColor: "#3498db", // Example background color for the button
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 6,
	},
	buttonText: {
		color: "#ffffff", // Example text color for the button text
		fontSize: 18,
	},
});
