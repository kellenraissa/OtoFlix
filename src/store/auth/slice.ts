import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_NAMESPACE } from "./constants";
import { Session } from "./storage";
import { AuthState } from "./types";

const initialState: AuthState = {
  session: null,
  loading: true, // for hydratation
};

const authSlice = createSlice({
  name: AUTH_NAMESPACE,
  initialState,
  reducers: {
    setHydrated(state, action: PayloadAction<Session>) {
      state.session = action.payload;
      state.loading = false;
    },
    signIn(state, action: PayloadAction<{ email: string }>) {
      state.session = { email: action.payload.email };
    },
    signOut(state) {
      state.session = null;
    },
  },
});

export const { setHydrated, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
