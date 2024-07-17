import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
			<Tabs.Screen
				name="signup/index"
				options={{
					title: "signup",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="anchor" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="login/index"
				options={{
					title: "login",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="folder" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
}
