import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RutaProtegida from "./components/RutaProtegida";
import AdminRutaProtegida from "./components/AdminRutaProtegida";

// Las páginas privadas se cargan bajo demanda: así la landing (lo que ve
// la mayoría de las visitas) no descarga el reproductor de video ni el panel.
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Clases = lazy(() => import("./pages/Clases"));
const PagoExitoso = lazy(() => import("./pages/PagoExitoso"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Cargando = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-bg-elevated border-t-accent rounded-full animate-spin" />
  </div>
);

const conSuspense = (node: ReactNode) => <Suspense fallback={<Cargando />}>{node}</Suspense>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: conSuspense(<Login />) },
      { path: "register", element: conSuspense(<Register />) },
      { path: "pago-exitoso", element: conSuspense(<PagoExitoso />) },
      {
        path: "clases",
        element: <RutaProtegida />,
        children: [{ index: true, element: conSuspense(<Clases />) }],
      },
      {
        path: "admin",
        element: <AdminRutaProtegida />,
        children: [{ index: true, element: conSuspense(<AdminDashboard />) }],
      },
      { path: "*", element: conSuspense(<NotFound />) },
    ],
  },
]);

export default router;
