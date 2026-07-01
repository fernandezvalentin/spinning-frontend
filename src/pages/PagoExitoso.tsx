import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

function PagoExitoso() {
  // @ts-ignore
  const { user, refreshUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [verificando, setVerificando] = useState(true);
  const [mensaje, setMensaje] = useState("Verificando tu suscripción...");
  const intentosRef = useRef(0);
  const maxIntentos = 30;
  const redirigidoRef = useRef(false);
  const intervalRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);
  const iniciadoRef = useRef(false);

  useEffect(() => {
    // @ts-ignore
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
    if (!user) {
      navigate("/login");
      return;
    }

    // @ts-ignore
    if (user.pago_activo) {
      navigate("/clases", { state: { fromPayment: true } });
      return;
    }

    if (iniciadoRef.current) {
      return;
    }
    iniciadoRef.current = true;

    const verificarPago = async () => {
      if (redirigidoRef.current) return;

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

      intentosRef.current += 1;
      if (intentosRef.current > 0) {
        setMensaje(`Verificando... (${intentosRef.current}/${maxIntentos})`);
      }

      try {
        const updatedUser: any = await refreshUser();
        
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

    timeoutRef.current = setTimeout(() => {
      verificarPago();
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
      const updatedUser: any = await refreshUser();
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
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-bg-elevated border border-border p-8 rounded-2xl max-w-lg w-full text-center shadow-2xl"
      >
        <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">¡Pago Exitoso!</h2>
        <p className="text-lg text-text-muted mb-8">
          {mensaje}
        </p>

        {verificando && (
          <div className="mt-4">
            <div className="flex justify-center mb-6">
              <div className="w-8 h-8 border-4 border-bg-primary border-t-accent rounded-full animate-spin"></div>
            </div>
            <p className="text-text-muted text-sm mb-2">
              Por favor espera un momento mientras procesamos tu pago y activamos tu acceso.
            </p>
            <p className="text-text-muted/70 text-xs mb-6">
              Esto puede tomar unos segundos...
            </p>
            {intentosRef.current > 5 && (
              <button 
                onClick={handleVerificarManual}
                className="bg-accent hover:bg-accent-strong text-white px-6 py-2.5 rounded-full font-medium transition-colors w-full"
              >
                Verificar ahora
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default PagoExitoso;
