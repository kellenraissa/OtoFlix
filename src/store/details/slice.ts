import { RequestStatus } from "@/types/RequestStatus";
import { createSlice } from "@reduxjs/toolkit";
import { DETAILS_NAMESPACE } from "./constants";
import { fetchDetailsById } from "./thunks";
import { DetailsState } from "./types";

const initialState: DetailsState = {
  current: undefined,
  status: RequestStatus.Idle,
};

const detailsSlice = createSlice({
  name: DETAILS_NAMESPACE,
  initialState,
  reducers: {
    reset(state) {
      state.current = undefined;
      state.status = RequestStatus.Idle;
      state.error = undefined;
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchDetailsById.pending, (s) => {
      s.status = RequestStatus.Loading;
      s.error = undefined;
    });
    b.addCase(fetchDetailsById.fulfilled, (s, a) => {
      s.status = RequestStatus.Succeeded;
      s.current = a.payload;
    });
    b.addCase(fetchDetailsById.rejected, (s, a) => {
      s.status = RequestStatus.Failed;
      s.error = a.error.message;
    });
  },
});

export const { reset } = detailsSlice.actions;
export default detailsSlice.reducer;
