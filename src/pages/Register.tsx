import React, { useState, useContext, FormEvent } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // @ts-ignore
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(email, password);
      navigate("/");
    } catch (err: any) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients for visual appeal */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-warm/20 blur-3xl opacity-50 mix-blend-screen"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl opacity-50 mix-blend-screen"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-bg-elevated/80 backdrop-blur-xl rounded-3xl p-8 border border-border shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Crear Cuenta</h1>
          <p className="mt-2 text-text-muted text-sm">Sumate a la comunidad y empezá a entrenar hoy.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-bg-primary/50 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full bg-bg-primary/50 border border-border rounded-xl px-4 py-3 text-white placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-accent hover:bg-accent-strong focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-elevated focus:ring-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Creando...
              </span>
            ) : "REGISTRARSE"}
          </button>
        </form>

        {error && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 bg-red-500/10 border border-red-500/50 rounded-lg p-3">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </motion.div>
        )}

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm font-medium text-text-muted hover:text-white transition-colors">
            ¿Ya tenés cuenta? <span className="text-accent hover:text-accent-strong underline decoration-transparent hover:decoration-accent-strong transition-all">Iniciá sesión</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
