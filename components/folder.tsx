import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Folder({ title, icon }) {
	return (
		<Card style={styles.card}>
			<Card.Content style={styles.content}>
				<MaterialCommunityIcons name={icon} size={40} color="blue" />
				<Text style={styles.title}>{title}</Text>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		margin: 10,
		width: 120,
		height: 120,
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		marginTop: 10,
		fontSize: 16,
		textAlign: "center",
	},
});
