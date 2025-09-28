import type { DetailsType } from "@/types/details";
import type { Store } from "@reduxjs/toolkit";
import { MMKV } from "react-native-mmkv";
import { setAll } from "./slice";

const storage = new MMKV();
const KEY = "otoflix@favorites";

export function hydrateFavorites(store: Store) {
  const raw = storage.getString(KEY);
  if (!raw) return;
  try {
    const list = JSON.parse(raw) as DetailsType[];
    store.dispatch(setAll(list));
  } catch {}
}

export function watchFavorites(store: Store) {
  let lastJson = "";
  return store.subscribe(() => {
    const state = store.getState();
    const list = Object.values(state.favorites.items) as DetailsType[];
    const json = JSON.stringify(list);
    if (json !== lastJson) {
      storage.set(KEY, json);
      lastJson = json;
    }
  });
}
