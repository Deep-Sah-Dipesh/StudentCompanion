import { Tabs } from "expo-router";

export default function TabsComponent() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
		</Tabs>
	);
}
