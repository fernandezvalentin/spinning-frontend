import React from "react";
import "./Home.css";
import marinaProfile from "../assets/marina-profile.jpg";

const HeroSection = () => (
  <section className="hero" id="inicio">
    <div className="hero-inner">
      <div>
        <span className="eyebrow">Clases de Spinning Online</span>
        <h1 className="hero-title">
          Entrená inteligente, viví mejor
        </h1>
        <p className="hero-subtitle">
          Planes diseñados para que logres tu mejor versión, adaptados a tu
          ritmo y objetivos reales.
        </p>
        <div className="hero-actions">
          <a href="#clases" className="btn-primary">
            Ver clases disponibles
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-metric">
          <span className="metric-number">+120</span>
          <span className="metric-label">Clases on-demand</span>
        </div>
        <div className="hero-metric">
          <span className="metric-number">45'</span>
          <span className="metric-label">Formato promedio por sesión</span>
        </div>
        <div className="hero-metric">
          <span className="metric-number">3</span>
          <span className="metric-label">Niveles: base, ritmo y potencia</span>
        </div>
      </div>
    </div>
  </section>
);

const ClassesSection = () => (
  <section className="section" id="clases">
    <div className="section-inner">
      <div className="section-header">
        <div>
          <span className="eyebrow">Clases de Spinning</span>
          <h2 className="section-title">Sesiones para cada estado de ánimo</h2>
          <p className="section-subtitle">
            Playlists, coaching claro y bloques progresivos de trabajo.
          </p>
        </div>
        <a className="btn-secondary" href="#funcional">
          Ver entrenamiento funcional
        </a>
      </div>

      <div className="cards-grid">
        <div className="card">
          <span className="chip">On-demand</span>
          <h4>Rutas de alta energía</h4>
          <p>
            Interválicos con sprints, escaladas y cadencias guiadas para elevar
            pulsaciones.
          </p>
          <ul className="list">
            <li>45' con warm-up y cool-down</li>
            <li>Coach en cámara y métricas sugeridas</li>
            <li>Playlist cuidada con subidas y drops</li>
          </ul>
        </div>
        <div className="card">
          <span className="chip">Series</span>
          <h4>Programas semanales</h4>
          <p>
            Bloques de 4 a 6 clases para mejorar potencia, cadencia o control
            de respiración.
          </p>
          <ul className="list">
            <li>3 niveles: base, ritmo y potencia</li>
            <li>Recomendaciones de carga por día</li>
            <li>Seguimiento rápido con checklists</li>
          </ul>
        </div>
        <div className="card">
          <span className="chip">Live & Replay</span>
          <h4>Clases en vivo grabadas</h4>
          <p>
            Vive el ambiente de sala con repeticiones disponibles para que
            entrenes a tu hora.
          </p>
          <ul className="list">
            <li>Sesiones temáticas cada semana</li>
            <li>Chat y comunidad durante el vivo</li>
            <li>Replay en HD 24/7</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FunctionalTrainingSection = () => (
  <section className="section" id="funcional">
    <div className="section-inner">
      <div className="section-header">
        <div>
          <span className="eyebrow">Entrenamiento funcional</span>
          <h2 className="section-title">Plan a medida para tus objetivos</h2>
          <p className="section-subtitle">
            Cuéntame tu nivel, disponibilidad y equipo. Recibirás rutinas
            específicas, progresiones sugeridas y feedback directo.
          </p>
        </div>
      </div>

      <div className="cards-grid">
        <div className="card">
          <span className="chip">Bienestar</span>
          <h4>Movilidad + Salud</h4>
          <p>
            Ideal para empezar desde cero o retomar el movimiento. Foco en corregir la postura, ganar flexibilidad y técnica base.
          </p>
          <ul className="list">
            <li>3 clases/semana: Rutinas guiadas paso a paso.</li>
            <li>Foco Postural: Ejercicios para aliviar tensiones.</li>
            <li>Guía de Inicio: Tutoriales de técnica básica.</li>
          </ul>
        </div>
        <div className="card">
          <span className="chip">Rendimiento</span>
          <h4>Fuerza + Definición</h4>
          <p>
            Para quienes buscan resultados visibles y mayor intensidad. Combinamos fuerza funcional con bloques metabólicos (HIIT).
          </p>
          <ul className="list">
            <li>4-5 clases/semana: Planificación de alta quema.</li>
            <li>Progresión de Cargas: Entrená con propósito.</li>
            <li>Desafíos Mensuales: Test de nivel para medir cambios.</li>
          </ul>
        </div>
        <div className="card">
          <span className="chip">Transformación</span>
          <h4>1:1 Plan Personal</h4>
          <p>
            Entrenamiento diseñado exclusivamente para vos. Ajustamos cada ejercicio a tus lesiones, materiales y tiempos disponibles.
          </p>
          <ul className="list">
            <li>Seguimiento por WhatsApp: Consultas y dudas diarias.</li>
            <li>Corrección en Video: Feedback directo de tu técnica.</li>
            <li>Ajuste Semanal: Adaptamos el plan según tu progreso.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const WhoAmISection = () => (
  <section className="section" id="sobre-mi">
    <div className="section-inner">
      <div className="section-header">
        <div>
          <span className="eyebrow">Sobre mí</span>
          <h2 className="section-title">Tu coach en casa</h2>
          <p className="section-subtitle">
            Instructora con años de experiencia en sala y cientos de clases
            online impartidas. Me enfoco en que cada sesión tenga propósito.
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="profile-photo">
          <img
            src={marinaProfile}
            alt="Marina Beccaglia"
          />
        </div>
        <div className="profile-content">
          <h3>¡Hola! Soy Marina Beccaglia.</h3>
          <p>
            Creo sesiones que combinan música potente, bloques claros y
            progresión realista. Mi meta es que notes el avance semana a semana,
            cuidando técnica y disfrute.
          </p>
          <ul className="list">
            <li>Profesora Nacional de Educación Física</li>
            <li>Instructora certificada de Spinning®️</li>
            <li>Entrenadora en ciclismo de ruta y MTB</li>
            <li>Entrenamiento funcional</li>
            <li>Instructora de gimnasia</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section">
    <div className="section-inner">
      <div className="cta-band">
        <div>
          <h3 style={{ margin: "0 0 8px" }}>¿Buscás un cambio real?</h3>
          <p className="cta-text">
            Recibí un plan de entrenamiento funcional diseñado para vos, con
            rutinas guiadas y seguimiento de tu progreso.
          </p>
        </div>
        <div className="cta-actions">
          <a 
            className="btn-primary" 
            href="https://wa.me/5492342465540" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Pedir mi plan funcional
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="section" id="contacto">
    <div className="section-inner">
      <div className="section-header" style={{ justifyContent: "center", textAlign: "center", marginBottom: "48px" }}>
        <div>
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title">¡Hablemos y empecemos a entrenar!</h2>
          <p className="section-subtitle" style={{ margin: "16px auto" }}>
            Sígueme en redes sociales o escríbeme directamente para consultas sobre entrenamientos personalizados y clases.
          </p>
        </div>
      </div>

      <div className="social-grid">
        <a href="https://www.instagram.com/sitiodeentrenamiento.mb/?hl=es" target="_blank" rel="noopener noreferrer" className="social-card instagram">
          <div className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
            </svg>
          </div>
          <h4>Instagram</h4>
          <p>Mira mis rutinas y tips diarios</p>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-card facebook">
          <div className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
          <h4>Facebook</h4>
          <p>Únete a nuestra comunidad</p>
        </a>
        <a href="https://wa.me/5492342465540" target="_blank" rel="noopener noreferrer" className="social-card whatsapp">
          <div className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 001.592 5.96L0 24l6.12-1.605a11.782 11.782 0 005.925 1.587h.005c6.634 0 12.032-5.396 12.035-12.03a11.782 11.782 0 00-3.417-8.497z"></path>
            </svg>
          </div>
          <h4>WhatsApp</h4>
          <p>Consulta directa y rápida</p>
        </a>
      </div>
    </div>
  </section>
);

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <ClassesSection />
      <FunctionalTrainingSection />
      <WhoAmISection />
      <ContactSection />
      <CTASection />
      <div className="footer">
        <p>© 2025 Marina Beccaglia</p>
        <p>Entrena desde casa con música y coaching real.</p>
      </div>
    </div>
  );
}

export default Home;
