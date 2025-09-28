import { colors } from "../tokens";

export const darkTheme: ITheme = {
  colors: {
    background: colors.background.dark_800,
    text: {
      black: colors.black,
      white: colors.white,
      primary: colors.primary,
      secondary: colors.secondary,
      danger: colors.danger,
    },
    icon: {
      black: colors.black,
      white: colors.white,
      yellow: colors.yellow,
      primary: colors.primary,
    },
    toast: {
      finished: colors.finished,
      online: colors.online,
      pending: colors.pending,
      danger: colors.danger,
    },
    card: {
      background: colors.background.card,
    },
    modal: {
      background: colors.background.modal,
    },
    button: {
      primary: {
        background: colors.primary,
        color: colors.white,
        border: "transparent",
      },
      secondary: {
        background: colors.background.dark_600,
        color: colors.white,
        border: colors.background.dark_400,
      },
      danger: {
        background: colors.danger,
        color: colors.white,
        border: colors.danger,
      },
    },
    field: {
      color: colors.white,
      placeholder: colors.zinc_600,
      background: colors.background.light_200,
      border: colors.zinc_600,
    },
  },

  window: { width: 0, height: 0, scale: (v) => v },
  screen: { width: 0, height: 0, scale: (v) => v },
  fonts: {
    montserrat: {
      light: "Montserrat-Light",
      regular: "Montserrat-Regular",
      medium: "Montserrat-Medium",
      semibold: "Montserrat-SemiBold",
      bold: "Montserrat-Bold",
    },
  },
};
