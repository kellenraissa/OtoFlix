import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_NAMESPACE } from "./constants";
import { Session } from "./storage";
import { AuthState } from "./types";

const initialState: AuthState = {
  session: null,
  loading: true, // for hydratation
  signingIn: false,
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
    signInStart(state) {
      state.signingIn = true;
    },
    signInSuccess(state, action) {
      state.session = action.payload;
      state.signingIn = false;
    },
    signInFailure(state) {
      state.signingIn = false;
    },
  },
});

export const { setHydrated, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
