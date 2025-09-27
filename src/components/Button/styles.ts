import styled, { css } from "styled-components/native";

import { Icon, IconProps } from "@/components/Icon";

interface DefaultButtonPropsStyled {
  $variant: ButtonVariantTypes;
  $isDisabled?: boolean;
}

export const DefaultButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<DefaultButtonPropsStyled>`
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.window.scale(40)}px;
  opacity: ${(props) => (props.$isDisabled ? 0.6 : 1)};

  ${(props) => {
    return css`
      width: 100%;
      min-width: 100%;
      height: ${props.theme.window.scale(20)}px;
    `;
  }}
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  ${(props) => {
    const { theme } = props;
    const variant = theme.colors.button[props.$variant];
    return css`
      background-color: ${variant.background};
      border: ${theme.window.scale(1)}px solid ${variant.border};
    `;
  }}
`;

interface IconButtonProps extends IconProps {
  $variant: ButtonVariantTypes;
}

export const IconButton = styled(Icon).attrs<IconButtonProps>({
  size: "normal",
})``;

interface TextButtonProps {
  $variant: ButtonVariantTypes;
}

export const TextButton = styled.Text<TextButtonProps>`
  ${({ theme, $variant }) => {
    const variant = theme.colors.button[$variant];
    return css`
      color: ${variant.color};
      font-family: ${theme.fonts.montserrat.semibold};
      padding-left: ${theme.window.scale(8)}px;
      padding-right: ${theme.window.scale(8)}px;
      font-size: ${theme.window.scale(8)}px;
    `;
  }}
`;

interface LoadingProps {
  $variant: ButtonVariantTypes;
}

export const Loading = styled.ActivityIndicator.attrs<LoadingProps>(
  (props) => ({
    color: props.theme.colors.button[props.$variant].color,
  })
)`
  margin-left: ${({ theme }) => theme.window.scale(4)}px;
`;
