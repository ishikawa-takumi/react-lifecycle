import React from "react";
import { Text } from "react-native";

interface TestProp {}

export class Test extends React.Component<TestProp> {
	constructor(props: TestProp) {
		super(props);
		console.log("Test: constructor");
	}
	componentDidMount() {
		console.log("Test: componentDidMount");
	}
	componentDidUpdate() {
		console.log("Test: componentDidUpdate");
	}
	componentWillUnmount() {
		console.log("Test: componentWillUnmount");
	}
	render() {
		return <Text>Test Screen</Text>;
	}
}
