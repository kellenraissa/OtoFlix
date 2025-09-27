import { useAppTheme } from "@/theme";
import * as icons from "phosphor-react-native";

import { Pressable } from "react-native";
import { IconSizeProps, variants } from "./variants";

export type IconNameProps = keyof typeof icons;

export interface IconProps extends Omit<icons.IconProps, "color"> {
  name?: IconNameProps;
  size?: IconSizeProps;
  color?: IconColorType;
  colorHex?: string;
}

export function Icon({
  colorHex,
  name = "User",
  size = "normal",
  color = "primary",
  ...rest
}: IconProps) {
  const theme = useAppTheme();
  const PhosphorIcon = icons[name] as icons.Icon;
  const sizeIcon = variants.sizes[size];
  const colorIcon = colorHex || theme.colors.icon[color];

  return <PhosphorIcon {...rest} size={sizeIcon} color={colorIcon} />;
}

export interface IconButtonProps extends IconProps {
  onPress?: () => void;
  showPressableFeedback?: boolean;
}

Icon.Button = function IconButton({
  onPress,
  colorHex,
  name = "User",
  size = "normal",
  color = "primary",
  showPressableFeedback = false,
  ...rest
}: IconButtonProps) {
  const theme = useAppTheme();
  const PhosphorIcon = icons[name] as icons.Icon;
  const sizeIcon = variants.sizes[size];
  const colorIcon = colorHex || theme.colors.icon[color];

  return (
    <Pressable
      onPress={onPress}
      style={
        showPressableFeedback
          ? ({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })
          : undefined
      }
    >
      <PhosphorIcon {...rest} size={sizeIcon} color={colorIcon} />
    </Pressable>
  );
};
