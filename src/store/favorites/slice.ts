import { DetailsType } from "@/types/details";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FAVORITES_NAMESPACE } from "./constants";
import type { FavoritesState } from "./types";

const initialState: FavoritesState = { items: {} };

const favoritesSlice = createSlice({
  name: FAVORITES_NAMESPACE,
  initialState,
  reducers: {
    setAll(state, action: PayloadAction<DetailsType[]>) {
      const list = action.payload ?? [];
      const map: Record<number, DetailsType> = {};
      for (const m of list) map[m.id] = m;
      state.items = map;
    },
    add(state, action: PayloadAction<DetailsType>) {
      const m = action.payload;
      state.items[m.id] = m;
    },
    remove(state, action: PayloadAction<number>) {
      delete state.items[action.payload];
    },
    toggle(state, action: PayloadAction<DetailsType>) {
      const m = action.payload;
      if (state.items[m.id]) delete state.items[m.id];
      else state.items[m.id] = m;
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const { setAll, add, remove, toggle, clear } = favoritesSlice.actions;
export default favoritesSlice.reducer;
