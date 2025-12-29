import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"; // <-- Importamos el CSS nuevo

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* 1. LOGO */}
      <Link to="/" className="nav-logo">
        SPINNING
      </Link>

      {/* 2. ENLACES */}
      <div className="nav-links">
        {user ? (
          // --- USUARIO LOGUEADO ---
          <>
            <Link to="/clases" className="nav-link">
              CLASES
            </Link>

            {user.isAdmin && (
              <Link to="/admin" className="nav-link">
                ADMIN
                <span className="admin-badge">PRO</span>
              </Link>
            )}

            <span
              className="nav-link nav-user-info"
              style={{ cursor: "default", color: "#888" }}
            >
              Hola, {user.email.split("@")[0]}
            </span>

            <button onClick={handleLogout} className="nav-btn logout-btn">
              Salir
            </button>
          </>
        ) : (
          // --- VISITANTE ---
          <>
            <a href="/#clases" className="nav-link">
              CLASES
            </a>
            <a href="/#personalizadas" className="nav-link">
              PERSONALIZADAS
            </a>
            <a href="/#quien-soy" className="nav-link">
              QUIÉN SOY
            </a>

            <div
              style={{
                width: "1px",
                height: "20px",
                background: "#444",
                display: "inline-block",
              }}
            ></div>

            <Link to="/login" className="nav-link">
              INGRESAR
            </Link>

            <Link to="/register" className="nav-btn">
              EMPEZAR
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
