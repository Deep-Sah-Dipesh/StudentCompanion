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
import useBearStore from "../../../state/index";

import data from "./data.json";

import FoldersScreen from "@/components/foldernotes";
const FoldersScree = () => {
	// Dummy data for folders

	const { authState } = useAuth();

	return <FoldersScreen title={"hello"} />;
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
