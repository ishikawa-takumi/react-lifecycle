// MainScreen.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

export const SubScreen: React.FC = () => {
	return (
		<View style={styles.container}>
			<Title data-testID="TIDMainTitle">ここはSub画面です</Title>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
