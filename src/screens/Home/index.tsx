import Card from "@/components/Card";
import ContainerGradient from "@/components/ContainerGradient";
import { Text } from "@/components/Text";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPopularMovies, moviesReset } from "@/store/movies";
import {
  selectMovies,
  selectMoviesPage,
  selectMoviesStatus,
  selectMoviesTotal,
} from "@/store/movies/selectors";
import { RequestStatus } from "@/types/RequestStatus";
import React, { useCallback, useEffect, useState } from "react";
import { RefreshControl, TouchableOpacity } from "react-native";
import { MoviesList, UserContent } from "./styles";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectMovies);
  const status = useAppSelector(selectMoviesStatus);
  const page = useAppSelector(selectMoviesPage);
  const total = useAppSelector(selectMoviesTotal);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchPopularMovies(1));
    }
  }, [dispatch, items.length]);

  const canLoadMore = status !== RequestStatus.Loading && page < total;

  const loadMore = useCallback(() => {
    if (canLoadMore) {
      dispatch(fetchPopularMovies(page + 1));
    }
  }, [dispatch, page, canLoadMore]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    dispatch(moviesReset());
    await dispatch(fetchPopularMovies(1));
    setRefreshing(false);
  }, [dispatch]);

  return (
    <ContainerGradient>
      <>
        <UserContent>
          <Text size={8} weight="semibold" color="white">
            Olá, Kellen!
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
            <TouchableOpacity
              disabled={!canLoadMore}
              onPress={loadMore}
              style={{
                padding: 16,
                alignItems: "center",
                opacity: canLoadMore ? 1 : 0.5,
              }}
            >
              <Text>
                {status === RequestStatus.Loading
                  ? "Carregando..."
                  : canLoadMore
                  ? "Carregar mais"
                  : "Fim da lista"}
              </Text>
            </TouchableOpacity>
          }
          ListEmptyComponent={
            status === RequestStatus.Loading ? (
              <Text style={{ textAlign: "center", marginTop: 24 }}>
                Carregando...
              </Text>
            ) : (
              <Text style={{ textAlign: "center", marginTop: 24 }}>
                Nenhum item.
              </Text>
            )
          }
        />
      </>
    </ContainerGradient>
  );
}
