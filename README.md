# Plataforma de Entrenamiento Online - Marina Beccaglia 🚴‍♀️✨

Este proyecto es una plataforma completa de entrenamiento online diseñada para **Marina Beccaglia**, Instructora Certificada de Spinning®️ y Profesora Nacional de Educación Física. El sistema no solo funciona como una *landing page* profesional, sino que incluye un portal completo para alumnos con autenticación, panel de clases grabadas (Vimeo) y un dashboard administrativo.

## 🚀 Características Principales

- **Diseño Premium y Dinámico**: Interfaz moderna con estética de alto impacto, modo oscuro, efectos de *glassmorphism* y micro-animaciones fluidas con Framer Motion.
- **Responsive Design**: Completamente diseñado bajo un enfoque *Mobile-First*, optimizado para verse increíble en cualquier dispositivo.
- **Sistema de Autenticación**: Flujo completo de registro e inicio de sesión para alumnos, gestionado a través de contexto global (React Context).
- **Portal de Alumnos (Rutas Protegidas)**: Acceso restringido a clases on-demand exclusivas, con validación de estado de pago (suscripción activa).
- **Integración de Video**: Reproductor embebido fluido y responsivo para las clases de Vimeo.
- **Panel Administrativo (Dashboard)**: Herramienta interna para que el instructor pueda crear, editar y borrar nuevas clases de su catálogo.
- **Onboarding de Pagos**: Flujo de redirección automático tras un pago exitoso que verifica y habilita el acceso instantáneo.

## 🛠️ Tecnologías Utilizadas

- **React 19 & TypeScript**: Desarrollo robusto y tipado estricto para evitar errores en producción.
- **Vite**: Herramienta de construcción y empaquetado ultra rápida.
- **Tailwind CSS (v4)**: Motor principal de estilos utilitarios que reemplaza por completo los antiguos archivos CSS.
- **Framer Motion**: Librería para orquestar animaciones, transiciones de montaje y efectos de scroll.
- **React Router 7**: Gestión avanzada de navegación, incluyendo rutas protegidas y *nested routes*.
- **React Player**: Componente especializado para cargar y controlar los videos de las clases.

## 📦 Instalación y Desarrollo Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/fernandezvalentin/spinning-frontend.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura tus variables de entorno (si es necesario conectar al backend local):
   ```bash
   # Crea un archivo .env en la raíz si tu API lo requiere
   # VITE_API_URL=http://localhost:3000/api
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Para compilar para producción:
   ```bash
   npm run build
   ```

---
© 2025 Marina Beccaglia - Entrená inteligente, viví mejor.
