import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
	Linking,
	Image,
	Dimensions,
	Pressable,
} from "react-native";

import { Link } from "expo-router";

export default function App() {
	const courses = [
		"Course_1 Name",
		"Course_2 Name",
		"Course_3 Name",
		"Course_4 Name",
		"Course_5 Name",
		"Course_6 Name",
		"Course_7 Name",
		"Course_8 Name",
		"Course_9 Name",
		"Course_10 Name",
	];

	const handlePress = (link) => {
		Linking.openURL(link);
	};

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

			<Text style={styles.sectionTitle}>Syllabus Section</Text>
			<Text style={styles.subtitle}>
				Below are the syllabus for your courses
			</Text>

			<View style={styles.table}>
				<View style={styles.tableHeader}>
					<Text style={styles.tableHeaderText}>Course Names</Text>
					<Text style={styles.tableHeaderText}>Syllabus for Year 202X</Text>
				</View>
				{courses.map((course, index) => (
					<View key={index} style={styles.tableRow}>
						<Text style={styles.tableCell}>{course}</Text>
						<View style={styles.links}>
							<Link href="/display/2" asChild>
								<Pressable>
									<Text style={styles.link}>Link3</Text>
								</Pressable>
							</Link>
						</View>
					</View>
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
	links: {
		flex: 3,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		padding: 10,
	},
	link: {
		color: "blue",
		textDecorationLine: "underline",
	},

	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	logo: {
		width: 50,
		height: 50,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	sectionTitle: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 20,
		color: "gray",
	},
	table: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
	},
	tableHeader: {
		flexDirection: "row",
		backgroundColor: "#f0f0f0",
		padding: 10,
	},
	tableHeaderText: {
		flex: 1,
		fontWeight: "bold",
		textAlign: "center",
	},
	tableRow: {
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: 1,
		borderColor: "#ccc",
	},
	tableCell: {
		flex: 1,
		textAlign: "center",
	},
	tableCellLink: {
		flex: 1,
		textAlign: "center",
		color: "blue",
		textDecorationLine: "underline",
	},
	pdf: {
		flex: 1,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});
