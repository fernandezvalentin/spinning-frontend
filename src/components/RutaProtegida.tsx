import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

/** Solo deja pasar a usuarios logueados; si no, redirige a /login. */
function RutaProtegida() {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default RutaProtegida;
