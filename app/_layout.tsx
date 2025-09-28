import { store } from "@/store";
import {
  hydrateAuth,
  selectAuthLoading,
  selectIsAuthenticated,
  watchAuth,
} from "@/store/auth";
import { hydrateFavorites, watchFavorites } from "@/store/favorites";
import { AppThemeProvider, useAppTheme } from "@/theme";
import { useFonts } from "expo-font";
import {
  Slot,
  useRootNavigationState,
  useRouter,
  useSegments,
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";

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

function AuthGate() {
  const rootState = useRootNavigationState();
  const segments = useSegments();
  const router = useRouter();

  const loading = useSelector(selectAuthLoading);
  const isAuthed = useSelector(selectIsAuthenticated);
  const inAuthGroup = segments[0] === "(auth)";

  useEffect(() => {
    if (!rootState?.key || loading) return;
    if (!isAuthed && !inAuthGroup) router.replace("/(auth)/login");
    if (isAuthed && inAuthGroup) router.replace("/(private)");
  }, [rootState?.key, loading, isAuthed, inAuthGroup, router]);

  return null;
}

function ThemedStatusBar() {
  const theme = useAppTheme();
  const isDark =
    theme.colors.background !== "#FFFFFF" && theme.colors.background !== "#fff";
  return <StatusBar style={isDark ? "light" : "light"} />;
}
