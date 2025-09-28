import { ActivityIndicator } from "react-native";
import { Text } from "../Text";
import { LoadingContainer } from "./styles";

export default function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator />
      <Text size={8}>Carregando...</Text>
    </LoadingContainer>
  );
}
