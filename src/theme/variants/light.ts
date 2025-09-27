import { colors } from "../tokens";
import { darkTheme } from "./dark";

export const lightTheme: ITheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    background: colors.background.light_100,
    text: {
      ...darkTheme.colors.text,
      black: colors.black,
      white: colors.white,
    },
    field: {
      ...darkTheme.colors.field,
      color: colors.white,
      placeholder: colors.zinc_600,
      background: colors.background.light_200,
      border: colors.zinc_400,
    },
    menu: {
      ...darkTheme.colors.menu,
      background: colors.background.light_200,
      container: { default: "#F0F0F0", active: colors.primary },
      icon: { default: colors.zinc_600, active: colors.black },
    },
  },
};
