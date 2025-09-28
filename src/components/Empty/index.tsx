import { Image } from "react-native";
import { Text } from "../Text";
import { EmptyContainer, EmptyTextContent } from "./styles";

interface EmptyProps {
  text?: string;
}

export default function Empty({
  text = "Não encontramos nenhum filme no momento.",
}) {
  return (
    <EmptyContainer>
      <EmptyTextContent>
        <Text size={10} weight="semibold">
          Ops!
        </Text>
        <Text size={8} weight="regular" color="white">
          {text}
        </Text>
      </EmptyTextContent>
      <Image
        source={require("@/assets/images/empty.png")}
        style={{ width: 200, height: 180 }}
      />
    </EmptyContainer>
  );
}
