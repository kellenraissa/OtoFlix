import { RootState } from "@/store";

export const selectMoviesList = (s: RootState) => s.movies.list.items;
export const selectMoviesListStatus = (s: RootState) => s.movies.list.status;
export const selectMoviesListPage = (s: RootState) => s.movies.list.page;
export const selectMoviesListTotal = (s: RootState) => s.movies.list.totalPages;
export const selectMoviesListError = (s: RootState) => s.movies.list.error;
