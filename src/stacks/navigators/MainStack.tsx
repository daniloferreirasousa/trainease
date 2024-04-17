import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../Preload";
import StarterStack from "./StarterStack";
// import AppTab from "../screens/AppTab";

const CreateStack = createStackNavigator(); 

const MainStack = () => {
    return (
        <NavigationContainer>
            <CreateStack.Navigator 
                initialRouteName="Preload"
                screenOptions={{
                    header: () => null,
                }} >
                <CreateStack.Screen name="Preload" component={Preload} />
                <CreateStack.Screen name="StarterStack" component={StarterStack} />
            </CreateStack.Navigator>
        </NavigationContainer>
    );
    
}

export default MainStack;