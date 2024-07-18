import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
			<Tabs.Screen
				name="signup/index"
				options={{
					title: "signup",
					tabBarIcon: ({ color }) => (
						<AntDesign name="adduser" size={24} color="black" />
					),
				}}
			/>
			<Tabs.Screen
				name="login/index"
				options={{
					title: "login",
					tabBarIcon: ({ color }) => (
						<AntDesign name="user" size={24} color="black" />
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
