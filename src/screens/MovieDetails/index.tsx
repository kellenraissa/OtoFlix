import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";

import ContainerGradient from "@/components/ContainerGradient";
import Empty from "@/components/Empty";
import Loading from "@/components/Loading";
import { fetchDetailsById } from "@/store/details";
import {
  selectMovieDetail,
  selectMovieDetailError,
  selectMovieDetailStatus,
} from "@/store/details/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RequestStatus } from "@/types/RequestStatus";
import { pathImageTmdb } from "@/utils/pathImageTmdb";
import Details from "./Details";
import GradientFade from "./GradientFade";
import { DetailsScroll, HeaderWrap, styles } from "./styles";

export default function MovieDetailsScreen() {
  const { movieId } = useLocalSearchParams<{ movieId: string }>();
  const dispatch = useAppDispatch();

  const movie = useAppSelector(selectMovieDetail);
  const status = useAppSelector(selectMovieDetailStatus);
  const error = useAppSelector(selectMovieDetailError);

  useEffect(() => {
    if (movieId) dispatch(fetchDetailsById(movieId));
  }, [dispatch, movieId]);

  if (status === RequestStatus.Loading) {
    return (
      <ContainerGradient>
        <Loading />
      </ContainerGradient>
    );
  }

  if (error)
    return (
      <ContainerGradient>
        <Empty text={`Erro ao carregar filme, ${error}`} />
      </ContainerGradient>
    );
  if (!movie)
    return (
      <ContainerGradient>
        <Empty text={"Filme não encontrado"} />
      </ContainerGradient>
    );

  return (
    <ContainerGradient isFull={true}>
      <DetailsScroll>
        <HeaderWrap>
          <Image
            source={pathImageTmdb(movie.backdrop_path)}
            style={styles.headerImage}
          />
          <GradientFade />
        </HeaderWrap>

        <Details movie={movie} />
      </DetailsScroll>
    </ContainerGradient>
  );
}
