import type { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectFavoritesMap = (s: RootState) => s.favorites.items;

export const selectFavoritesList = createSelector([selectFavoritesMap], (map) =>
  Object.values(map)
);

export const makeSelectIsFavorite = (id: number) =>
  createSelector([selectFavoritesMap], (map) => Boolean(map[id]));
