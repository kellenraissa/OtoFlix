import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { detailsReducer } from "./details";
import { favoritesSlice } from "./favorites";
import { moviesReducer } from "./movies";
import uiReducer from "./ui.slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
    favorites: favoritesSlice,
    auth: authSlice,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
