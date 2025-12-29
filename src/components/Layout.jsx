// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    // ¡IMPORTANTE! Este div NO debe tener 'padding'.
    // Solo debe ocuparse de que el footer baje (minHeight: 100vh)
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar />

      {/* El contenido principal. flex: 1 hace que ocupe el espacio sobrante */}
      <main style={{ flex: 1, width: "100%" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
