import { ViewProps } from "react-native";

import { Icon } from "@/components/Icon";

import { TextInputContentError, TextInputMessageError } from "./styles";

interface MessageFieldErrorProps extends ViewProps {
  error?: string;
}

export function MessageFieldError({ error, ...rest }: MessageFieldErrorProps) {
  return (
    <TextInputContentError {...rest}>
      <Icon name="WarningCircle" size="thin" color="offline" />
      <TextInputMessageError>{error}</TextInputMessageError>
    </TextInputContentError>
  );
}
