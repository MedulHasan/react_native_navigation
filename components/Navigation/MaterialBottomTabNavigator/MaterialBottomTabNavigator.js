import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CategoryScreen from "../../screens/CategoryScreen";
import HomeScreen from "../../screens/HomeScreen";
import SettingScreen from "../../screens/SettingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InsideSetting from "../../screens/InsideSetting/InsideSetting";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SettingNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SettingScreen' component={SettingScreen} />
            <Stack.Screen name='SettingScreen1' component={InsideSetting} />
        </Stack.Navigator>
    );
}

const MaterialBottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Category' component={CategoryScreen} />
            <Tab.Screen name='Setting' component={SettingNavigation} />
        </Tab.Navigator>
    );
};

export default MaterialBottomTabNavigator;
