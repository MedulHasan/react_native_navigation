import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./components/Navigation/DrawerNavigation/DrawerNavigation";
import MaterialBottomTabNavigator from "./components/Navigation/MaterialBottomTabNavigator/MaterialBottomTabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigation />
            {/* <MaterialBottomTabNavigator /> */}
        </NavigationContainer>
    );
}
