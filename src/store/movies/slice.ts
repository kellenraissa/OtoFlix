import { RequestStatus } from "@/types/RequestStatus";
import { createSlice } from "@reduxjs/toolkit";
import { MOVIES_NAMESPACE } from "./constants";
import { fetchMovieById, fetchTopMovies } from "./thunks";
import type { MoviesState } from "./types";

const initialState: MoviesState = {
  list: {
    items: [],
    page: 0,
    totalPages: 1,
    status: RequestStatus.Idle,
  },
  detail: {
    current: undefined,
    status: RequestStatus.Idle,
  },
};

const moviesSlice = createSlice({
  name: MOVIES_NAMESPACE,
  initialState,
  reducers: {
    resetList(state) {
      state.list = {
        items: [],
        page: 0,
        totalPages: 1,
        status: RequestStatus.Idle,
        error: undefined,
      };
    },
    clearDetail(state) {
      state.detail.current = undefined;
      state.detail.status = RequestStatus.Idle;
      state.detail.error = undefined;
    },
  },
  extraReducers: (b) => {
    // -------- Get Top movies ----------------
    b.addCase(fetchTopMovies.pending, (s) => {
      s.list.status = RequestStatus.Loading;
      s.list.error = undefined;
    });
    b.addCase(fetchTopMovies.fulfilled, (s, a) => {
      s.list.status = RequestStatus.Succeeded;
      s.list.page = a.payload.page;
      s.list.totalPages = a.payload.total_pages;
      s.list.items =
        a.payload.page === 1
          ? a.payload.results
          : [...s.list.items, ...a.payload.results];
    });
    b.addCase(fetchTopMovies.rejected, (s, a) => {
      s.list.status = RequestStatus.Failed;
      s.list.error = a.error.message;
    });

    // -------- Get Details movie ----------------
    b.addCase(fetchMovieById.pending, (s) => {
      s.detail.status = RequestStatus.Loading;
      s.detail.error = undefined;
    });
    b.addCase(fetchMovieById.fulfilled, (s, a) => {
      s.detail.status = RequestStatus.Succeeded;
      s.detail.current = a.payload;
    });
    b.addCase(fetchMovieById.rejected, (s, a) => {
      s.detail.status = RequestStatus.Failed;
      s.detail.error = a.error.message;
    });
  },
});

export const { resetList, clearDetail } = moviesSlice.actions;
export default moviesSlice.reducer;
