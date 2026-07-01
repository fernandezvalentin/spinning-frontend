import React, { useContext, useState, useEffect, FormEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import { addClase, getClases, deleteClase, updateClase } from "../services/api";
import { motion } from "framer-motion";

function AdminDashboard() {
  // @ts-ignore
  const { user } = useContext(AuthContext);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [linkVimeo, setLinkVimeo] = useState("");
  const [clases, setClases] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);

  useEffect(() => {
    const cargarClases = async () => {
      if (!user?.token) return;
      setLoading(true);
      try {
        const data = await getClases(user.token);
        setClases(data);
      } catch (error: any) {
        setMensaje(`Error al cargar clases: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    cargarClases();
  }, [user?.token]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    const datosDeLaClase = { titulo, descripcion, link_vimeo: linkVimeo };

    try {
      if (editandoId) {
        const claseActualizada = await updateClase(user.token, editandoId, datosDeLaClase);
        setMensaje(`¡Clase "${claseActualizada.titulo}" actualizada!`);
        setClases(clases.map((c) => (c._id === editandoId ? claseActualizada : c)));
      } else {
        const nuevaClase = await addClase(user.token, datosDeLaClase);
        setMensaje(`¡Clase "${nuevaClase.titulo}" creada!`);
        setClases([...clases, nuevaClase]);
      }
      limpiarFormulario();
    } catch (error: any) {
      setMensaje(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (idDeLaClase: string) => {
    if (!window.confirm("¿Estás seguro de que querés borrar esta clase?")) {
      return;
    }
    setLoading(true);
    setMensaje("");
    try {
      await deleteClase(user.token, idDeLaClase);
      setMensaje("¡Clase borrada con éxito!");
      setClases((clasesActuales) => clasesActuales.filter((clase) => clase._id !== idDeLaClase));
    } catch (error: any) {
      setMensaje(`Error al borrar: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEditar = (clase: any) => {
    setEditandoId(clase._id);
    setTitulo(clase.titulo);
    setDescripcion(clase.descripcion);
    setLinkVimeo(clase.link_vimeo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const limpiarFormulario = () => {
    setEditandoId(null);
    setTitulo("");
    setDescripcion("");
    setLinkVimeo("");
    setTimeout(() => setMensaje(""), 5000); // Clear message after 5 seconds
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Panel de Administración</h1>
        <p className="text-text-muted">Bienvenido, Admin <span className="text-accent-warm">{user?.email}</span>.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 bg-bg-elevated border border-border rounded-2xl p-6 h-fit sticky top-28"
        >
          <h2 className="text-xl font-bold text-white mb-6">
            {editandoId ? "Editando Clase" : "Añadir Nueva Clase"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Título de la Clase</label>
              <input
                type="text"
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Descripción</label>
              <textarea
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all min-h-[100px]"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Link o ID de Vimeo</label>
              <input
                type="text"
                className="w-full bg-bg-primary border border-border rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                value={linkVimeo}
                onChange={(e) => setLinkVimeo(e.target.value)}
                required
              />
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-strong text-white px-4 py-2.5 rounded-xl font-medium transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Guardando..." : (editandoId ? "Actualizar Clase" : "Añadir Clase")}
              </button>

              {editandoId && (
                <button
                  type="button"
                  onClick={limpiarFormulario}
                  disabled={loading}
                  className="w-full bg-transparent hover:bg-white/5 border border-border text-white px-4 py-2.5 rounded-xl font-medium transition-colors"
                >
                  Cancelar Edición
                </button>
              )}
            </div>
          </form>

          {mensaje && (
            <div className={`mt-6 p-4 rounded-xl text-sm ${mensaje.includes('Error') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
              {mensaje}
            </div>
          )}
        </motion.div>

        {/* Lista de Clases */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-bg-elevated border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Clases Existentes</h2>
            
            {loading && clases.length === 0 && (
              <div className="flex items-center gap-3 text-text-muted">
                <div className="w-5 h-5 border-2 border-text-muted border-t-accent rounded-full animate-spin"></div>
                Cargando lista...
              </div>
            )}
            
            <div className="space-y-4">
              {clases.map((clase) => (
                <div
                  key={clase._id}
                  className="bg-bg-primary border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-white/20 transition-colors"
                >
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{clase.titulo}</h3>
                    <p className="text-text-muted text-sm mb-2">{clase.descripcion}</p>
                    <span className="inline-block bg-white/5 text-xs text-text-muted px-2 py-1 rounded">
                      Vimeo ID: {clase.link_vimeo}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => handleEditar(clase)}
                      disabled={loading}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(clase._id)}
                      disabled={loading}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Borrar
                    </button>
                  </div>
                </div>
              ))}
              
              {!loading && clases.length === 0 && (
                <p className="text-text-muted text-center py-8">No hay clases registradas aún.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminDashboard;
