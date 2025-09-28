import type { RootState } from "@/store";

export const selectFavoritesMap = (s: RootState) => s.favorites.items;
export const selectFavoritesList = (s: RootState) =>
  Object.values(s.favorites.items);
export const selectIsFavorite = (id: number | string) => (s: RootState) =>
  Boolean(s.favorites.items[Number(id)]);
