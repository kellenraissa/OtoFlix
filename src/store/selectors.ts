import { RootState } from "./index";

export const selectGlobalLoading = (s: RootState) => s.ui.globalLoading;
export const selectToast = (s: RootState) => s.ui.toast;
