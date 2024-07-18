import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Linking,
	StyleSheet,
} from "react-native";
import jsonData from "./leetcode.json"; // Adjust the path as needed

const getRandomLink = (difficulty: "easy" | "medium" | "hard"): string => {
	const links = jsonData[difficulty];
	const randomIndex = Math.floor(Math.random() * links.length);
	return links[randomIndex];
};

const DifficultyBox = ({
	difficulty,
}: {
	difficulty: "easy" | "medium" | "hard";
}) => {
	const [link, setLink] = useState<string | null>(null);

	useEffect(() => {
		setLink(getRandomLink(difficulty));
	}, [difficulty]);

	return (
		<TouchableOpacity
			style={styles.box}
			onPress={() => link && Linking.openURL(link)}>
			<Text style={styles.text}>
				{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
			</Text>
			{/* {link && <Text style={styles.link}>{link}</Text>} */}
		</TouchableOpacity>
	);
};

const App = () => {
	return (
		<View style={styles.container}>
			<DifficultyBox difficulty="easy" />
			<DifficultyBox difficulty="medium" />
			<DifficultyBox difficulty="hard" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 70,
		flex: 1,
		justifyContent: "top",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
	},
	box: {
		width: 300,
		padding: 20,
		margin: 10,
		borderRadius: 10,
		backgroundColor: "#fff",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5,
	},
	text: {
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 10,
	},
	link: {
		color: "blue",
		textDecorationLine: "underline",
	},
});

export default App;
