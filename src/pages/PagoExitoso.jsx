import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Home.css";

function PagoExitoso() {
  const { user, refreshUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [verificando, setVerificando] = useState(true);
  const [mensaje, setMensaje] = useState("Verificando tu suscripción...");
  const intentosRef = useRef(0);
  const maxIntentos = 30;
  const redirigidoRef = useRef(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const iniciadoRef = useRef(false);

  // Efecto para escuchar cambios en el usuario del contexto
  useEffect(() => {
    if (user && user.pago_activo && !redirigidoRef.current) {
      redirigidoRef.current = true;
      setVerificando(false);
      setMensaje("¡Suscripción activada! Redirigiendo a tus clases...");
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setTimeout(() => {
        navigate("/clases", { state: { fromPayment: true } });
      }, 1500);
    }
  }, [user, navigate]);

  useEffect(() => {
    // Verificación inicial
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.pago_activo) {
      navigate("/clases", { state: { fromPayment: true } });
      return;
    }

    // Solo iniciar la verificación una vez
    if (iniciadoRef.current) {
      return;
    }
    iniciadoRef.current = true;

    const verificarPago = async () => {
      if (redirigidoRef.current) return;

      // Si ya alcanzamos el máximo de intentos
      if (intentosRef.current >= maxIntentos) {
        redirigidoRef.current = true;
        setVerificando(false);
        setMensaje("El pago se procesó correctamente. Redirigiendo...");
        
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        setTimeout(() => {
          navigate("/clases", { state: { fromPayment: true } });
        }, 2000);
        return;
      }

      // Actualizar mensaje según el intento
      intentosRef.current += 1;
      if (intentosRef.current > 0) {
        setMensaje(`Verificando... (${intentosRef.current}/${maxIntentos})`);
      }

      // Intentar refrescar los datos del usuario
      try {
        const updatedUser = await refreshUser();
        
        // Verificar si ahora tiene pago activo DESPUÉS del refresh
        if (updatedUser && updatedUser.pago_activo) {
          redirigidoRef.current = true;
          setVerificando(false);
          setMensaje("¡Suscripción activada! Redirigiendo a tus clases...");
          
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }

          setTimeout(() => {
            navigate("/clases", { state: { fromPayment: true } });
          }, 1500);
          return;
        }
      } catch (error) {
        console.error("Error al verificar pago:", error);
      }
    };

    // Esperar 2 segundos antes del primer intento (dar tiempo al webhook)
    timeoutRef.current = setTimeout(() => {
      verificarPago();
      
      // Configurar intervalo para verificar periódicamente cada 2 segundos
      intervalRef.current = setInterval(() => {
        verificarPago();
      }, 2000);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [user, navigate, refreshUser]);

  const handleVerificarManual = async () => {
    try {
      const updatedUser = await refreshUser();
      if (updatedUser && updatedUser.pago_activo) {
        navigate("/clases", { state: { fromPayment: true } });
      } else {
        setMensaje("Aún estamos procesando tu pago. Por favor espera unos segundos más.");
      }
    } catch (error) {
      console.error("Error al verificar manualmente:", error);
      setMensaje("Hubo un error al verificar. Por favor intenta de nuevo.");
    }
  };

  return (
    <div className="home-container">
      <div className="info-card" style={{ marginTop: "80px" }}>
        <h2>✅ ¡Pago Exitoso!</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          {mensaje}
        </p>
        {verificando && (
          <div style={{ marginTop: "20px" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
              Por favor espera un momento mientras procesamos tu pago y activamos tu acceso.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>
              Esto puede tomar unos segundos...
            </p>
            {intentosRef.current > 5 && (
              <button 
                onClick={handleVerificarManual}
                className="btn-primary"
                style={{ marginTop: "10px" }}
              >
                Verificar ahora
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PagoExitoso;
