import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import { Tabs } from "expo-router";
import { Redirect } from "expo-router";

export default function Hello() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Redirect href="/signup" />
		</View>
	);
}
