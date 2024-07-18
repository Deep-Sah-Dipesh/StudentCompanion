import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";
import { useLocalSearchParams } from "expo-router";

const PdfRead = () => {
	const { id } = useLocalSearchParams();

	return (
		<View style={styles.container}>
			<Pdf
				trustAllCerts={false}
				source={PdfResource}
				style={styles.pdf}
				onLoadComplete={(numberOfPages, filePath) => {
					console.log(`number of pages: ${numberOfPages}`);
				}}
			/>
		</View>
	);
};

export default PdfRead;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 10,
	},
	pdf: {
		flex: 1,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});
