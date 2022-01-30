import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen";
import NotificationsScreen from "../../screens/NotificationsScreen";
import MaterialBottomTabNavigator from "../MaterialBottomTabNavigator/MaterialBottomTabNavigator";
import CustomDrawer from "../CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            // initialRouteName='Home'
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name='TabNavigation'
                component={MaterialBottomTabNavigator}
            />
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen
                name='Notifications'
                component={NotificationsScreen}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
