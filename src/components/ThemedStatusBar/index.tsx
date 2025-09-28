import { useAppTheme } from "@/theme";
import { StatusBar } from "expo-status-bar";

export default function ThemedStatusBar() {
  const theme = useAppTheme();
  const isDark =
    theme.colors.background !== "#FFFFFF" && theme.colors.background !== "#fff";
  return <StatusBar style={isDark ? "light" : "light"} />;
}
