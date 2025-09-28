import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { handleErrorsForm } from "@/helpers/handleErrorsForms";
import { AuthFormData, authFormSchema } from "@/schemas/auth";
import { signIn } from "@/store/auth";
import { useAppDispatch } from "@/store/hooks";
import { useFormik } from "formik";
import React from "react";
import { Image, ImageBackground } from "react-native";
import { Container, FormFields, ScrollViewStyled } from "./styles";

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
    <ImageBackground
      source={require("@/assets/images/backgroundLogin.png")}
      style={{ flex: 1, width: "100%" }}
    >
      <ScrollViewStyled>
        <Container>
          <Image source={require("@/assets/images/OtoFlix.png")} />
          <Text color="white" size={10} isCenter>
            Realize seu login para continuar
          </Text>
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
    </ImageBackground>
  );
}
