import React, { useState } from "react";

import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import useBearStore from "../state/index";

import { useAuth } from "@/context/AuthContext";

const FoldersScreen = ({ title, foldersx }) => {
	// Dummy data for folders

	const { authState } = useAuth();

	const handleFolderClick = (folder) => {
		// setSelectedFolder(folder);
		console.log(`Selected folder: ${folder}`);
		// Perform any additional actions you need when a folder is selected
	};

	const { bears, subject, type, increasePopulation, setSubject, setType } =
		useBearStore();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>
				{`  Branch: ${authState?.branch.toUpperCase()}`}{" "}
				{`                       Semester: ${title}`}
			</Text>

			{foldersx.map((folder) => (
				<TouchableOpacity
					style={styles.folderItem}
					onPress={() => setSubject(folder)}>
					<View style={styles.folderIcon}>
						{/* Your folder icon component */}

						<FontAwesome name="folder" size={20} color="#000" />
					</View>
					<Link href="/materials" asChild>
						<Pressable
							onPress={(e) => {
								setSubject(folder);
							}}>
							<Text style={styles.folderName}>{folder}</Text>
						</Pressable>
					</Link>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		fontWeight: "bold",
	},
	container: {
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	folderItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	folderIcon: {
		width: 30, // Adjust as per your icon size
		height: 30, // Adjust as per your icon size
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	folderName: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default FoldersScreen;
