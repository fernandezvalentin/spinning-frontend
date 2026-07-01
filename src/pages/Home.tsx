import React from "react";
import { motion } from "framer-motion";
import marinaProfile from "../assets/marina-profile.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HeroSection = () => (
  <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto" id="inicio">
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="text-center"
    >
      <span className="text-accent-warm font-semibold tracking-wider uppercase text-sm mb-4 block">Clases de Spinning Online</span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
        Entrená inteligente, viví mejor
      </h1>
      <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10">
        Planes diseñados para que logres tu mejor versión, adaptados a tu
        ritmo y objetivos reales.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#clases" className="bg-accent hover:bg-accent-strong text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-accent/30">
          Ver clases disponibles
        </a>
      </div>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
    >
      {[
        { num: "+120", label: "Clases on-demand" },
        { num: "45'", label: "Formato promedio por sesión" },
        { num: "3", label: "Niveles: base, ritmo y potencia" }
      ].map((metric, i) => (
        <motion.div key={i} variants={fadeIn} className="bg-bg-elevated/50 backdrop-blur-md border border-border p-6 rounded-2xl text-center">
          <span className="block text-4xl font-bold text-white mb-2">{metric.num}</span>
          <span className="text-sm text-text-muted">{metric.label}</span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const ClassesSection = () => (
  <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="clases">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
    >
      <div>
        <span className="text-accent-warm font-semibold tracking-wider uppercase text-sm mb-2 block">Clases de Spinning</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sesiones niveladas</h2>
        <p className="text-text-muted text-lg max-w-xl">
          Playlists, coaching claro y bloques progresivos de trabajo.
        </p>
      </div>
      <a className="text-white border border-border hover:bg-white/5 px-6 py-2 rounded-full font-medium transition-colors" href="#funcional">
        Ver entrenamiento funcional
      </a>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {[
        { tag: "On-demand", title: "Rutas de alta energía", desc: "Interválicos con sprints, escaladas y cadencias guiadas para elevar pulsaciones.", list: ["45' con warm-up y cool-down", "Coach en cámara y métricas sugeridas", "Playlist cuidada con subidas y drops"] },
        { tag: "Series", title: "Programas semanales", desc: "Bloques de 4 a 6 clases para mejorar potencia, cadencia o control de respiración.", list: ["3 niveles: base, ritmo y potencia", "Recomendaciones de carga por día", "Seguimiento rápido con checklists"] },
        { tag: "Live & Replay", title: "Clases en vivo grabadas", desc: "Vive el ambiente de sala con repeticiones disponibles para que entrenes a tu hora.", list: ["Sesiones temáticas cada semana", "Chat y comunidad durante el vivo", "Replay en HD 24/7"] }
      ].map((card, i) => (
        <motion.div key={i} variants={fadeIn} className="bg-card hover:bg-bg-elevated transition-colors border border-border p-8 rounded-2xl">
          <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full mb-6">{card.tag}</span>
          <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
          <p className="text-text-muted mb-6">{card.desc}</p>
          <ul className="space-y-3">
            {card.list.map((item, j) => (
              <li key={j} className="flex items-start text-sm text-text-muted">
                <svg className="w-5 h-5 text-accent-warm mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const FunctionalTrainingSection = () => (
  <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="funcional">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="mb-12"
    >
      <span className="text-accent-warm font-semibold tracking-wider uppercase text-sm mb-2 block">Entrenamiento funcional</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plan a medida para tus objetivos</h2>
      <p className="text-text-muted text-lg max-w-2xl">
        Cuéntame tu nivel, disponibilidad y equipo. Recibirás rutinas
        específicas, progresiones sugeridas y feedback directo.
      </p>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {[
        { tag: "Bienestar", title: "Movilidad + Salud", desc: "Ideal para empezar desde cero o retomar el movimiento. Foco en corregir la postura, ganar flexibilidad y técnica base.", list: ["3 clases/semana: Rutinas guiadas paso a paso.", "Foco Postural: Ejercicios para aliviar tensiones.", "Guía de Inicio: Tutoriales de técnica básica."] },
        { tag: "Rendimiento", title: "Fuerza + Definición", desc: "Para quienes buscan resultados visibles y mayor intensidad. Combinamos fuerza funcional con bloques metabólicos (HIIT).", list: ["4-5 clases/semana: Planificación de alta quema.", "Progresión de Cargas: Entrená con propósito.", "Desafíos Mensuales: Test de nivel para medir cambios."] },
        { tag: "Transformación", title: "1:1 Plan Personal", desc: "Entrenamiento diseñado exclusivamente para vos. Ajustamos cada ejercicio a tus lesiones, materiales y tiempos disponibles.", list: ["Seguimiento por WhatsApp: Consultas y dudas diarias.", "Corrección en Video: Feedback directo de tu técnica.", "Ajuste Semanal: Adaptamos el plan según tu progreso."] }
      ].map((card, i) => (
        <motion.div key={i} variants={fadeIn} className="bg-bg-elevated/40 border border-border p-8 rounded-2xl hover:border-white/20 transition-all">
          <span className="inline-block bg-accent-warm/20 text-accent-warm text-xs font-bold px-3 py-1 rounded-full mb-6">{card.tag}</span>
          <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
          <p className="text-text-muted mb-6">{card.desc}</p>
          <ul className="space-y-3">
            {card.list.map((item, j) => (
              <li key={j} className="flex items-start text-sm text-text-muted">
                <svg className="w-5 h-5 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const WhoAmISection = () => (
  <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="sobre-mi">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="mb-12"
    >
      <span className="text-accent-warm font-semibold tracking-wider uppercase text-sm mb-2 block">Sobre mí</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tu coach en casa</h2>
      <p className="text-text-muted text-lg max-w-2xl">
        Instructora con años de experiencia en sala y cientos de clases
        online impartidas. Me enfoco en que cada sesión tenga propósito.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl p-8 lg:p-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >
        <img
          src={marinaProfile}
          alt="Marina Beccaglia"
          className="w-full h-auto object-cover"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">¡Hola! Soy Marina Beccaglia.</h3>
        <p className="text-text-muted mb-8 text-lg">
          Creo sesiones que combinan música potente, bloques claros y
          progresión realista. Mi meta es que notes el avance semana a semana,
          cuidando técnica y disfrute.
        </p>
        <ul className="space-y-4">
          {[
            "Profesora Nacional de Educación Física",
            "Instructora certificada de Spinning®️",
            "Entrenadora en ciclismo de ruta y MTB",
            "Entrenamiento funcional",
            "Instructora de gimnasia"
          ].map((item, i) => (
            <li key={i} className="flex items-center text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                <svg className="w-4 h-4 text-accent-warm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-accent-strong to-accent-warm rounded-3xl p-10 md:p-14 text-center shadow-2xl shadow-accent/20"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Buscás un cambio real?</h3>
      <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
        Recibí un plan de entrenamiento funcional diseñado para vos, con
        rutinas guiadas y seguimiento de tu progreso.
      </p>
      <a 
        href="https://wa.me/5492342465540" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-white text-accent-strong hover:bg-bg-elevated hover:text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg"
      >
        Pedir mi plan funcional
      </a>
    </motion.div>
  </section>
);

const ContactSection = () => (
  <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto" id="contacto">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="text-center mb-16"
    >
      <span className="text-accent-warm font-semibold tracking-wider uppercase text-sm mb-2 block">Contacto</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Hablemos y empecemos a entrenar!</h2>
      <p className="text-text-muted text-lg max-w-2xl mx-auto">
        Sígueme en redes sociales o escríbeme directamente para consultas sobre entrenamientos personalizados y clases.
      </p>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
    >
      <a href="https://www.instagram.com/sitiodeentrenamiento.mb/?hl=es" target="_blank" rel="noopener noreferrer" className="bg-bg-elevated border border-border hover:border-accent-warm/50 hover:bg-card p-8 rounded-2xl text-center transition-all group">
        <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Instagram</h4>
        <p className="text-text-muted text-sm">Mira mis rutinas y tips diarios</p>
      </a>
      
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-bg-elevated border border-border hover:border-accent-warm/50 hover:bg-card p-8 rounded-2xl text-center transition-all group">
        <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Facebook</h4>
        <p className="text-text-muted text-sm">Únete a nuestra comunidad</p>
      </a>

      <a href="https://wa.me/5492342465540" target="_blank" rel="noopener noreferrer" className="bg-bg-elevated border border-border hover:border-accent-warm/50 hover:bg-card p-8 rounded-2xl text-center transition-all group">
        <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white group-hover:text-green-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 001.592 5.96L0 24l6.12-1.605a11.782 11.782 0 005.925 1.587h.005c6.634 0 12.032-5.396 12.035-12.03a11.782 11.782 0 00-3.417-8.497z"></path>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
        <p className="text-text-muted text-sm">Consulta directa y rápida</p>
      </a>
    </motion.div>
  </section>
);

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <ClassesSection />
      <FunctionalTrainingSection />
      <WhoAmISection />
      <ContactSection />
      <CTASection />
      
      <div className="py-12 text-center text-text-muted border-t border-border mt-10">
        <p className="font-semibold text-white/80 mb-2">© 2025 Marina Beccaglia</p>
        <p className="text-sm">Entrená desde casa con música y coaching real.</p>
      </div>
    </div>
  );
}

export default Home;
