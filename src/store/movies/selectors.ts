import { RootState } from "@/store";

export const selectMovies = (s: RootState) => s.movies.items;
export const selectMoviesStatus = (s: RootState) => s.movies.status;
export const selectMoviesPage = (s: RootState) => s.movies.page;
export const selectMoviesTotal = (s: RootState) => s.movies.totalPages;
export const selectMoviesError = (s: RootState) => s.movies.error;
