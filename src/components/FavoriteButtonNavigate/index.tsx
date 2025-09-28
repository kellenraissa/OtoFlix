import { TouchableOpacityProps } from "react-native";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { FavoriteButtonContainer } from "./styles";

interface FavoriteButtonNavigateProps extends TouchableOpacityProps {}

export default function FavoriteButtonNavigate({
  ...rest
}: FavoriteButtonNavigateProps) {
  return (
    <FavoriteButtonContainer {...rest}>
      <Icon color="primary" name={"Heart"} />
      <Text size={6} style={{ paddingTop: 3 }}>
        Favoritos
      </Text>
    </FavoriteButtonContainer>
  );
}
