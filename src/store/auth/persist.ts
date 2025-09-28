import type { Store } from "@reduxjs/toolkit";
import { selectSession } from "./selectors";
import { setHydrated } from "./slice";
import { AuthStorage } from "./storage";

export function hydrateAuth(store: Store) {
  const saved = AuthStorage.get();
  store.dispatch(setHydrated(saved));
}

export function watchAuth(store: Store) {
  let lastJson = "";
  return store.subscribe(() => {
    const state = store.getState();
    const session = selectSession(state);
    const nextJson = JSON.stringify(session ?? null);
    if (nextJson !== lastJson) {
      lastJson = nextJson;
      AuthStorage.set(session ?? null);
    }
  });
}
