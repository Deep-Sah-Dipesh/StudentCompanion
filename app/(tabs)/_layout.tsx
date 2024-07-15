import { Tabs } from "expo-router";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function TabsComponent() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="login/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "login",
						title: "Login",
					}}
				/>
				<Drawer.Screen
					name="signup/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "signup",
						title: "Signup",
					}}
				/>
				<Drawer.Screen
					name="courses/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "courses",
						title: "Courses",
					}}
				/>
				<Drawer.Screen
					name="o/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "syllabus",
						title: "Syllabus",
					}}
				/>
				<Drawer.Screen
					name="notes/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "notes",
						title: "Notes",
					}}
				/>

				<Drawer.Screen
					name="pyqs/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "pyqs",
						title: "pyqs",
					}}
				/>
				<Drawer.Screen
					name="dashboard/index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "dashboard",
						title: "dashboard",
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
