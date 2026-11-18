import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { whatsappUrl } from "../config/contacto";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Botón fijo abajo a la derecha para escribir por WhatsApp desde cualquier sección. */
function WhatsAppFlotante() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/admin")) return null;

  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribile a Marina por WhatsApp"
      title="Escribime por WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-40 right-4 bottom-4 md:right-6 md:bottom-6 mb-[env(safe-area-inset-bottom)] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping motion-reduce:hidden" aria-hidden="true" />
      <WhatsAppIcon className="relative w-7 h-7" />
    </motion.a>
  );
}

export default WhatsAppFlotante;
