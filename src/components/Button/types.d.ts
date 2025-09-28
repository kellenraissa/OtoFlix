import { IconNameProp } from "@components/Icon";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type SizeButton = "default" | "small";

interface DefaultButtonProps extends TouchableOpacityProps {
  color?: string;
  variant?: ButtonVariantTypes;
  children?: React.ReactNode;
  text: string;
  backgroundColor?: string;
  styleContainer?: StyleProp<ViewStyle>;
  loading?: boolean;
  icon?: IconNameProp;
  iconColor?: IconColorType;
  type?: ButtonSize;
  colorIcon?: IconColorType;
  size?: SizeButton;
}
