import { RatingStars } from "@/components/RatingStarts";
import { Text } from "@/components/Text";
import { DetailsByIdResponse } from "@/types/details";
import { getMonthYear } from "@/utils/getDate";
import { formatMoney } from "@/utils/getMoney";
import { ViewProps } from "react-native";
import { Content } from "./styles";

interface DetailsProps extends ViewProps {
  movie: DetailsByIdResponse;
}

export default function Details({ movie }: DetailsProps) {
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
