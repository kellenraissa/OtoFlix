import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { handleErrorsForm } from "@/helpers/handleErrorsForms";
import { AuthFormData, authFormSchema } from "@/schemas/auth";
import { signIn } from "@/store/auth";
import { useAppDispatch } from "@/store/hooks";
import { useFormik } from "formik";
import React from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Container,
  FormFields,
  LogoTextContent,
  ScrollViewStyled,
} from "./styles";

const BACKGROUND = require("@/assets/images/backgroundLogin.png");
const LOGO = require("@/assets/images/OtoFlix.png");

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  async function handleSignIn({ email, password }: AuthFormData) {
    dispatch(signIn({ email }));
  }

  const { values, handleSubmit, handleChange, errors, touched } =
    useFormik<AuthFormData>({
      initialValues: { email: "", password: "" },
      validationSchema: authFormSchema,
      onSubmit: handleSignIn,
    });

  return (
    <ImageBackground source={BACKGROUND} style={{ flex: 1, width: "100%" }}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollViewStyled>
          <Container>
            <LogoTextContent>
              <Image source={LOGO} />
              <Text color="white" size={10} isCenter>
                Realize seu login para continuar
              </Text>
            </LogoTextContent>
            <FormFields>
              <Input
                autoCapitalize="none"
                label="Email"
                icon="User"
                placeholder="Seu email"
                // editable={!isLogin}
                value={values.email}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                error={handleErrorsForm(touched, errors, "email")}
              />
              <Input
                label="Senha"
                icon="LockSimple"
                placeholder="Sua senha"
                secureTextEntry
                autoCapitalize="none"
                // editable={!isLogin}
                value={values.password}
                onChangeText={handleChange("password")}
                error={handleErrorsForm(touched, errors, "password")}
              />
            </FormFields>
            <Button
              text="Entrar"
              onPress={() => handleSubmit()}

              // loading={isLogin}
            />
          </Container>
        </ScrollViewStyled>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
