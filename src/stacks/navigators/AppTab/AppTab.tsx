import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import CustomTabBar from "../../../components/CustomTabBar";

const Tab = createBottomTabNavigator();

const AppTab = () => {
    return (
        <Tab.Navigator tabBar={(props)=>(
            <CustomTabBar 
                {...props}
                items={[
                    {
                        type: 'regular',
                        text: 'Início',
                        icon: require('../../../assets/home.png'),
                        route: 'HomeStack'
                    },
                    {
                        type: 'big',
                        icon: require('../../../assets/dumbbell.png'),
                        route: 'WorkoutStack'
                    },
                    {
                        type: 'regular',
                        text: 'Meus Treinos',
                        icon: require('../../../assets/myworkouts.png'),
                        route: 'MyWorkoutsStack'
                    },
                ]}
            />
        )}
        >
            <Tab.Screen name="HomeStack" component={HomeStack}/>
        </Tab.Navigator>
    );
}

export default AppTab;