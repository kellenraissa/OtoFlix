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
  colorIcon = "offline",
  ...rest
}: DefaultButtonProps) => {
  return (
    <DefaultButtonContainer
      $variant={variant}
      disabled={rest.disabled || loading}
      $isDisabled={rest.disabled}
      {...rest}
    >
      {!!icon && (
        <IconButton name={icon} $variant={variant} color={colorIcon} />
      )}
      {!!text && !loading && <TextButton $variant={variant}>{text}</TextButton>}

      {loading && <Loading $variant={variant} />}
    </DefaultButtonContainer>
  );
};

export default Button;
