// ------------------ generic types colors ------------------

type BlackAndWhiteType = "black" | "white";
type ColorType = "primary" | "secondary" | "tertiary";
type StatusType = "online" | "finished" | "pending" | "offline";
type MaintenanceStatusType =
  | "planned"
  | "finished"
  | "canceled"
  | "overdue"
  | "progress";
type FontType = "light" | "regular" | "medium" | "semibold" | "bold";

type ZincType = "zinc_400" | "zinc_600";

type TextColorType =
  | ColorType
  | StatusType
  | BlackAndWhiteType
  | ZincType
  | MaintenanceStatusType;
type IconColorType =
  | StatusType
  | BlackAndWhiteType
  | "primary"
  | "yellow"
  | ZincType;

// ------------------ generic types components ------------------

type MenuVariantTypes = "default" | "active";
type ButtonVariantTypes = "primary" | "secondary" | "button_icon" | "clear";

// ------------------ values props colors ------------------

interface ButtonThemeProps {
  background: string;
  color: string;
  border: string;
}

interface CardThemeProps {
  background: string;
}

interface MenuThemeProps {
  border: string;
  background: string;
  icon: Record<MenuVariantTypes, string>;
  container: Record<MenuVariantTypes, string>;
}

// ------------------ records props colors ------------------

type FieldRecord = {
  color: string;
  border: string;
  background: string;
  placeholder: string;
};
type ToastRecord = Record<StatusType, string>;
type TextRecord = Record<TextColorType, string>;
type IconRecord = Record<IconColorType, string>;
type MontserratRecord = Record<FontType, string>;
type ButtonRecord = Record<ButtonVariantTypes, ButtonThemeProps>;
type BottomRecord = { indicator: string; background: string };
type CalendarRecord = {
  label: {
    next_and_prev: string;
    normal: string;
    selected: string;
    outside: string;
  };

  background: {
    selected: string;
    today: string;
    range: string;
  };
};
type DividerRecord = Record<ZincType, string>;
type CheckboxRecord = {
  background: string;
  border: string;
  color: string;
  icon: string;
};
type AttatchmentRecord = {
  border: string;
  remove: {
    color: string;
    background: string;
  };
  add: {
    background: string;
  };
};
