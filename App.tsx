// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { MainScreen } from "./src/MainScreen";
import { SubScreen } from "./src/SubScreen";
import { RootStack } from "./src/type";

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<RootStack.Navigator initialRouteName="Main">
					<RootStack.Screen
						name="Main"
						component={MainScreen}
						options={{
							title: "Main", // (1)
						}}
					/>
					<RootStack.Screen
						name="Sub"
						component={SubScreen}
						options={{
							title: "Sub", // (1)
						}}
					/>
				</RootStack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}
