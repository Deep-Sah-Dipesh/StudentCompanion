import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
	Linking,
	Image,
} from "react-native";

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
				<Button
					title="Dashboard"
					onPress={() => alert("Navigate to Dashboard")}
				/>
			</View>

			<Text style={styles.sectionTitle}>Your Courses</Text>
			<Text style={styles.subtitle}>
				These are the courses for your semester
			</Text>

			<View style={styles.table}>
				<View style={styles.tableHeader}>
					<Text style={styles.tableHeaderText}>Course Name</Text>
					<Text style={styles.tableHeaderText1}>Syllabus</Text>
					<Text style={styles.tableHeaderText1}>Notes</Text>
					<Text style={styles.tableHeaderText2}>PYQs</Text>
				</View>
				{courses.map((course, index) => (
					<View key={index} style={styles.tableRow}>
						<Text style={styles.tableCell}>{course}</Text>
						<Text
							style={styles.tableCellLink}
							onPress={() => handlePress("https://link-to-syllabus.com")}>
							Link
						</Text>
						<Text
							style={styles.tableCellLink}
							onPress={() => handlePress("https://link-to-notes.com")}>
							Link
						</Text>
						<Text
							style={styles.tableCellLink}
							onPress={() => handlePress("https://link-to-pyqs.com")}>
							Link
						</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
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
	tableHeaderText1: {
		flex: 1,
		fontWeight: "bold",
		textAlign: "left",
		paddingLeft: 40,
	},
	tableHeaderText2: {
		flex: 1,
		fontWeight: "bold",
		textAlign: "left",
		paddingLeft: 35,
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
});
