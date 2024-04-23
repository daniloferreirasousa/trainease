import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Home from "../../screens/Home";
import HomeConfig from "../../screens/HomeConfig";

const HomeStack = createStackNavigator();

export default () => {
    return (
        <HomeStack.Navigator 
            initialRouteName="Home"
        >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="HomeConfig" component={HomeConfig} />
        </HomeStack.Navigator>
    )
}