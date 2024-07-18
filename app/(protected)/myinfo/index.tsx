import React from "react";
import { View, Text, StyleSheet } from "react-native";

import useBearStore from "@/state/index";
import { useAuth } from "@/context/AuthContext";

const AccountScreen = () => {
	const { authState } = useAuth();

	return (
		<View style={styles.container}>
			<View style={styles.displayContainer}>
				<Text style={styles.displayText}>USN: 1BM22CS113</Text>
				<Text style={styles.displayText}>Branch: {authState.branch}</Text>
				<Text style={styles.displayText}>Semester: {authState.semester}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
