import { configureStore } from "@reduxjs/toolkit";
import { detailsReducer } from "./details";
import { moviesReducer } from "./movies";
import uiReducer from "./ui.slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details: detailsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
