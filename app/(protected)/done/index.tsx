import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";

import useBearStore from "@/state/index";

const PdfRead = () => {
	const all = [
		"https://studymaterials.s3.eu-north-1.amazonaws.com/Semester%203/CSE/COA/Notes/Unit-3-Memory.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCmV1LW5vcnRoLTEiRzBFAiEAyyggnWp%2BT7FQtV7CkalKQMf%2BQ1XrvWRLb76c5u5epeICIDNDXThNSBFctiqfVt%2FY7GNxM5yXfk2whEAh5kZK08rhKu0CCNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjI2OTgwMjEwMjE0IgywMSgkp0Sv0vAYn9AqwQI4JpuHCizWqkBWLoW7KeC8R93QTKJO1hdc3faqMh8uU9knywC5Krf%2F%2FOtAJD1lMA%2BNXHSmX76sNhxpF7OAwc4LqiG2W487wAQgUJXPKjC%2F0hM3l%2FSsP7Rsvwv54aYLH6cR2HXcNfoy2XjK%2BhGx7ic%2B61cp%2B4NZrdlpEcA8w5ZXVo%2Bqkr0MWnL1dl0iMpMgRgNGSI5jYzYp%2B9H8hhH76r4F3x09lGOA%2Bln%2F8doWeRNo6aM3yiO8KzL49qRDIYvu3EQWdaj%2FyuKY0Pd18xGJ1MgBnZktD8DPKZBV0TCwElBAixwKcDqqUYkYlj0VgxbFi9kTI%2FIgDZugIzVC8BaOXGfhbbMABDp1DU9JunXNfgqqEewxOdjvPosWkQi44mEpg%2FYgQMpQhh7%2F1NBG%2FX%2FsewxdEVMAywX4kE8fqrSxJa2AoXEw3P7YtAY6swIq4E8AGMarJ9kGWQScJytlVxM7PIlnGT88lGyQ5HZybKIHDL0O0KsSbv6F1vl4ckOxNqG2OmiBMryhujJui485ZVsEPjg1uA17RrfqxcHf6WSzY55ejINf6frqvzDIRV5pVHRuKprbrZFXxcIWnfmrW5v5jLPJpIq6AnAvtOk6AGqL8cIFsSsNKfOBE8ptCA%2FkALqDfcvUzkAYmozdVomxO1LelFvaAoQrIcGMHXANFEVl3POx9sijaz272%2BuDCJz8WY62xoP6BgVDKOtapwaWd7mFniuojDEINYHIJoQuhxrZIld7Ux3Q3dQ7Gpd%2Fa4dOVtGdo83Y9uw6%2BiE2k0aVjcRv8V0qqVowI%2BkfOcDZTKzzHqWnE1AAB5gcvAPB0eG%2FStNxMchErRbtvJxxjX9rDf6r&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240716T093817Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZD6XOYYTC6MLTWFP%2F20240716%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=95544a057ea1c6676b426f89dfe354fc295769e4307f345125c0e62e176e1211",
		"https://studymaterials.s3.eu-north-1.amazonaws.com/Semester%203/CSE/OOJ/PYQs/23CS3PCOOJ.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCmV1LW5vcnRoLTEiRzBFAiEAyyggnWp%2BT7FQtV7CkalKQMf%2BQ1XrvWRLb76c5u5epeICIDNDXThNSBFctiqfVt%2FY7GNxM5yXfk2whEAh5kZK08rhKu0CCNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjI2OTgwMjEwMjE0IgywMSgkp0Sv0vAYn9AqwQI4JpuHCizWqkBWLoW7KeC8R93QTKJO1hdc3faqMh8uU9knywC5Krf%2F%2FOtAJD1lMA%2BNXHSmX76sNhxpF7OAwc4LqiG2W487wAQgUJXPKjC%2F0hM3l%2FSsP7Rsvwv54aYLH6cR2HXcNfoy2XjK%2BhGx7ic%2B61cp%2B4NZrdlpEcA8w5ZXVo%2Bqkr0MWnL1dl0iMpMgRgNGSI5jYzYp%2B9H8hhH76r4F3x09lGOA%2Bln%2F8doWeRNo6aM3yiO8KzL49qRDIYvu3EQWdaj%2FyuKY0Pd18xGJ1MgBnZktD8DPKZBV0TCwElBAixwKcDqqUYkYlj0VgxbFi9kTI%2FIgDZugIzVC8BaOXGfhbbMABDp1DU9JunXNfgqqEewxOdjvPosWkQi44mEpg%2FYgQMpQhh7%2F1NBG%2FX%2FsewxdEVMAywX4kE8fqrSxJa2AoXEw3P7YtAY6swIq4E8AGMarJ9kGWQScJytlVxM7PIlnGT88lGyQ5HZybKIHDL0O0KsSbv6F1vl4ckOxNqG2OmiBMryhujJui485ZVsEPjg1uA17RrfqxcHf6WSzY55ejINf6frqvzDIRV5pVHRuKprbrZFXxcIWnfmrW5v5jLPJpIq6AnAvtOk6AGqL8cIFsSsNKfOBE8ptCA%2FkALqDfcvUzkAYmozdVomxO1LelFvaAoQrIcGMHXANFEVl3POx9sijaz272%2BuDCJz8WY62xoP6BgVDKOtapwaWd7mFniuojDEINYHIJoQuhxrZIld7Ux3Q3dQ7Gpd%2Fa4dOVtGdo83Y9uw6%2BiE2k0aVjcRv8V0qqVowI%2BkfOcDZTKzzHqWnE1AAB5gcvAPB0eG%2FStNxMchErRbtvJxxjX9rDf6r&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240716T095618Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZD6XOYYTC6MLTWFP%2F20240716%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=aa804a7da9975bfe3c38d97aa7675bc457062cf8ee1f5f55644280b5de29641e",
		"https://studymaterials.s3.eu-north-1.amazonaws.com/Semester%203/CSE/OOJ/Syllabus/Object%20Oriented%20Java%20Programming.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCmV1LW5vcnRoLTEiRzBFAiEAyyggnWp%2BT7FQtV7CkalKQMf%2BQ1XrvWRLb76c5u5epeICIDNDXThNSBFctiqfVt%2FY7GNxM5yXfk2whEAh5kZK08rhKu0CCNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjI2OTgwMjEwMjE0IgywMSgkp0Sv0vAYn9AqwQI4JpuHCizWqkBWLoW7KeC8R93QTKJO1hdc3faqMh8uU9knywC5Krf%2F%2FOtAJD1lMA%2BNXHSmX76sNhxpF7OAwc4LqiG2W487wAQgUJXPKjC%2F0hM3l%2FSsP7Rsvwv54aYLH6cR2HXcNfoy2XjK%2BhGx7ic%2B61cp%2B4NZrdlpEcA8w5ZXVo%2Bqkr0MWnL1dl0iMpMgRgNGSI5jYzYp%2B9H8hhH76r4F3x09lGOA%2Bln%2F8doWeRNo6aM3yiO8KzL49qRDIYvu3EQWdaj%2FyuKY0Pd18xGJ1MgBnZktD8DPKZBV0TCwElBAixwKcDqqUYkYlj0VgxbFi9kTI%2FIgDZugIzVC8BaOXGfhbbMABDp1DU9JunXNfgqqEewxOdjvPosWkQi44mEpg%2FYgQMpQhh7%2F1NBG%2FX%2FsewxdEVMAywX4kE8fqrSxJa2AoXEw3P7YtAY6swIq4E8AGMarJ9kGWQScJytlVxM7PIlnGT88lGyQ5HZybKIHDL0O0KsSbv6F1vl4ckOxNqG2OmiBMryhujJui485ZVsEPjg1uA17RrfqxcHf6WSzY55ejINf6frqvzDIRV5pVHRuKprbrZFXxcIWnfmrW5v5jLPJpIq6AnAvtOk6AGqL8cIFsSsNKfOBE8ptCA%2FkALqDfcvUzkAYmozdVomxO1LelFvaAoQrIcGMHXANFEVl3POx9sijaz272%2BuDCJz8WY62xoP6BgVDKOtapwaWd7mFniuojDEINYHIJoQuhxrZIld7Ux3Q3dQ7Gpd%2Fa4dOVtGdo83Y9uw6%2BiE2k0aVjcRv8V0qqVowI%2BkfOcDZTKzzHqWnE1AAB5gcvAPB0eG%2FStNxMchErRbtvJxxjX9rDf6r&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240716T100153Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZD6XOYYTC6MLTWFP%2F20240716%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=48a3ef1948246b781cf3b4fb68c9236a74669debcfd1a795a0de4d369e60cc6a",
	];

	const { link } = useBearStore();

	const PdfResource = {
		uri: `https://${link}`,
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
