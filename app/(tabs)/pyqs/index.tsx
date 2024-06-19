import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
	Image,
} from "react-native";

export default function App() {
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
				<Button title="Dashboard" onPress={() => {}} />
			</View>
			<Text style={styles.subTitle}>Previous Year Question Papers</Text>
			<Text style={styles.description}>
				Come find the Previous Year Question Papers for all the courses year
				wise...
			</Text>
			<View style={styles.table}>
				<Text style={styles.semester}>Semester ...</Text>
				<View style={styles.tableHeader}>
					<Text style={styles.tableHeaderText}>Course Code</Text>
					<Text style={styles.tableHeaderText1}>2020</Text>
					<Text style={styles.tableHeaderText1}>2021</Text>
					<Text style={styles.tableHeaderText1}>2022</Text>
				</View>
				{Array.from({ length: 10 }).map((_, index) => (
					<View key={index} style={styles.tableRow}>
						<Text style={styles.courseCode}>Course_{index + 1} Code</Text>
						<View style={styles.links}>
							<Text style={styles.link}>Link</Text>
							<Text style={styles.link}>Link</Text>
							<Text style={styles.link}>Link</Text>
						</View>
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
		textAlign: "center",
		padding: 10,
		fontWeight: "bold",
	},
	tableRow: {
		flexDirection: "row",
		borderTopWidth: 1,
		borderColor: "#ddd",
	},
	courseCode: {
		flex: 1,
		textAlign: "center",
		padding: 10,
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
	logo: {
		width: 50,
		height: 50,
	},
	tableHeaderText1: {
		flex: 1,
		textAlign: "center",
		paddingVertical: 10,
		paddingLeft: 10,

		fontWeight: "bold",
	},
});
