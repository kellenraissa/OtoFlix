import React from "react";
import { Dimensions, useColorScheme, useWindowDimensions } from "react-native";
import {
  ThemeProvider as SCThemeProvider,
  useTheme as useSCTheme,
} from "styled-components/native";

import { darkTheme } from "./variants/dark";
import { lightTheme } from "./variants/light";

const makeScale =
  (w: number, h: number) =>
  (value: number, orientation?: "horizontal" | "vertical") =>
    (value * (orientation === "horizontal" ? w : h)) / 375;

export function AppThemeProvider({ children }: React.PropsWithChildren) {
  const scheme = useColorScheme();
  const { width: winW, height: winH } = useWindowDimensions();
  const { width: scrW, height: scrH } = Dimensions.get("screen");

  const base = scheme === "dark" ? darkTheme : lightTheme;

  const theme = React.useMemo<ITheme>(() => {
    return {
      ...base,
      window: {
        width: winW,
        height: winH,
        scale: makeScale(winW, winH),
      },
      screen: {
        width: scrW,
        height: scrH,
        scale: makeScale(scrW, scrH),
      },
    };
  }, [base, winW, winH, scrW, scrH]);

  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}

export function useAppTheme() {
  return useSCTheme() as ITheme;
}
