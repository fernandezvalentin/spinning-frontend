// src/components/AdminRutaProtegida.jsx
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AdminRutaProtegida() {
  // 1. Leemos el "cerebro" para ver quién es el usuario
  const { user } = useContext(AuthContext);

  // 2. ¡LA DOBLE VERIFICACIÓN!
  // Comprobamos si el usuario existe Y si es un admin.
  if (user && user.isAdmin) {
    // 3. Si es admin, lo dejamos pasar a la "oficina"
    // (El <Outlet /> cargará la página de admin, ej. /admin/crear-clase)
    return <Outlet />;
  }

  // 4. Si NO está logueado, O si NO es admin
  // lo redirigimos a la página de Inicio.
  return <Navigate to="/" replace />;
}

export default AdminRutaProtegida;
