import axios, { isAxiosError } from "axios";
import type { Clase, DatosClase, Usuario } from "../types";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5001/api";

const api = axios.create({ baseURL: API_URL });

const authHeader = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` },
});

/**
 * Ejecuta una request y normaliza los errores a `Error` con un mensaje legible,
 * así los componentes solo tienen que mostrar `error.message`.
 */
async function request<T>(fn: () => Promise<{ data: T }>): Promise<T> {
  try {
    const { data } = await fn();
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      const message =
        (error.response.data as { message?: string })?.message ??
        `Error ${error.response.status}`;
      throw new Error(message);
    }
    throw new Error("No se pudo conectar al servidor. Intentá de nuevo más tarde.");
  }
}

export const loginUsuario = (email: string, password: string) =>
  request<Usuario>(() => api.post("/usuarios/login", { email, password }));

export const registerUsuario = (email: string, password: string) =>
  request<Usuario>(() => api.post("/usuarios/registrar", { email, password }));

export const getPerfilUsuario = (token: string) =>
  request<Omit<Usuario, "token">>(() => api.get("/usuarios/perfil", authHeader(token)));

export const crearLinkDePago = (token: string) =>
  request<{ init_point?: string; url?: string }>(() =>
    api.post("/pagos/crear-checkout", {}, authHeader(token))
  );

export const getClases = (token: string) =>
  request<Clase[]>(() => api.get("/clases", authHeader(token)));

export const addClase = (token: string, datos: DatosClase) =>
  request<Clase>(() => api.post("/clases", datos, authHeader(token)));

export const updateClase = (token: string, id: string, datos: DatosClase) =>
  request<Clase>(() => api.put(`/clases/${id}`, datos, authHeader(token)));

export const deleteClase = (token: string, id: string) =>
  request<{ message: string }>(() => api.delete(`/clases/${id}`, authHeader(token)));

export default api;
