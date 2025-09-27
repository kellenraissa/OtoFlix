import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  globalLoading: boolean;
  toast?: { type: "success" | "error"; message: string };
};

const initialState: UIState = {
  globalLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setGlobalLoading(state, action: PayloadAction<boolean>) {
      state.globalLoading = action.payload;
    },
    setToast(state, action: PayloadAction<UIState["toast"]>) {
      state.toast = action.payload;
    },
    clearToast(state) {
      state.toast = undefined;
    },
  },
});

export const { setGlobalLoading, setToast, clearToast } = uiSlice.actions;
export default uiSlice.reducer;
