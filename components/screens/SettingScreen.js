import { View, Text, Button } from "react-native";
import React from "react";

const SettingScreen = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Setting Screen</Text>
            <Button
                title='Setting 1'
                onPress={() => navigation.navigate("SettingScreen1")}
            />
        </View>
    );
};

export default SettingScreen;
