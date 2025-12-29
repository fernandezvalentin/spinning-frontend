import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { crearLinkDePago } from "../services/api";
import "./Home.css";

const HeroSection = () => (
  <section className="hero" id="inicio">
    <div className="hero-inner">
      <div>
        <span className="eyebrow">Clases de Spinning Online</span>
        <h1 className="hero-title">
          Energía Bestcycling con enfoque en tu progreso
        </h1>
        <p className="hero-subtitle">
          Entrena en casa con sesiones diseñadas para sentir la potencia de una
          sala de ciclo indoor: música motivante, coaching real y métricas que
          siguen tu ritmo.
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn-primary">
            Empezar ahora
          </Link>
          <a href="#clases" className="btn-secondary">
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
            Disfruta una biblioteca curada con la vibra Bestcycling: playlists
            épicas, coaching claro y bloques progresivos de trabajo.
          </p>
        </div>
        <a className="btn-secondary" href="#personalizadas">
          Ver clases personalizadas
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

const CustomClassesSection = () => (
  <section className="section" id="personalizadas">
    <div className="section-inner">
      <div className="section-header">
        <div>
          <span className="eyebrow">Clases personalizadas</span>
          <h2 className="section-title">Plan a medida para tus objetivos</h2>
          <p className="section-subtitle">
            Cuéntame tu nivel, disponibilidad y equipo. Recibirás clases
            curadas, tempos sugeridos y feedback directo.
          </p>
        </div>
        <Link to="/register" className="btn-primary">
          Reservar mi plan
        </Link>
      </div>

      <div className="cards-grid">
        <div className="card">
          <span className="chip">Starter</span>
          <h4>Base + Técnica</h4>
          <p>
            Ideal si vuelves a pedalear. Ritmos controlados y foco en cadencia y
            postura.
          </p>
          <ul className="list">
            <li>3 clases/semana</li>
            <li>Inicios suaves + progresión</li>
            <li>Estiramientos guiados</li>
          </ul>
        </div>
        <div className="card">
          <span className="chip">Performance</span>
          <h4>Ritmo + Potencia</h4>
          <p>
            Para quienes buscan intensidad: intervalos, subidas largas y trabajo
            de umbral.
          </p>
          <ul className="list">
            <li>4-5 clases/semana</li>
            <li>Test de referencia mensual</li>
            <li>Bloques HIIT y tempo</li>
          </ul>
        </div>
        <div className="card">
          <span className="chip">Personal Coach</span>
          <h4>1:1 con feedback</h4>
          <p>
            Agenda una sesión individual. Ajustamos resistencias, técnica y
            música a tu gusto.
          </p>
          <ul className="list">
            <li>Sesiones por videollamada</li>
            <li>Grabación y notas de mejora</li>
            <li>Playlist personalizada</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const WhoAmISection = () => (
  <section className="section" id="quien-soy">
    <div className="section-inner">
      <div className="section-header">
        <div>
          <span className="eyebrow">Quién soy</span>
          <h2 className="section-title">Tu coach en la bici</h2>
          <p className="section-subtitle">
            Instructor de indoor cycling con años de sala y cientos de clases
            online impartidas. Me enfoco en que cada sesión tenga propósito.
          </p>
        </div>
      </div>

      <div className="profile">
        <div className="profile-photo">
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop"
            alt="Instructor en bici"
          />
        </div>
        <div className="profile-content">
          <h3>¡Hola! Soy Marina</h3>
          <p>
            Creo sesiones que combinan música potente, bloques claros y
            progresión realista. Mi meta es que notes el avance semana a semana,
            cuidando técnica y disfrute.
          </p>
          <ul className="list">
            <li>Certificado en ciclismo indoor y entrenamiento funcional</li>
            <li>Especialista en planes progresivos de 4-8 semanas</li>
            <li>Experiencia liderando clases en vivo y formatos grabados</li>
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
          <h3 style={{ margin: "0 0 8px" }}>¿Listo para pedalear?</h3>
          <p className="cta-text">
            Únete hoy y recibe un plan de inicio con tres clases guiadas y
            recomendaciones de resistencia para tu bici.
          </p>
        </div>
        <div className="cta-actions">
          <Link to="/register" className="btn-primary">
            Crear cuenta
          </Link>
          <a className="btn-secondary" href="#personalizadas">
            Pedir plan personalizado
          </a>
        </div>
      </div>
    </div>
  </section>
);

function Home() {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePagar = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await crearLinkDePago(user.token);
      window.location.href = data.url;
    } catch (error) {
      console.error("Error:", error);
      setError(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (!user) {
      return (
        <>
          <HeroSection />
          <ClassesSection />
          <CustomClassesSection />
          <WhoAmISection />
          <CTASection />
          <div className="footer">
            <p>© 2025 Spinning App. Inspirado en la energía Bestcycling.</p>
            <p>Entrena desde casa con música y coaching real.</p>
          </div>
        </>
      );
    }

    if (user.isAdmin) {
      return (
        <div className="info-card" style={{ marginTop: "80px" }}>
          <h2>👋 ¡Hola, Admin!</h2>
          <p>Tienes el control total de la plataforma.</p>
          <button
            className="btn-primary"
            onClick={() => navigate("/admin")}
            style={{ marginTop: "20px" }}
          >
            Ir al Panel de Admin
          </button>
        </div>
      );
    }

    if (user.pago_activo) {
      return (
        <div className="info-card" style={{ marginTop: "80px" }}>
          <h2>🎉 ¡Suscripción Activa!</h2>
          <p>Ya tienes acceso ilimitado a todas las clases.</p>
          <div style={{ marginTop: "30px" }}>
            <p>¿Listo para sudar?</p>
            <button className="btn-primary" onClick={() => navigate("/clases")}>
              Ir a Clases
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="info-card" style={{ marginTop: "80px" }}>
        <h2>¡Último paso! 🚴</h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          Tu cuenta está creada. Activa tu suscripción.
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          USD 10.00{" "}
          <span style={{ fontSize: "1rem", fontWeight: "normal" }}>/ mes</span>
        </p>

        <button
          onClick={handlePagar}
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "Procesando..." : "Pagar con Stripe"}
        </button>
        {error && <p className="error-msg">{error}</p>}
      </div>
    );
  };

  return <div className="home-container">{renderContent()}</div>;
}

export default Home;
