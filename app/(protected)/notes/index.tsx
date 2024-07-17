import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
	Image,
	Dimensions,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { Link } from "expo-router";

import PdfRead from "./preview";
export default function App() {
	const PdfResource = { uri: "www.example.com/pdf", cache: true };

	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.logo}
					source={{
						uri: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/1024px-BMS_College_of_Engineering.svg.png",
					}} // Replace with your logo URL
				/>

				<Text style={styles.title}>Student Companion</Text>
				<Link href="/dashboard" asChild>
					<Pressable>
						<Text style={styles.button}>Dashboard</Text>
					</Pressable>
				</Link>
			</View>
			<Text style={styles.subTitle}>Notes Collection</Text>
			<Text style={styles.description}>
				Find the notes curated by several faculties and institutions for better
				understanding of the topics...
			</Text>
			<View style={styles.table}>
				<Text style={styles.semester}>Semester ...</Text>
				<View style={styles.tableHeader}>
					<Text style={styles.tableHeaderText}>Course Name</Text>
					<Text style={styles.tableHeaderText}>Notes by Faculties</Text>
				</View>
				{Array.from({ length: 10 }).map((_, index) => (
					<>
						<View key={index} style={styles.tableRow}>
							<Text style={styles.courseName}>Course_{index + 1} Name</Text>
							<View style={styles.links}>
								<Link href="/display/0" asChild>
									<Pressable>
										<Text style={styles.link}>Link3</Text>
									</Pressable>
								</Link>
								<Link href="/display/0" asChild>
									<Pressable>
										<Text style={styles.link}>Link3</Text>
									</Pressable>
								</Link>
								<Link href="/display/0" asChild>
									<Pressable>
										<Text style={styles.link}>Link3</Text>
									</Pressable>
								</Link>
							</View>
						</View>
					</>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#3498db",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
		alignItems: "center",
	},

	pdf: {
		flex: 1,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	container1: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 25,
	},

	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	subTitle: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		marginVertical: 10,
	},
	description: {
		textAlign: "center",
		marginBottom: 20,
		paddingHorizontal: 10,
	},
	table: {
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 5,
		overflow: "hidden",
	},
	semester: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		padding: 10,
		backgroundColor: "#f0f0f0",
	},
	tableHeader: {
		flexDirection: "row",
		backgroundColor: "#e0e0e0",
	},
	tableHeaderText: {
		flex: 1,
		textAlign: "left",
		paddingLeft: 20,
		paddingVertical: 10,
		fontWeight: "bold",
	},
	tableRow: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderColor: "#ddd",
	},
	courseName: {
		flex: 1,
		textAlign: "center",
		padding: 10,
	},
	links: {
		flex: 2,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 10,
	},
	link: {
		color: "blue",
		textDecorationLine: "underline",
	},
	logo: {
		width: 50,
		height: 50,
	},
});
