import React from "react"; // <-- ¡EL ARREGLO!
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import RutaProtegida from "./components/RutaProtegida";
import AdminRutaProtegida from "./components/AdminRutaProtegida";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Clases from "./pages/Clases";
import AdminDashboard from "./pages/AdminDashboard";
import PagoExitoso from "./pages/PagoExitoso";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/pago-exitoso", element: <PagoExitoso /> },
      {
        element: <RutaProtegida />,
        children: [{ path: "/clases", element: <Clases /> }],
      },
      {
        element: <AdminRutaProtegida />,
        children: [{ path: "/admin", element: <AdminDashboard /> }],
      },
    ],
  },
]);

export default router;
