import { TouchableOpacityProps } from "react-native";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { FavoriteButtonContainer } from "./styles";

interface FavoriteButtonProps extends TouchableOpacityProps {}

export default function FavoriteButton({ ...rest }: FavoriteButtonProps) {
  return (
    <FavoriteButtonContainer {...rest}>
      <Icon name={"Star"} />
      <Text color="white" size={6}>
        Favoritos
      </Text>
    </FavoriteButtonContainer>
  );
}
