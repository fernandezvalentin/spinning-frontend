import { motion } from "framer-motion";
import marinaProfile from "../assets/marina-profile.jpg";
import { INSTAGRAM_URL, MENSAJES, whatsappUrl } from "../config/contacto";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

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
        { tag: "Live & Replay", title: "Clases en vivo grabadas", desc: "Viví el ambiente de sala con repeticiones disponibles para que entrenes a tu hora.", list: ["Sesiones temáticas cada semana", "Chat y comunidad durante el vivo", "Replay en HD 24/7"] }
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
        Contame tu nivel, disponibilidad y equipo. Recibirás rutinas
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
        <motion.div key={i} variants={fadeIn} className="flex flex-col bg-bg-elevated/40 border border-border p-8 rounded-2xl hover:border-white/20 transition-all">
          <span className="self-start inline-block bg-accent-warm/20 text-accent-warm text-xs font-bold px-3 py-1 rounded-full mb-6">{card.tag}</span>
          <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
          <p className="text-text-muted mb-6">{card.desc}</p>
          <ul className="space-y-3 mb-8">
            {card.list.map((item, j) => (
              <li key={j} className="flex items-start text-sm text-text-muted">
                <svg className="w-5 h-5 text-accent mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(MENSAJES.plan(card.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 border border-accent-warm/40 text-accent-warm hover:bg-accent-warm hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Consultar por este plan
          </a>
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
          alt="Marina Beccaglia, instructora de spinning"
          width={1024}
          height={490}
          loading="lazy"
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
        href={whatsappUrl(MENSAJES.planFuncional)} 
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
        Seguime en redes o escribime directamente para consultas sobre entrenamientos personalizados y clases.
      </p>
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
    >
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-bg-elevated border border-border hover:border-accent-warm/50 hover:bg-card p-8 rounded-2xl text-center transition-all group">
        <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Instagram</h4>
        <p className="text-text-muted text-sm">Mirá mis rutinas y tips diarios</p>
      </a>
      

      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="bg-bg-elevated border border-border hover:border-accent-warm/50 hover:bg-card p-8 rounded-2xl text-center transition-all group">
        <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <WhatsAppIcon className="w-8 h-8 text-white group-hover:text-green-500 transition-colors" />
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
        <p className="font-semibold text-white/80 mb-2">© {new Date().getFullYear()} Marina Beccaglia</p>
        <p className="text-sm">Entrená desde casa con música y coaching real.</p>
      </div>
    </div>
  );
}

export default Home;
