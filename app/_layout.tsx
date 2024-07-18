import { Stack, useRouter, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import "expo-dev-client";

const StackLayout = () => {
	const { authState } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	// useEffect(() => {
	// 	console.log("Change detected");
	// 	const inAuthGroup = segments[0] === "(protected)";

	// 	if (!authState?.authenticated && inAuthGroup) {
	// 		// router.replace("/(auth)");
	// 	} else if (authState?.authenticated === true) {
	// 		// router.replace("/(protected)");
	// 	}
	// }, [authState]);

	return (
		<Stack>
			<Stack.Screen name="(protected)" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} />
		</Stack>
	);
};

const RootLayoutNav = () => {
	return (
		<AuthProvider>
			<StackLayout />
		</AuthProvider>
	);
};

export default RootLayoutNav;
