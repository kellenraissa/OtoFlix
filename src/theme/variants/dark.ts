import { colors } from "../tokens";

export const darkTheme: ITheme = {
  colors: {
    background: colors.background.dark_800,
    text: {
      black: colors.black,
      white: colors.white,
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      zinc_400: colors.zinc_400,
      zinc_600: colors.zinc_600,
      finished: colors.finished,
      online: colors.online,
      offline: colors.offline,
      planned: colors.pending,
      overdue: colors.offline,
      pending: colors.pending,
      progress: colors.online,
      canceled: colors.offline,
    },
    icon: {
      black: colors.black,
      white: colors.white,
      primary: colors.primary,
      zinc_400: colors.zinc_400,
      zinc_600: colors.zinc_600,
      finished: colors.finished,
      online: colors.online,
      pending: colors.pending,
      offline: colors.offline,
    },
    toast: {
      finished: colors.finished,
      online: colors.online,
      pending: colors.pending,
      offline: colors.offline,
    },
    button: {
      primary: {
        background: colors.primary,
        color: colors.white,
        border: "transparent",
      },
      secondary: {
        background: colors.background.dark_400,
        color: colors.white,
        border: colors.zinc_600,
      },
      button_icon: {
        background: colors.background.dark_600,
        color: colors.white,
        border: "transparent",
      },
      clear: {
        background: "transparent",
        color: colors.white,
        border: colors.zinc_600,
      },
    },
    menu: {
      background: colors.background.dark_700,
      border: colors.zinc_400,
      container: {
        default: colors.background.dark_600,
        active: colors.primary,
      },
      icon: { default: colors.zinc_400, active: colors.black },
    },
    field: {
      color: colors.white,
      placeholder: colors.zinc_600,
      background: colors.background.dark_300,
      border: colors.zinc_600,
    },
    bottom: {
      indicator: colors.zinc_600,
      background: colors.background.dark_300,
    },
    calendar: {
      label: {
        normal: colors.white,
        selected: colors.black,
        outside: colors.zinc_600,
        next_and_prev: colors.zinc_400,
      },
      background: {
        selected: colors.primary,
        today: colors.background.dark_800,
        range: colors.zinc_800,
      },
    },
    divider: { zinc_400: colors.zinc_400, zinc_600: colors.zinc_600 },
    checkbox: {
      background: colors.primary,
      border: colors.primary,
      color: colors.white,
      icon: "transparent",
    },
    attatchment: {
      border: colors.primary,
      remove: { background: colors.primary, color: colors.background.dark_600 },
      add: { background: colors.background.dark_600 },
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
