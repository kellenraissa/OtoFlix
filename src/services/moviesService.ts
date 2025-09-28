import { MOVIES_LANG_PT_BR } from "@/store/movies/constants";
import type {
  GetMoviesByIdParams,
  MovieByIdResponse,
  MovieType,
} from "@/types/movies";
import type { TMDBPaginated } from "@/types/tmdbPaginated";
import { tmdbApi } from "./api/api";

export async function getMovies(page = 1, language = MOVIES_LANG_PT_BR) {
  const { data } = await tmdbApi.get<TMDBPaginated<MovieType>>(
    "movie/top_rated",
    {
      params: { page, language },
    }
  );

  return data;
}

export async function getMovieById({
  movieId,
  language = MOVIES_LANG_PT_BR,
}: GetMoviesByIdParams) {
  const { data } = await tmdbApi.get<MovieByIdResponse>(`/movie/${movieId}`, {
    params: { language },
  });

  return data;
}
