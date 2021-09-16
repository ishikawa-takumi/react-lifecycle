// MainScreen.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SubScreenNavigationProp } from "./type";
import { Test } from "./Test";

interface MainScreenProp {
	navigation: SubScreenNavigationProp;
}
interface MainScreenState {
	count: number;
	visible: boolean;
}

export class MainScreen extends React.Component<
	MainScreenProp,
	MainScreenState
> {
	constructor(props: MainScreenProp) {
		super(props);

		this.state = { count: 0, visible: true };
	}
	onPlusPress = () => this.setState({ count: this.state.count + 1 });
	onMinusPress = () => this.setState({ count: this.state.count - 1 });
	moveSubScreen = () => this.props.navigation.navigate("Sub");
	change = () => this.setState({ visible: !this.state.visible });
	render() {
		return (
			<View style={styles.container}>
				<Title data-testID="TIDMainTitle">カウント：{this.state.count}</Title>
				<Button style={styles.button} onPress={this.onPlusPress}>
					+1
				</Button>
				<Button style={styles.button} onPress={this.onMinusPress}>
					-1
				</Button>
				<Button style={styles.button} onPress={this.change}>
					change
				</Button>

				{this.state.visible ? <Test /> : null}

				<Button style={styles.button} onPress={this.moveSubScreen}>
					SubScreen
				</Button>
			</View>
		);
	}
}

export default function (props: SubScreenNavigationProp) {
	const navigation = useNavigation<SubScreenNavigationProp>();

	return <MainScreen {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		marginTop: 10,
		backgroundColor: "#eee",
	},
});
