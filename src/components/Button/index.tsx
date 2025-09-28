import React from "react";

import { DefaultButtonProps } from "./types";

import {
  DefaultButtonContainer,
  IconButton,
  Loading,
  TextButton,
} from "./styles";

const Button = ({
  text,
  icon,
  children,
  loading = false,
  type = "default",
  variant = "primary",
  colorIcon = "white",
  size = "default",
  ...rest
}: DefaultButtonProps) => {
  return (
    <DefaultButtonContainer
      $variant={variant}
      disabled={rest.disabled || loading}
      $isDisabled={rest.disabled}
      $size={size}
      {...rest}
    >
      {!!icon && (
        <IconButton name={icon} $variant={variant} color={colorIcon} />
      )}
      {!!text && !loading && (
        <TextButton $size={size} $variant={variant}>
          {text}
        </TextButton>
      )}

      {loading && <Loading $variant={variant} />}
    </DefaultButtonContainer>
  );
};

export default Button;
