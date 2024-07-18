import { createContext, useContext, useState } from "react";

export enum Role {
	ADMIN = "admin",
	USER = "user",
}

interface AuthProps {
	authState: {
		authenticated: boolean | null;
		username: string | null;
		role: Role | null;
		usn: string | null;
		semester: number | null;
		branch: string | null;
	};
	onLogin: (username: string, password: string) => void;
	onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
	const b = 0;
	const [authState, setAuthState] = useState<{
		authenticated: boolean | null;
		username: string | null;
		role: Role | null;
		usn: string | null;
		semester: number | null;
		branch: string | null;
	}>({
		authenticated: null,
		username: null,
		role: null,
		usn: null,
		semester: null,
		branch: null,
	});

	const login1 = (username: string, semester: number, branch: string) => {
		console.log("login1");
		// setAuthState({
		// 	authenticated: true,
		// 	username: username,
		// 	role: Role.ADMIN,
		// 	usn: username,
		// 	semester: semester,
		// 	branch: branch,
		// });
		// console.log("Logging in with", username, password);
		// if (username === "admin" && password === "admin") {
		// 	setAuthState({
		// 		authenticated: true,
		// 		username: username,
		// 		role: Role.ADMIN,
		// 		usn: username,
		// 		semester: password,
		// 	});
		// } else if (username === "user" && password === "user") {
		// 	setAuthState({
		// 		authenticated: true,
		// 		username: username,
		// 		role: Role.USER,
		// 	});
		// } else {
		// 	alert("Invalid username or password!");
		// }
	};

	const login = (username: string, semester: number, branch: string) => {
		console.log("login");
		setAuthState({
			authenticated: true,
			username: username,
			role: Role.ADMIN,
			usn: username,
			semester: semester,
			branch: branch,
		});

		alert("Profile Created Sucessfully");
		// console.log("Logging in with", username, password);
		// if (username === "admin" && password === "admin") {
		// 	setAuthState({
		// 		authenticated: true,
		// 		username: username,
		// 		role: Role.ADMIN,
		// 		usn: username,
		// 		semester: password,
		// 	});
		// } else if (username === "user" && password === "user") {
		// 	setAuthState({
		// 		authenticated: true,
		// 		username: username,
		// 		role: Role.USER,
		// 	});
		// } else {
		// 	alert("Invalid username or password!");
		// }
	};

	const logout = async () => {
		setAuthState({
			authenticated: false,
			username: null,
			role: null,
		});
	};

	const value = {
		onLogin: login,
		onLogout: logout,
		onLogin1: login1,
		authState,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
