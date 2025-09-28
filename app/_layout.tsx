import { AuthProvider, useAuth } from "@/context/useAuth";
import { store } from "@/store";
import { watchFavorites } from "@/store/favorites";
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

  useEffect(() => {
    const unsubscribe = watchFavorites(store);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <AppThemeProvider>
      <Provider store={store}>
        <AuthProvider>
          <AuthGate />
          <ThemedStatusBar />
          <Slot />
        </AuthProvider>
      </Provider>
    </AppThemeProvider>
  );
}

function AuthGate() {
  const { session, loading } = useAuth();
  const rootState = useRootNavigationState();
  const segments = useSegments();
  const router = useRouter();
  const inAuthGroup = segments[0] === "(auth)";

  useEffect(() => {
    if (!rootState?.key || loading) return;
    if (!session && !inAuthGroup) router.replace("/(auth)/login");
    if (session && inAuthGroup) router.replace("/(private)");
  }, [rootState?.key, loading, session, inAuthGroup, router]);

  return null;
}

function ThemedStatusBar() {
  const theme = useAppTheme();
  const isDark =
    theme.colors.background !== "#FFFFFF" && theme.colors.background !== "#fff";
  return <StatusBar style={isDark ? "light" : "light"} />;
}
