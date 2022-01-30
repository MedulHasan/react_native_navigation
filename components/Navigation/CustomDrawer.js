import { View, Text } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={"Home"}
                onPress={() => navigation.navigate("Home")}
            />
            <DrawerItem
                label={"Category"}
                onPress={() => navigation.navigate("Category")}
            />
            <DrawerItem
                label={"Notifications"}
                onPress={() => navigation.navigate("Notifications")}
            />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
