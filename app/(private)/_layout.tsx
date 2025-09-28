import FavoriteButton from "@/components/FavoriteButton";
import { Stack } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerLeft: () => (
            <Image
              source={require("@/assets/images/OtoFlix.png")}
              style={{ width: 80, height: 40, borderRadius: 8 }}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <FavoriteButton onPress={() => console.log("Clicou")} />
          ),
          headerStyle: {
            backgroundColor: "#000",
          },
        }}
        name="index"
      />
      <Stack.Screen
        options={{
          title: "Detalhes",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: "600",
          },
          headerTintColor: "#fff",
        }}
        name="[movieId]"
      />
    </Stack>
  );
}
