import React from "react";
import { View, Text, Pressable } from "react-native";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function Logout() {
	const { onLogout } = useAuth();
	const router = useRouter();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Pressable
				onPress={() => {
					onLogout();
					router.replace("/(auth)");
				}}>
				<Text>Logout</Text>
			</Pressable>
		</View>
	);
}
