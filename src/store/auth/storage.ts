import { MMKV } from "react-native-mmkv";

export type Session = { email: string } | null;

const storage = new MMKV();
const KEY = "otoflix@auth_session";

function parse<T>(raw?: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export const AuthStorage = {
  get(): Session {
    return parse<Session>(storage.getString(KEY));
  },
  set(session: Session) {
    if (session) storage.set(KEY, JSON.stringify(session));
    else storage.delete(KEY);
  },
  clear() {
    storage.delete(KEY);
  },
};
