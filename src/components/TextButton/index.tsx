import { TouchableOpacityProps } from "react-native";
import { Icon, IconNameProps } from "../Icon";
import { Text } from "../Text";
import { FavoriteButtonContainer } from "./styles";

interface TextButtonProps extends TouchableOpacityProps {
  text?: string;
  icon?: IconNameProps;
}

export default function TextButton({
  text = "Favorito",
  icon = "Heart",
  ...rest
}: TextButtonProps) {
  return (
    <FavoriteButtonContainer {...rest}>
      <Icon color="primary" name={icon} />
      <Text size={6} style={{ paddingTop: 3 }}>
        {text}
      </Text>
    </FavoriteButtonContainer>
  );
}
