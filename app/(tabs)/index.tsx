import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPopularMovies, moviesReset } from "@/store/movies";
import {
  selectMovies,
  selectMoviesPage,
  selectMoviesStatus,
  selectMoviesTotal,
} from "@/store/movies/selectors";
import { RequestStatus } from "@/types/RequestStatus"; // se você usa enum
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const IMG = (path?: string) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : undefined;

export default function Popular() {
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
    <FlatList
      data={items}
      keyExtractor={(it, i) => String(`${it.id}-${i}`)}
      renderItem={({ item }) => (
        <View style={{ flexDirection: "row", padding: 12, gap: 12 }}>
          {item.poster_path ? (
            <Image
              source={{ uri: IMG(item.poster_path) }}
              style={{ width: 90, height: 135, borderRadius: 8 }}
            />
          ) : null}
          <Text style={{ flex: 1, fontWeight: "600" }}>
            {item.title || item.name}
          </Text>
        </View>
      )}
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
  );
}
