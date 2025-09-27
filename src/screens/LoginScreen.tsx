import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { Text } from "@/components/Text";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground } from "react-native";
import { useAuth } from "../../src/context/useAuth";
import { Container, FormFields, ScrollViewStyled } from "./styles";

export default function LoginScreen() {
  const router = useRouter();
  const { signIn } = useAuth();

  return (
    <ImageBackground
      source={require("../../src/assets/images/backgroundLogin.png")}
      style={{ flex: 1, width: "100%" }}
    >
      <ScrollViewStyled>
        <Container>
          <Image source={require("../../src/assets/images/OtoFlix.png")} />
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
              // value={values.email}
              keyboardType="email-address"
              // onChangeText={handleChange('email')}
              // error={handleErrorsForm(touched, errors, 'email')}
            />
            <Input
              label="Senha"
              icon="LockSimple"
              placeholder="Sua senha"
              secureTextEntry
              autoCapitalize="none"
              // editable={!isLogin}
              // value={values.password}
              // onChangeText={handleChange('password')}
              // error={handleErrorsForm(touched, errors, 'password')}
            />
          </FormFields>
          <Button
            text="Entrar"
            onPress={() => {
              signIn({ userId: "123" });
              router.replace("/(tabs)");
            }}
            // loading={isLogin}
          />
        </Container>
      </ScrollViewStyled>
    </ImageBackground>
  );
}
