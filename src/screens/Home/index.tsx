import Card from "@/components/Card";
import ContainerGradient from "@/components/ContainerGradient";
import Empty from "@/components/Empty";
import Loading from "@/components/Loading";
import LoadMore from "@/components/LoadMore";
import { Text } from "@/components/Text";
import TextButton from "@/components/TextButton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchTopMovies, moviesReset } from "@/store/movies";
import {
  selectMoviesList,
  selectMoviesListPage,
  selectMoviesListStatus,
  selectMoviesListTotal,
} from "@/store/movies/selectors";
import { RequestStatus } from "@/types/RequestStatus";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { MoviesList, UserContent } from "./styles";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectMoviesList);
  const status = useAppSelector(selectMoviesListStatus);
  const page = useAppSelector(selectMoviesListPage);
  const total = useAppSelector(selectMoviesListTotal);
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchTopMovies(1));
    }
  }, [dispatch, items.length]);

  const canLoadMore = status !== RequestStatus.Loading && page < total;

  const loadMore = useCallback(() => {
    if (canLoadMore) {
      dispatch(fetchTopMovies(page + 1));
    }
  }, [dispatch, page, canLoadMore]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    dispatch(moviesReset());
    await dispatch(fetchTopMovies(1));
    setRefreshing(false);
  }, [dispatch]);

  return (
    <ContainerGradient>
      <>
        <UserContent>
          <TextButton
            onPress={() => router.push("/favorites")}
            style={{ alignSelf: "flex-end" }}
          />
          <Text size={8} weight="semibold" color="white">
            Olá!
          </Text>
          <Text size={7} color="white">
            Confira os top filmes que selecionamos para você!
          </Text>
        </UserContent>
        <MoviesList
          data={items}
          keyExtractor={(it, i) => String(`${it.id}-${i}`)}
          renderItem={({ item }) => <Card movie={item} />}
          onEndReachedThreshold={0.5}
          onEndReached={loadMore}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListFooterComponent={
            <LoadMore
              disabled={!canLoadMore}
              onPress={loadMore}
              canLoadMore={canLoadMore}
              status={status}
            />
          }
          ListEmptyComponent={
            status === RequestStatus.Loading ? <Loading /> : <Empty />
          }
        />
      </>
    </ContainerGradient>
  );
}
