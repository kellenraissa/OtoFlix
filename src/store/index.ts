import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies";
import uiReducer from "./ui.slice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    ui: uiReducer,
  },
  // middleware: (getDefault) => getDefault().concat(/* logger etc. */),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
