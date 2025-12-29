// src/pages/Clases.jsx
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getClases } from "../services/api";
import ReactPlayer from "react-player"; // <-- 1. ¡IMPORTAMOS EL REPRODUCTOR!

function Clases() {
  const { user, refreshUser } = useContext(AuthContext);
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [verificandoPago, setVerificandoPago] = useState(false);
  const location = useLocation();

  // --- Verificar pago si viene de pago exitoso ---
  useEffect(() => {
    const verificarPagoSiEsNecesario = async () => {
      // Si el usuario no tiene pago activo y viene de pago-exitoso, intentar refrescar
      if (!user?.pago_activo && location.state?.fromPayment) {
        setVerificandoPago(true);
        try {
          await refreshUser();
          // Esperar un momento
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (err) {
          console.error("Error al verificar pago:", err);
        } finally {
          setVerificandoPago(false);
        }
      }
    };
    verificarPagoSiEsNecesario();
  }, [user, refreshUser, location.state]);

  // --- Cargar Clases (useEffect) ---
  // (Esta parte es la misma que antes)
  useEffect(() => {
    const cargarClases = async () => {
      if (!user || !user.token || !user.pago_activo) return;
      try {
        const data = await getClases(user.token);
        setClases(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    cargarClases();
  }, [user]); // El [user] se queda, está bien

  // --- Verificación de Pago (sigue igual) ---
  if (!user.pago_activo) {
    return (
      <div className="home-container">
        <div className="info-card" style={{ marginTop: "80px", textAlign: "center" }}>
          <h2>Acceso Denegado</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
            Necesitás una suscripción activa para ver las clases.
          </p>
          {verificandoPago ? (
            <p style={{ color: "var(--text-muted)" }}>
              Verificando tu suscripción...
            </p>
          ) : (
            <p>
              Por favor, volvé a la <Link to="/">página de Inicio</Link> para pagar.
            </p>
          )}
        </div>
      </div>
    );
  }

  // --- Pantalla de Carga (sigue igual) ---
  if (loading) {
    return <h1>Cargando clases...</h1>;
  }

  // --- Pantalla de Error (sigue igual) ---
  if (error) {
    return <h1 style={{ color: "red" }}>Error: {error}</h1>;
  }

  // --- ¡ÉXITO! Mapeamos las clases REALES ---
  return (
    <div>
      <h1>¡Bienvenido a las Clases, {user.email}!</h1>
      <p>Tu suscripción está activa. ¡A pedalear!</p>
      <hr />
      <h2>Tus Videos:</h2>

      {/* 2. Un contenedor para las clases */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {clases.map((clase) => (
          <div
            key={clase._id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h3>{clase.titulo}</h3>
            <p>{clase.descripcion}</p>

            {/* 3. ¡EL REPRODUCTOR! */}
            {/* Le damos un estilo para que sea responsive 16:9 */}
            <div
              style={{ position: "relative", paddingTop: "56.25%" /* 16:9 */ }}
            >
              <ReactPlayer
                // Construimos la URL de Vimeo
                url={`https://vimeo.com/${clase.link_vimeo}`}
                controls={true} // Para que muestre play/pausa/volumen
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clases;
