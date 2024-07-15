import { Text, View } from "react-native";
import "expo-dev-client";

import { Redirect } from "expo-router";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Redirect href="/courses" />
		</View>
	);
}
