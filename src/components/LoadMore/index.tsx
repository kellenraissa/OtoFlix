import { RequestStatus } from "@/types/RequestStatus";
import { TouchableOpacityProps } from "react-native";
import { Text } from "../Text";
import { LoadMoreContainer } from "./styles";

interface LoadMoreProps extends TouchableOpacityProps {
  canLoadMore?: boolean;
  status?: RequestStatus;
}

export default function LoadMore({ canLoadMore, status }: LoadMoreProps) {
  return (
    <LoadMoreContainer $canLoadMore={canLoadMore} disabled={!canLoadMore}>
      <Text size={6}>
        {status === RequestStatus.Loading
          ? "Carregando..."
          : canLoadMore
          ? "Carregar mais"
          : "Fim da lista"}
      </Text>
    </LoadMoreContainer>
  );
}
