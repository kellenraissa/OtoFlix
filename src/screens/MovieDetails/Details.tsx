import { RatingStars } from "@/components/RatingStarts";
import { Text } from "@/components/Text";
import ToogleFavoriteButton from "@/components/ToggleFavoriteButton";
import { DetailsType } from "@/types/details";
import { getMonthYear } from "@/utils/getDate";
import { formatMoney } from "@/utils/getMoney";
import { View, ViewProps } from "react-native";
import { Content } from "./styles";

interface DetailsComponentProps extends ViewProps {
  movie: DetailsType;
}

export default function Details({ movie }: DetailsComponentProps) {
  const year = getMonthYear(movie.release_date);
  return (
    <Content>
      <Text size={10} weight="semibold" color="white">
        {movie.title}
      </Text>

      <RatingStars rating10={movie.vote_average} showNumber />

      <Text size={8} weight="medium" color="white">
        {movie.genres[0].name}
      </Text>
      <Text size={6} weight="medium" color="white">
        Lançamento: {year}
      </Text>
      <Text size={6} weight="medium" color="white">
        Receita: {formatMoney(movie.revenue, "USD")}
      </Text>
      <View style={{ width: "100%", alignItems: "flex-end", marginBottom: 6 }}>
        <ToogleFavoriteButton movie={movie} />
      </View>

      <Text
        size={6}
        color="white"
        weight="regular"
        style={{
          marginTop: 12,
          flexShrink: 1,
          flexWrap: "wrap",
          textAlign: "justify",
        }}
      >
        {movie.overview}
      </Text>
    </Content>
  );
}
