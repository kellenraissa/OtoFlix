import { DetailsType } from "@/types/details";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FAVORITES_NAMESPACE } from "./constants";
import type { FavoritesState } from "./types";

const initialState: FavoritesState = { items: [] };

const favoritesSlice = createSlice({
  name: FAVORITES_NAMESPACE,
  initialState,
  reducers: {
    setAll(state, action: PayloadAction<DetailsType[]>) {
      state.items = action.payload ?? [];
    },
    add(state, action: PayloadAction<DetailsType>) {
      const m = action.payload;
      if (!state.items.some((x) => x.id === m.id)) state.items.push(m);
    },
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },
    toggle(state, action: PayloadAction<DetailsType>) {
      const m = action.payload;
      const i = state.items.findIndex((x) => x.id === m.id);
      if (i === -1) state.items.push(m);
      else state.items.splice(i, 1);
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const { setAll, add, remove, toggle, clear } = favoritesSlice.actions;
export default favoritesSlice.reducer;
