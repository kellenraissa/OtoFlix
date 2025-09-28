import { getDetailsById } from "@/services/detailsService";
import type { DetailsByIdResponse } from "@/types/details";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DETAILS_NAMESPACE } from "./constants";

export const fetchDetailsById = createAsyncThunk<
  DetailsByIdResponse,
  string | undefined
>(`${DETAILS_NAMESPACE}/byId`, async (movieId, { rejectWithValue }) => {
  if (!movieId && movieId !== "") {
    return rejectWithValue("movieId inválido");
  }
  const data = await getDetailsById({ movieId });
  return data;
});
