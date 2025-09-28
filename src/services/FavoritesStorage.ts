import type { DetailsType } from "@/types/details";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();
const KEY = "otoflix@favorites";

function parse<T>(raw?: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export class FavoritesStorage {
  static getAll(): DetailsType[] {
    const raw = storage.getString(KEY);
    return parse<DetailsType[]>(raw) ?? [];
  }

  static saveAll(list: DetailsType[]) {
    storage.set(KEY, JSON.stringify(list));
  }

  static exists(id: number) {
    return this.getAll().some((m) => m.id === id);
  }

  static add(movie: DetailsType) {
    const list = this.getAll();
    if (!list.some((m) => m.id === movie.id)) {
      list.push(movie);
      this.saveAll(list);
    }
    return list;
  }

  static remove(id: number) {
    const list = this.getAll().filter((m) => m.id !== id);
    this.saveAll(list);
    return list;
  }

  static toggle(movie: DetailsType) {
    return this.exists(movie.id) ? this.remove(movie.id) : this.add(movie);
  }

  static clear() {
    storage.delete(KEY);
  }
}
