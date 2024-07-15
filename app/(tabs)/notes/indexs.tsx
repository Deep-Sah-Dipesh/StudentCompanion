import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";
import { WebView } from "react-native-webview";

const PdfRead = () => {
	const PdfResource = {
		uri: "https://studymaterials.s3.eu-north-1.amazonaws.com/Semester%201/Chemistry/PYQs/18CY2BSCHY.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEA4CNyzieYAZs%2BxOdxYU75d7sVNuXpaipoJP5zluff29ECICzqhBzvqbiGMATMQu2I2yblahWyWrOfQ6O%2FtB1C8KL7Ku0CCLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjI2OTgwMjEwMjE0IgxFWjtaC%2FdL5axx4dwqwQIPvQVjAdGF33zPQrku%2BmHTR%2B%2B8sVd%2FrY4CYYhaD5k4UnINKUCLoYRYQhY1zQLyfSAmcr3c%2F0UBo4VwaQ%2BqpsF0tkncRreLlSJesutxF4Cqxy9WH2hvbL6fmQ%2FKFuMeoRltg2slNeg1MFD3p7VsYIQjAonqNTouYqFqpUXBKmxerXyTnJbui4h3U5ZoghmGsbbzkkJyTHOPikgYw0UHHABlbd11ly7f03QvcZmEaHfzGhm0bIhw5dqajltCr9ZSAM2cnadvN7fD80pg%2Bre84kcS%2B%2FR1N3y%2FL1kO216ZTZa3hp5A046YGcJLmjQXr7%2FTzwnkWDj09rT6MX7Rl6u8Hp%2FLSXDSMVpmbcCJMYYPAwI0RHkU4NH0270ddcu%2B2ZRdvc3oT3ckD%2FN5nJVQOaVZzi9mKezCYfnnV7M7dg78sq1NSbcw7MbTtAY6swLx2KVhMWRNYOiUGL731Xgi84m8sBNR16fwYp9rEglfWqjWgSxh45lW7PdF%2BMVJwcw9G4ToWQZMWErUKnAbbFLEGB6SevUYuq%2FASS2yOl%2FBUbwFKeQBEHs65gwdSOwjLbnbjQQYmbew22FV9WIZJbLxRsxpCsBSLaelJ5z14W4U1GCdMWvkO9o0zDvbegPVheCP1iFRN%2BiBmdPRrjjwTxUqETteGR6%2BXvV78Gftw3L6RkuF0pNxxI82sFel1vLwlyD95n4H2gpyLHxV93lqNei7iIl%2FmOgnfCvBfgYwS%2F29iCOKBxhXZlhpA%2F8hT6uMB%2FoFXuHNjVTTCYVZvaMJZHYDZubFgqgmmwL8FNhLfCs2mUaGIEkrvLP2q5j6Kh3VCuytWQ%2FvpOluA9YOAvd4wz2kay8y&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240715T115652Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZD6XOYYTKLY2EU5R%2F20240715%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=658f763173eb9a2cbb1c8ff460ec3d088b0a81cf7d1566b75e00091c72578565",
		cache: true,
	};

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
			<WebView
				source={{ html: "<h1><center>Hello world</center></h1>" }}
				style={{ marginTop: 20 }}
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
