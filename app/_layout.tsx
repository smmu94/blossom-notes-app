import { Stack } from "expo-router";
import React from "react";
import { View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Layout = () => {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#072C5F" },
          headerTitle: "",
          headerLeft: () => (
            <View>
              <Image
                source={require("../assets/logo1.png")}
                style={{ width: 100, height: 50 }}
                resizeMode="contain"
              />
            </View>
          ),
          headerRight: () => (
            <FontAwesome name="info-circle" size={24} color="pink" />
          ),
        }}
      />
    </View>
  );
};

export default Layout;
