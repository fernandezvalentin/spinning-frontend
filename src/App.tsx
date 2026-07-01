import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Clases from "./pages/Clases";
import PagoExitoso from "./pages/PagoExitoso";
import AdminDashboard from "./pages/AdminDashboard";
import RutaProtegida from "./components/RutaProtegida";
import AdminRutaProtegida from "./components/AdminRutaProtegida";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "pago-exitoso", element: <PagoExitoso /> },
      {
        path: "clases",
        element: <RutaProtegida />,
        children: [
          { index: true, element: <Clases /> }
        ]
      },
      {
        path: "admin",
        element: <AdminRutaProtegida />,
        children: [
          { index: true, element: <AdminDashboard /> }
        ]
      }
    ],
  },
]);

export default router;
