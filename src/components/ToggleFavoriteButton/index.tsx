import { selectIsFavorite } from "@/store/favorites/selectors";
import { toggle } from "@/store/favorites/slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DetailsType } from "@/types/details";
import { Icon } from "../Icon";

export default function ToogleFavoriteButton({
  movie,
}: {
  movie: DetailsType;
}) {
  const dispatch = useAppDispatch();
  const isFav = useAppSelector(selectIsFavorite(movie.id));

  return (
    <Icon.Button
      name={"Heart"}
      weight={isFav ? "fill" : "light"}
      onPress={() => dispatch(toggle(movie))}
    />
  );
}
