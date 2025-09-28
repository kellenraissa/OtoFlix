import React from "react";

type Session = null | { userId: string };

type AuthContextType = {
  session: Session;
  loading: boolean;
  signIn: (data: { userId: string }) => void;
  signOut: () => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [session, setSession] = React.useState<Session>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setSession(null);
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const signIn = (data: { userId: string }) => setSession(data);
  const signOut = () => setSession(null);

  return (
    <AuthContext.Provider value={{ session, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro do AuthProvider");
  return ctx;
}
