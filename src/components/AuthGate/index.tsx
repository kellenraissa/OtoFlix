import {
  selectAuthLoading,
  selectIsAuthenticated,
} from "@/store/auth/selectors";
import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function AuthGate() {
  const rootState = useRootNavigationState();
  const segments = useSegments();
  const router = useRouter();

  const loading = useSelector(selectAuthLoading);
  const isAuthed = useSelector(selectIsAuthenticated);
  const inAuthGroup = segments[0] === "(auth)";

  useEffect(() => {
    if (!rootState?.key || loading) return;

    if (!isAuthed && !inAuthGroup) {
      router.replace("/(auth)/login");
    }
    if (isAuthed && inAuthGroup) {
      router.replace("/(private)");
    }
  }, [rootState?.key, loading, isAuthed, inAuthGroup, router]);

  return null;
}
