import { FavoritesStorage } from "@/services/FavoritesStorage";
import type { RootState } from "@/store";
import type { Store } from "@reduxjs/toolkit";
import { setAll } from "./slice";

export function hydrateFavorites(store: Store<RootState>) {
  const items = FavoritesStorage.getAll();
  store.dispatch(setAll(items as any));
}

export function watchFavorites(store: Store<RootState>) {
  let prev = "";
  return store.subscribe(() => {
    const items = store.getState().favorites.items;
    const json = JSON.stringify(items);
    if (json !== prev) {
      prev = json;
      FavoritesStorage.saveAll(items as any);
    }
  });
}
