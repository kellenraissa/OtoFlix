import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { IconNameProps } from "@/components/Icon";
import { MessageFieldError } from "@/components/MessageFieldError";

import { VariantsInput } from "./variants";

import {
  TextInputContainer,
  TextInputField,
  TextInputIcon,
  TextInputIconRight,
  TextInputLabel,
} from "./styles";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: IconNameProps;
  variant?: VariantsInput;
  isClearable?: boolean;
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label = "Nome",
      onFocus,
      onBlur,
      error,
      icon = "UserIcon",
      editable = true,
      isClearable = false,
      variant = "default",
      secureTextEntry = false,
      placeholder = "Seu nome",
      ...rest
    },
    ref
  ) => {
    const hasError = !!error;
    const isInputPassword = secureTextEntry;

    const inputRef = useRef<TextInput>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(isInputPassword);

    useImperativeHandle(ref, () => inputRef.current as TextInput);

    function handleFocus() {
      inputRef.current?.focus();
    }

    type FocusEvent = Parameters<NonNullable<TextInputProps["onFocus"]>>[0];
    type BlurEvent = Parameters<NonNullable<TextInputProps["onBlur"]>>[0];

    function onFocusInput(e: FocusEvent) {
      setIsFocused(true);
      onFocus?.(e);
    }

    function onBlurInput(e: BlurEvent) {
      setIsFocused(false);
      onBlur?.(e);
    }

    function handleTogglePassword() {
      setHidePassword((prev) => !prev);
    }

    function handleClearableText() {
      rest.onChangeText?.("");
      if (inputRef.current) {
        inputRef.current.clear();
        inputRef.current.focus();
      }
    }

    return (
      <TextInputContainer $editable={editable}>
        {!!label && (
          <TextInputLabel onPress={handleFocus} $hasError={hasError}>
            {label}
          </TextInputLabel>
        )}

        <TextInputField
          ref={inputRef}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          editable={editable}
          $variant={variant}
          placeholder={placeholder}
          secureTextEntry={hidePassword}
          {...rest}
        />

        <TextInputIcon
          name={icon}
          $variant={variant}
          onPress={handleFocus}
          $isFocused={isFocused || !!rest.value}
        />

        {isInputPassword && (
          <TextInputIconRight
            name={hidePassword ? "EyeSlashIcon" : "EyeIcon"}
            $variant={variant}
            onPress={handleTogglePassword}
            $isFocused={isFocused || !!rest.value}
          />
        )}

        {isClearable && (
          <TextInputIconRight
            name="XIcon"
            $variant={variant}
            onPress={handleClearableText}
            $isFocused={isFocused || !!rest.value}
          />
        )}

        {hasError && <MessageFieldError error={error} />}
      </TextInputContainer>
    );
  }
);
