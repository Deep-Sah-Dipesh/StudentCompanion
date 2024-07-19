import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Role, useAuth } from "../../context/AuthContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const DrawerLayout = () => {
	const { authState } = useAuth();

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer>
				<Drawer.Screen
					name="index"
					options={{
						headerTitle: "Home",
						drawerLabel: "Home",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="home-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="pyqs/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Pyq",
						drawerLabel: "Pyq",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="notes/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Pyq",
						drawerLabel: "notes",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>

				<Drawer.Screen
					name="courses/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Pyq",
						drawerLabel: "Courses",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="done/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Document Viewer",
						drawerLabel: "done",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="final/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Documents",
						drawerLabel: "final",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="subjects/index"
					options={{
						// drawerItemStyle: { display: "none" },

						headerTitle: "Subjects",
						drawerLabel: "Study Materials",
						drawerIcon: ({ size, color }) => (
							<MaterialIcons name="recent-actors" size={24} color="black" />
						),
					}}
				/>
				<Drawer.Screen
					name="dailydigest/index"
					options={{
						headerTitle: "Daily Digest",
						drawerLabel: "Daily Digest",
						drawerIcon: ({ size, color }) => (
							<MaterialCommunityIcons
								name="calendar-check"
								size={size}
								color={color}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="myinfo/index"
					options={{
						// drawerItemStyle: { display: "none" },
						headerTitle: "My info",
						drawerLabel: "My Info",
						drawerIcon: ({ size, color }) => (
							<MaterialCommunityIcons
								name="account-circle"
								size={24}
								color="black"
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="logout/index"
					options={{
						// drawerItemStyle: { display: "none" },

						headerTitle: "Logout",
						drawerLabel: "Logout",
						drawerIcon: ({ size, color }) => (
							<MaterialIcons name="logout" size={24} color="black" />
						),
					}}
				/>

				<Drawer.Screen
					name="materials/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "materials",
						drawerLabel: "materials",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="display/[id]"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "display",
						drawerLabel: "display",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="dashboard/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Dashboard",
						drawerLabel: "Dashboard",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name="o/index"
					options={{
						drawerItemStyle: { display: "none" },

						headerTitle: "Pyq",
						drawerLabel: "Pyqs",
						drawerIcon: ({ size, color }) => (
							<Ionicons name="cog-outline" size={size} color={color} />
						),
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
};

export default DrawerLayout;
