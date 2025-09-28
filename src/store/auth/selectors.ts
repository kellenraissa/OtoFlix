import type { RootState } from "@/store";

export const selectAuthLoading = (s: RootState) => s.auth.loading;
export const selectSession = (s: RootState) => s.auth.session;
export const selectIsAuthenticated = (s: RootState) => Boolean(s.auth.session);
