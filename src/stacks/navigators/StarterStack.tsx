import { createStackNavigator } from "@react-navigation/stack";
import StarterIntro from "../screens/StarterIntro";
import StarterName from "../screens/StarterName";
import StarterDays from "../screens/StarterDays";
import StarterLevel from "../screens/StarterLevel";
import StarterRecommendations from "../screens/StarterRecommendations";

const Stack = createStackNavigator();

const StarterStack = () => {

    return (
        <Stack.Navigator
            initialRouteName="Intro"  
            screenOptions={{
                headerStyle: {
                    
                }
            }}  
        >
            <Stack.Screen name="Intro" component={StarterIntro} options={{
                header:()=>null
            }}/>
            <Stack.Screen name="StarterName" component={StarterName} />
            <Stack.Screen name="StarterDays" component={StarterDays} />
            <Stack.Screen name="StarterLevel" component={StarterLevel} />
            <Stack.Screen name="StarterRecommendations" component={StarterRecommendations} />
        </Stack.Navigator>
    );
}

export default StarterStack;