import React from "react";
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
import { useAuth } from "../../../context/AuthContext";

import data from "./data.json";

import FoldersScreen from "@/components/Foldnav";
const FoldersScree = () => {
	// Dummy data for folders

	const { authState } = useAuth();

	console.log(data);

	const b = data;
	var a;

	console.log(authState);

	if (authState?.semester <= 2) {
		a = b["folders"][`Semester ${authState.semester}`]["folders"];
	} else {
		if (authState?.branch == "cs") {
			a =
				b["folders"][`Semester ${authState.semester}`]["folders"]["CSE"][
					"folders"
				];
		} else if (authState?.branch == "is") {
			a =
				b["folders"][`Semester ${authState.semester}`]["folders"]["ISE"][
					"folders"
				];
		}
	}

	console.log(Object.keys(a));

	return <FoldersScreen title={authState.semester} foldersx={Object.keys(a)} />;
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

export default FoldersScree;
