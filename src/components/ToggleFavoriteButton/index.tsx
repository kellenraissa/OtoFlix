import { selectIsFavorite } from "@/store/favorites/selectors";
import { toggle } from "@/store/favorites/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DetailsType } from "@/types/details";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { TootgleFavoritContainer } from "./styles";

interface ToogleFavoriteButtonProps {
  movie: DetailsType;
  hideText?: boolean;
}

export default function ToogleFavoriteButton({
  movie,
  hideText = false,
}: ToogleFavoriteButtonProps) {
  const dispatch = useAppDispatch();
  const isFav = useAppSelector(selectIsFavorite(movie.id));

  return (
    <TootgleFavoritContainer>
      {!hideText && (
        <Text size={6} style={{ paddingTop: 3 }}>
          {isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        </Text>
      )}
      <Icon.Button
        name={"Heart"}
        weight={isFav ? "fill" : "light"}
        onPress={() => dispatch(toggle(movie))}
      />
    </TootgleFavoritContainer>
  );
}
