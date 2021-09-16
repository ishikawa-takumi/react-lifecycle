import { RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
	Main: undefined;
	Sub: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
type SubScreenRouteProp = RouteProp<RootStackParamList, "Sub">;
type SubScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Sub"
>;

export { RootStack, SubScreenRouteProp, SubScreenNavigationProp };
