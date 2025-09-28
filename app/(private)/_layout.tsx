import TextButton from "@/components/TextButton";
import { signOut } from "@/store/auth";
import { useAppDispatch } from "@/store/hooks";
import { useAppTheme } from "@/theme";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import React, { useMemo } from "react";
import { Image, StyleSheet } from "react-native";

const LOGO = require("@/assets/images/OtoFlix.png");

export default function StackLayout() {
  const dispatch = useAppDispatch();
  const theme = useAppTheme();

  const baseHeaderOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerShown: true,
      headerStyle: { backgroundColor: "#000" },
      headerTitleStyle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: theme.fonts.montserrat.medium,
      },
      headerTintColor: "#fff",
    }),
    [theme]
  );

  return (
    <Stack screenOptions={baseHeaderOptions}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "",
          headerLeft: () => (
            <Image source={LOGO} style={styles.logo} resizeMode="contain" />
          ),
          headerRight: () => (
            <TextButton
              text="Sair"
              icon="SignOut"
              style={{ alignSelf: "flex-end" }}
              onPress={() => dispatch(signOut())}
            />
          ),
        }}
        name="index"
      />
      <Stack.Screen
        options={{
          title: "Detalhes",
          headerShown: true,
        }}
        name="[movieId]"
      />
      <Stack.Screen
        options={{
          title: "Favoritos",
          headerShown: true,
        }}
        name="favorites"
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  logo: { width: 80, height: 40, borderRadius: 8 },
  righHeaderHome: { flexDirection: "column", gap: 10 },
});
