import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Folder from "../../components/folder";

import { useAuth } from "../../context/AuthContext";

export default function HomeScreen() {
	const { authState } = useAuth();

	const folders = [
		{
			title: "Study Materials",
			icon: "folder-multiple",
			href: "subjects",
		},
		{
			title: "Daily Digest",
			icon: "calendar-check",
			href: "dailydigest",
		},
		// { title: "Bookmarks", icon: "folder-star" },
		{
			title: "My Info",
			icon: "account",
			href: "myinfo",
		},
	];

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{folders.map((folder, index) => (
				<Folder
					key={index}
					title={folder.title}
					icon={folder.icon}
					href={folder.href}
				/>
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
