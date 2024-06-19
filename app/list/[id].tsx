import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

const DetailsPage = () => {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Text>{id}</Text>
		</View>
	);
};

export default DetailsPage;
