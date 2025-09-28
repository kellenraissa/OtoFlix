import { AuthGate } from "@/components/AuthGate";
import ThemedStatusBar from "@/components/ThemedStatusBar";
import { store } from "@/store";
import { hydrateAuth, watchAuth } from "@/store/auth";
import { hydrateFavorites, watchFavorites } from "@/store/favorites";
import { AppThemeProvider } from "@/theme";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import React, { useEffect } from "react";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Montserrat-Light": require("../src/assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("../src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("../src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("../src/assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("../src/assets/fonts/Montserrat-Bold.ttf"),
  });

  // --- Favorites persistence with MMKV ------------
  // Load saved favorites and keep Redux in sync
  hydrateFavorites(store);
  hydrateAuth(store);
  useEffect(() => {
    const unSubs = [watchFavorites(store), watchAuth(store)];
    return () => unSubs.forEach((u) => u && u());
  }, []);
  //-----------------------------------------------

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <AppThemeProvider>
      <Provider store={store}>
        <AuthGate />
        <ThemedStatusBar />
        <Slot />
      </Provider>
    </AppThemeProvider>
  );
}
