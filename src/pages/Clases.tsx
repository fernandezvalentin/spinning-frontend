import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getClases } from "../services/api";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function Clases() {
  // @ts-ignore
  const { user, refreshUser } = useContext(AuthContext);
  const [clases, setClases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [verificandoPago, setVerificandoPago] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verificarPagoSiEsNecesario = async () => {
      // @ts-ignore
      if (!user?.pago_activo && location.state?.fromPayment) {
        setVerificandoPago(true);
        try {
          await refreshUser();
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

  useEffect(() => {
    const cargarClases = async () => {
      if (!user || !user.token || !user.pago_activo) return;
      try {
        const data = await getClases(user.token);
        setClases(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    cargarClases();
  }, [user]);

  if (!user?.pago_activo) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-bg-elevated border border-border p-8 rounded-2xl max-w-md w-full text-center shadow-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Acceso Denegado</h2>
          <p className="text-text-muted mb-6">
            Necesitás una suscripción activa para ver las clases.
          </p>
          {verificandoPago ? (
            <p className="text-accent animate-pulse font-medium">
              Verificando tu suscripción...
            </p>
          ) : (
            <Link 
              to="/" 
              className="inline-block bg-accent hover:bg-accent-strong text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Volver al Inicio
            </Link>
          )}
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-bg-elevated border-t-accent rounded-full animate-spin"></div>
          <p className="text-text-muted font-medium">Cargando tus clases...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-xl max-w-md text-center">
          <p className="text-red-400 font-medium">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-b border-border pb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          ¡Bienvenido a tus Clases, <span className="text-accent-warm">{user.email.split('@')[0]}</span>!
        </h1>
        <p className="text-text-muted text-lg">Tu suscripción está activa. ¡Es hora de pedalear!</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {clases.map((clase, index) => (
          <motion.div
            key={clase._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-white/20 transition-all group"
          >
            <div className="relative pt-[56.25%] bg-black">
              <ReactPlayer
                url={`https://vimeo.com/${clase.link_vimeo}`}
                controls={true}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-warm transition-colors">{clase.titulo}</h3>
              <p className="text-text-muted">{clase.descripcion}</p>
            </div>
          </motion.div>
        ))}
        {clases.length === 0 && (
          <div className="col-span-full text-center py-12 bg-bg-elevated rounded-2xl border border-border">
            <p className="text-text-muted text-lg">Aún no hay clases disponibles en este momento.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clases;
