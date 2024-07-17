import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Folder from "../../../components/folder";

import { useAuth } from "../../../context/AuthContext";

export default function HomeScreen() {
	const { authState } = useAuth();

	const folders = [
		{ title: "daily digest", icon: "folder" },
		{ title: "my info", icon: "folder-account" },
		{ title: "bookmarks", icon: "folder-star" },
		{ title: "saved documents", icon: "folder-multiple" },
	];

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{folders.map((folder, index) => (
				<Folder key={index} title={authState?.usn} icon={folder.icon} />
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "80%",
		height: 40,
		backgroundColor: "#0066cc",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		padding: 10,
	},
});
