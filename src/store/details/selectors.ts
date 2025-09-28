import { RootState } from "@/store";

export const selectMovieDetail = (s: RootState) => s.details.current;
export const selectMovieDetailStatus = (s: RootState) => s.details.status;
export const selectMovieDetailError = (s: RootState) => s.details.error;
