import { RequestStatus } from "@/types/RequestStatus";
import { createSlice } from "@reduxjs/toolkit";
import { MOVIES_NAMESPACE } from "./constants";
import { fetchPopularMovies } from "./thunks";
import type { MoviesState } from "./types";

const initialState: MoviesState = {
  items: [],
  page: 0,
  totalPages: 1,
  status: RequestStatus.Idle,
};

const moviesSlice = createSlice({
  name: MOVIES_NAMESPACE,
  initialState,
  reducers: {
    reset(state) {
      state.items = [];
      state.page = 0;
      state.totalPages = 1;
      state.status = RequestStatus.Idle;
      state.error = undefined;
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchPopularMovies.pending, (s) => {
      s.status = RequestStatus.Loading;
    });
    b.addCase(fetchPopularMovies.fulfilled, (s, a) => {
      s.status = RequestStatus.Succeeded;
      s.page = a.payload.page;
      s.totalPages = a.payload.total_pages;
      s.items =
        s.page === 1 ? a.payload.results : [...s.items, ...a.payload.results];
    });
    b.addCase(fetchPopularMovies.rejected, (s, a) => {
      s.status = RequestStatus.Failed;
      s.error = a.error.message;
    });
  },
});

export const { reset } = moviesSlice.actions;
export default moviesSlice.reducer;
