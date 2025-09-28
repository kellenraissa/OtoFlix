import { DetailsType } from "@/types/details";

export type FavoritesMap = Record<number, DetailsType>;

export type FavoritesState = {
  items: FavoritesMap;
};
