import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Folder from "./folder";

export default function HomeScreen() {
	const folders = [
		{ title: "Work", icon: "folder" },
		{ title: "Personal", icon: "folder-account" },
		{ title: "Important", icon: "folder-star" },
		{ title: "Projects", icon: "folder-multiple" },
	];

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{folders.map((folder, index) => (
				<Folder key={index} title={folder.title} icon={folder.icon} />
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		padding: 10,
	},
});
