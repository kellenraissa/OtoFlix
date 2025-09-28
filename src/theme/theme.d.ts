// ------------------ base types to others features ------------------

interface ThemeColors {
  background: string;

  text: TextRecord;
  icon: IconRecord;
  card: CardThemeProps;
  modal: ModalThemeProps;
  toast: ToastRecord;
  button: ButtonRecord;
  field: FieldRecord;
}

interface ThemeWindow {
  width: number;
  height: number;
  scale: (value: number, orientation?: "vertical" | "horizontal") => number;
}

interface ThemeFonts {
  montserrat: MontserratRecord;
}

interface ITheme {
  colors: ThemeColors;
  window: ThemeWindow;
  screen: ThemeWindow;
  fonts: ThemeFonts;
}
