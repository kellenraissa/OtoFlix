import { getMovies } from "@/services/moviesService";
import type { MovieType } from "@/types/movies";
import type { TMDBPaginated } from "@/types/tmdbPaginated";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { MOVIES_NAMESPACE } from "./constants";

export const fetchTopMovies = createAsyncThunk<
  TMDBPaginated<MovieType>,
  number | undefined
>(`${MOVIES_NAMESPACE}/top_rated`, async (page = 1) => {
  const data = await getMovies(page);
  return data;
});
