// src/components/RutaProtegida.jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function RutaProtegida() {
  // 1. Leemos el "cerebro" para ver si hay un usuario
  const { user } = useContext(AuthContext);

  // 2. Comprobamos si el usuario está logueado
  if (!user) {
    // 3. Si NO está logueado, lo redirigimos a /login
    // "replace" evita que pueda volver atrás con la flecha
    return <Navigate to="/login" replace />;
  }

  // 4. Si SÍ está logueado, le mostramos el contenido
  // (El <Outlet /> cargará la página hija, ej. Clases)
  return <Outlet />;
}

export default RutaProtegida;
