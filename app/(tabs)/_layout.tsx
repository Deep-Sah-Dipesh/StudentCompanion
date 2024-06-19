import { Tabs } from "expo-router";

export default function TabsComponent() {
	return (
		<Tabs>
			<Tabs.Screen name="signup" options={{ headerShadowVisible: false }} />
			<Tabs.Screen name="login" options={{ headerShadowVisible: false }} />
			<Tabs.Screen name="courses" options={{ headerShadowVisible: false }} />
			{/* <Tabs.Screen name="list" options={{ headerShadowVisible: false }} /> */}
			<Tabs.Screen name="syllabus" options={{ headerShadowVisible: false }} />
			<Tabs.Screen name="notes" options={{ headerShadowVisible: false }} />
			<Tabs.Screen name="pyqs" options={{ headerShadowVisible: false }} />
		</Tabs>
	);
}
