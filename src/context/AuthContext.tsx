import { useCallback, useMemo, useState, type ReactNode } from "react";
import { getPerfilUsuario, loginUsuario, registerUsuario } from "../services/api";
import type { Usuario } from "../types";
import { AuthContext } from "./auth-context";

const STORAGE_KEY = "user";

function leerUsuarioGuardado(): Usuario | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Usuario) : null;
  } catch {
    return null;
  }
}

function guardarUsuario(user: Usuario | null) {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // localStorage puede no estar disponible (modo privado, etc.)
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(leerUsuarioGuardado);

  const actualizar = useCallback((next: Usuario | null) => {
    setUser(next);
    guardarUsuario(next);
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      const data = await loginUsuario(email, password);
      actualizar(data);
      return data;
    },
    [actualizar]
  );

  const register = useCallback(
    async (email: string, password: string) => {
      const data = await registerUsuario(email, password);
      actualizar(data);
      return data;
    },
    [actualizar]
  );

  const refreshUser = useCallback(async () => {
    const stored = leerUsuarioGuardado();
    if (!stored?.token) return null;
    const perfil = await getPerfilUsuario(stored.token);
    const updated: Usuario = { ...perfil, token: stored.token };
    actualizar(updated);
    return updated;
  }, [actualizar]);

  const logout = useCallback(() => actualizar(null), [actualizar]);

  const value = useMemo(
    () => ({ user, login, register, logout, refreshUser }),
    [user, login, register, logout, refreshUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
