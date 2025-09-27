// ------------------ base types to others features ------------------

interface ThemeColors {
  background: string;

  text: TextRecord;
  icon: IconRecord;
  card: CardThemeProps;
  toast: ToastRecord;
  menu: MenuThemeProps;
  button: ButtonRecord;
  field: FieldRecord;
  bottom: BottomRecord;
  calendar: CalendarRecord;
  divider: DividerRecord;
  checkbox: CheckboxRecord;
  attatchment: AttatchmentRecord;
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
