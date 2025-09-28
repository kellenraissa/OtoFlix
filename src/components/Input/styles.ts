import styled, { css } from "styled-components/native";

import { Icon, IconButtonProps } from "../Icon";
import { Text, TextProps } from "../Text";

import { Platform } from "react-native";
import { variantsInput, VariantsInput } from "./variants";

interface TextInputContainerProps {
  $editable: boolean;
}

export const TextInputContainer = styled.View<TextInputContainerProps>`
  position: relative;
  width: 100%;
  gap: ${(props) => props.theme.window.scale(2)}px;
  opacity: ${(props) => (props.$editable ? 1 : 0.5)};
`;

interface TextInputLabelProps extends TextProps {
  $hasError: boolean;
}

export const TextInputLabel = styled(Text).attrs<TextInputLabelProps>(
  (props) => {
    return {
      color: !!props.$hasError ? "offline" : "primary",
      weight: "semibold",
    };
  }
)`
  font-size: ${(props) => props.theme.window.scale(8)}px;
`;

interface TextInputIconProps extends IconButtonProps {
  $isFocused: boolean;
  $variant: VariantsInput;
}

export const TextInputIcon = styled(Icon.Button).attrs<TextInputIconProps>(
  (props) => ({
    size: "small",
    weight: "regular",
    color: props.$isFocused ? "primary" : "white",
  })
)`
  position: absolute;
  bottom: 18px;

  ${(props) => variantsInput[props.$variant].icon};
`;

export const TextInputIconRight = styled(Icon.Button).attrs<TextInputIconProps>(
  (props) => ({
    size: "small",
    weight: "regular",
    color: props.$isFocused ? "primary" : "white",
  })
)`
  position: absolute;
  bottom: ${Platform.OS === "android" ? 22 : 12}px;

  right: 16px;
`;

interface TextInputFieldProps {
  $variant: VariantsInput;
}

export const TextInputField = styled.TextInput.attrs<TextInputFieldProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.colors.field.placeholder,
    textAlignVertical: "center",
  })
)`
  padding: 0px;

  border-radius: 40px;

  ${({ theme, $variant }) => {
    const { window, fonts, colors } = theme;

    return css`
      height: ${window.scale(20)}px;

      color: ${colors.field.color};
      background-color: ${colors.field.background};
      border: 1px #fff;
      font-family: ${fonts.montserrat.medium};
      font-size: ${window.scale(10)}px;

      ${variantsInput[$variant].field};
    `;
  }}
`;
