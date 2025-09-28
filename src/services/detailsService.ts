import { MOVIES_LANG_PT_BR } from "@/store/globalConstant";
import type { DetailsType, GetDetailsByIdParams } from "@/types/details";

import { tmdbApi } from "./api/api";

export async function getDetailsById({
  movieId,
  language = MOVIES_LANG_PT_BR,
}: GetDetailsByIdParams) {
  const { data } = await tmdbApi.get<DetailsType>(`/movie/${movieId}`, {
    params: { language },
  });

  return data;
}
