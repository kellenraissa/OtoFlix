import { getMovieById, getMovies } from "@/services/moviesService";
import type { MovieByIdResponse, MovieType } from "@/types/movies";
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

export const fetchMovieById = createAsyncThunk<
  MovieByIdResponse,
  string | undefined
>(`${MOVIES_NAMESPACE}/byId`, async (movieId, { rejectWithValue }) => {
  if (!movieId && movieId !== "") {
    return rejectWithValue("movieId inválido");
  }
  const data = await getMovieById({ movieId });
  return data;
});
