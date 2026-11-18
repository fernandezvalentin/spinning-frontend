import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

/** Solo deja pasar a administradores; el resto vuelve al inicio. */
function AdminRutaProtegida() {
  const { user } = useAuth();
  return user?.isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}

export default AdminRutaProtegida;
