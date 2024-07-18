import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Card } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Folder({ title, icon, href }) {
	const router = useRouter();
	return (
		<Card style={styles.card}>
			<Card.Content style={styles.content}>
				<Pressable
					style={styles.pressable}
					onPress={() => {
						router.push(`(protected)/${href}`);
						console.log("pushed");
					}}>
					<MaterialCommunityIcons name={icon} size={40} color="blue" />
					<Text style={styles.title}>{title}</Text>
				</Pressable>
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
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	pressable: {
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		marginTop: 10,
		fontSize: 22,
		textAlign: "center",
	},
});
