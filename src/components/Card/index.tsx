import { MovieType } from "@/types/movies";
import { pathImageTmdb } from "@/utils/pathImageTmdb";
import { useRouter } from "expo-router";
import { ImageBackground, TouchableOpacityProps } from "react-native";
import { RatingStars } from "../RatingStarts";
import { Text } from "../Text";
import { CardContainer, InfoContent, Overlay } from "./styles";

interface CardProps extends TouchableOpacityProps {
  movie: MovieType;
}

export default function Card({ movie, ...rest }: CardProps) {
  const router = useRouter();

  return (
    <CardContainer {...rest} onPress={() => router.push(`/${movie.id}`)}>
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
