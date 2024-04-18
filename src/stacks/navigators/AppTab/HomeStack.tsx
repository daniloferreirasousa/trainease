import { createStackNavigator } from "@react-navigation/stack";

// SCREENS
import Home from "../../screens/Home";

const HomeStack = createStackNavigator();

export default () => {
    return (
        <HomeStack.Navigator 
            initialRouteName="Home"
        >
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    )
}