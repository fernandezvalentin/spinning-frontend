import { createContext, useContext } from "react";
import type { Usuario } from "../types";

export interface AuthContextValue {
  user: Usuario | null;
  login: (email: string, password: string) => Promise<Usuario>;
  register: (email: string, password: string) => Promise<Usuario>;
  logout: () => void;
  refreshUser: () => Promise<Usuario | null>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
