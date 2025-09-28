import FavoriteButtonNavigate from "@/components/FavoriteButtonNavigate";
import { useAppTheme } from "@/theme";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function StackLayout() {
  const router = useRouter();
  const theme = useAppTheme();
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
            <FavoriteButtonNavigate onPress={() => router.push("/favorites")} />
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
            fontFamily: theme.fonts.montserrat.medium,
          },
          headerTintColor: "#fff",
        }}
        name="[movieId]"
      />
      <Stack.Screen
        options={{
          title: "Favoritos",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 20,
            fontWeight: "600",
            fontFamily: theme.fonts.montserrat.medium,
          },
          headerTintColor: "#fff",
        }}
        name="favorites"
      />
    </Stack>
  );
}
