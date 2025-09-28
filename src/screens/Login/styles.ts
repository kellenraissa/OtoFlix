import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const FormFields = styled.View`
  width: 100%;
  gap: ${(props) => props.theme.window.scale(12)};
  /* margin-top: ${({ theme }) => theme.window.scale(26)}px; */
  margin-bottom: ${({ theme }) => theme.window.scale(10)}px;
`;

export const LogoTextContent = styled.View`
  height: ${({ theme }) => theme.window.scale(64)}px;
  width: 100%;

  align-items: center;
  gap: ${({ theme }) => theme.window.scale(20)}px;
  margin-bottom: ${({ theme }) => theme.window.scale(16)}px;
`;

export const ScrollViewStyled = styled.ScrollView.attrs((props) => ({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: "handled",
  contentContainerStyle: {
    paddingTop: props.theme.window.scale(8),
    paddingBottom: props.theme.window.scale(12),
    paddingHorizontal: "4%",

    flex: 1,
  },
}))``;
