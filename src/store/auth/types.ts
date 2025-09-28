import { Session } from "./storage";

export type AuthState = {
  session: Session;
  loading: boolean;
};
