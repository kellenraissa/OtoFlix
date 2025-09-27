import { MovieType } from "@/types/movies";
import { pathImageTmdb } from "@/utils/pathImageTmdb";
import { ImageBackground, ViewProps } from "react-native";
import { RatingStars } from "../RatingStarts";
import { Text } from "../Text";
import { CardContainer, InfoContent, Overlay } from "./styles";

interface CardProps extends ViewProps {
  movie: MovieType;
}

export default function Card({ movie, ...rest }: CardProps) {
  return (
    <CardContainer {...rest}>
      <ImageBackground
        source={{ uri: pathImageTmdb(movie.poster_path) }}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          borderRadius: 12,
          overflow: "hidden",
          height: 200,
        }}
      >
        <Overlay />
        <InfoContent>
          <Text size={8} weight="semibold" color="white">
            {movie.title || movie.name}
          </Text>
          <Text size={6} color="white">
            Votos: {movie.vote_count}
          </Text>
          <Text size={6} color="white">
            Popularidade: {movie.popularity}
          </Text>
          <RatingStars rating10={movie?.vote_average} />
        </InfoContent>
      </ImageBackground>
    </CardContainer>
  );
}
