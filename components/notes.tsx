import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import useBearStore from "../state/index";
import { useAuth } from "@/context/AuthContext";
import AntDesign from "@expo/vector-icons/AntDesign";

const Notes = ({ title, foldersx = ["notes", "pyqs", "syllabus"] }) => {
	// Dummy data for folders

	const { authState } = useAuth();

	const handleFolderClick = (folder) => {
		// setSelectedFolder(folder);
		console.log(`Selected folder: ${folder}`);
		// Perform any additional actions you need when a folder is selected
	};

	const {
		bears,
		subject,
		type,
		increasePopulation,
		setSubject,
		setType,
		link,
		setLinks,
	} = useBearStore();

	console.log(subject, bears, type, authState);

	const originalString = subject;
	const modifiedString = originalString.replace(/ /g, "+");
	console.log(modifiedString);

	//studymaterials.s3.eu-north-1.amazonaws.com/Semester+2/C+Programming/Notes/Unit+(1).pdf
	var urls = [];

	if (authState?.semester <= 2) {
		const baseURL = `studymaterials.s3.eu-north-1.amazonaws.com/Semester+${authState?.semester}/${modifiedString}/${type}/Unit+`;

		if (type == "PYQs") {
			const baseURL1 = `studymaterials.s3.eu-north-1.amazonaws.com/Semester+${authState?.semester}/${modifiedString}/${type}/PYQ+`;
			for (let i = 1; i <= 3; i++) {
				const alu = `${baseURL1}(${i}).pdf`;
				urls.push(alu);
			}
		}

		if (type == "Notes") {
			for (let i = 1; i <= 5; i++) {
				const alu = `${baseURL}(${i}).pdf`;
				urls.push(alu);
			}
		}
		console.log(urls);

		if (type == "Syllabus") {
			const baseURL1 = `studymaterials.s3.eu-north-1.amazonaws.com/Semester+${authState?.semester}/${modifiedString}/${type}/Syllabus.pdf`;
			urls = [baseURL1];
		}
	} else {
		const p = {
			is: "ISE",
			cs: "CSE",
		};
		const baseURL = `studymaterials.s3.eu-north-1.amazonaws.com/Semester+${
			authState?.semester
		}/${p[authState?.branch]}/${modifiedString}/${type}/Unit+`;
		console.log(baseURL);

		if (type == "Notes") {
			for (let i = 1; i <= 5; i++) {
				const alu = `${baseURL}(${i}).pdf`;
				urls.push(alu);
			}
		}

		if (type == "Syllabus") {
			const baseURL1 = `studymaterials.s3.eu-north-1.amazonaws.com/Semester+${
				authState?.semester
			}/${p[authState?.branch]}/${modifiedString}/${type}/Syllabus.pdf`;
			urls = [baseURL1];
		}

		if (type == "PYQs") {
			const baseURL1 = `studymaterials.s3.eu-north-1.amazonaws.com/Semester+${
				authState?.semester
			}/${p[authState?.branch]}/${modifiedString}/${type}/PYQ+`;
			for (let i = 1; i <= 3; i++) {
				const alu = `${baseURL1}(${i}).pdf`;
				urls.push(alu);
			}
		}
	}

	console.log(urls);
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>{` ${subject}  ${type}  `}</Text>
			{urls.map((folder, index) => (
				<TouchableOpacity
					style={styles.folderItem}
					onPress={() => {
						setLinks(folder);
						console.log(link);
					}}>
					<View style={styles.folderIcon}>
						{/* Your folder icon component */}
						<AntDesign name="pdffile1" size={24} color="black" />
					</View>
					<Link href={`/done`} asChild>
						<Pressable
							onPress={() => {
								setLinks(folder);
								console.log(link);
							}}>
							<Text style={styles.folderName}>{`${
								type === "PYQs"
									? "Sample Paper"
									: type == "Notes"
									? "Unit"
									: "Current Syllabus"
							} ${type !== "Syllabus" ? `${index + 1}` : ""} `}</Text>
						</Pressable>
					</Link>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		fontWeight: "bold",
	},
	container: {
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	folderItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ccc",
	},
	folderIcon: {
		width: 30, // Adjust as per your icon size
		height: 30, // Adjust as per your icon size
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	folderName: {
		fontSize: 28,
		fontWeight: "bold",
	},
});

export default Notes;

// {
// 	foldersx.map((folder) => (
// 		<TouchableOpacity
// 			style={styles.folderItem}
// 			onPress={() => setType(folder)}>
// 			<View style={styles.folderIcon}>
// 				{/* Your folder icon component */}
// 				<Entypo name="document" size={24} color="black" />
// 			</View>
// 			<Link href={`/${folder}`} asChild>
// 				<Pressable>
// 					<Text style={styles.folderName}>{subject}</Text>
// 					<Text style={styles.folderName}>{type}</Text>
// 					<Text style={styles.folderName}>{bears}</Text>
// 					<Text style={styles.folderName}>{authState?.branch}</Text>
// 					<Text style={styles.folderName}>{authState?.semester}</Text>
// 				</Pressable>
// 			</Link>
// 		</TouchableOpacity>
// 	));
// }
