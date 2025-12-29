// src/pages/AdminDashboard.jsx
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
// Importamos TODAS las funciones de la API
import { addClase, getClases, deleteClase, updateClase } from "../services/api";

function AdminDashboard() {
  const { user } = useContext(AuthContext);

  // --- Estados para el formulario ---
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [linkVimeo, setLinkVimeo] = useState("");

  // --- Estados para la lista ---
  const [clases, setClases] = useState([]);

  // --- Estados para mensajes y carga ---
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // --- [NUEVO] Estados para el "Modo de Edición" ---
  const [editandoId, setEditandoId] = useState(null); // Guarda el ID de la clase a editar

  // --- Cargar Clases (useEffect) ---
  // (Esta parte es la misma que antes)
  useEffect(() => {
    const cargarClases = async () => {
      if (!user.token) return;
      setLoading(true);
      try {
        const data = await getClases(user.token);
        setClases(data);
      } catch (error) {
        setMensaje(`Error al cargar clases: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    cargarClases();
  }, [user.token]); // Se ejecuta si el 'user' cambia

  // --- Función para CREAR o EDITAR (Formulario) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    const datosDeLaClase = { titulo, descripcion, link_vimeo: linkVimeo };

    try {
      if (editandoId) {
        // --- LÓGICA DE ACTUALIZAR (PUT) ---
        const claseActualizada = await updateClase(
          user.token,
          editandoId,
          datosDeLaClase
        );
        setMensaje(`¡Clase "${claseActualizada.titulo}" actualizada!`);
        // Actualizamos la lista en el frontend
        setClases(
          clases.map((c) => (c._id === editandoId ? claseActualizada : c))
        );
      } else {
        // --- LÓGICA DE AÑADIR (POST) ---
        const nuevaClase = await addClase(user.token, datosDeLaClase);
        setMensaje(`¡Clase "${nuevaClase.titulo}" creada!`);
        // Añadimos la nueva clase a la lista del frontend
        setClases([...clases, nuevaClase]);
      }

      // Limpiamos el formulario y salimos del modo edición
      limpiarFormulario();
    } catch (error) {
      setMensaje(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // --- Función para BORRAR Clase ---
  // (Esta parte es la misma que antes)
  const handleDelete = async (idDeLaClase) => {
    if (!window.confirm("¿Estás seguro de que querés borrar esta clase?")) {
      return;
    }
    setLoading(true);
    setMensaje("");
    try {
      await deleteClase(user.token, idDeLaClase);
      setMensaje("¡Clase borrada con éxito!");
      setClases((clasesActuales) =>
        clasesActuales.filter((clase) => clase._id !== idDeLaClase)
      );
    } catch (error) {
      setMensaje(`Error al borrar: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // --- [NUEVA] Función para "Entrar" en Modo Edición ---
  const handleEditar = (clase) => {
    setEditandoId(clase._id); // Guardamos el ID que estamos editando
    // Llenamos el formulario con los datos de esa clase
    setTitulo(clase.titulo);
    setDescripcion(clase.descripcion);
    setLinkVimeo(clase.link_vimeo);
    // Llevamos al usuario arriba, al formulario
    window.scrollTo(0, 0);
  };

  // --- [NUEVA] Función para Limpiar/Cancelar la Edición ---
  const limpiarFormulario = () => {
    setEditandoId(null);
    setTitulo("");
    setDescripcion("");
    setLinkVimeo("");
    setMensaje("");
  };

  // --- EL RENDER (JSX) ---
  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido, Admin {user.email}.</p>

      <hr style={{ margin: "20px 0" }} />

      {/* El título del formulario ahora es dinámico:
        Si "editandoId" existe, muestra "Editando", si no, "Añadir".
      */}
      <h2>{editandoId ? "Editando Clase" : "Añadir Nueva Clase"}</h2>

      <form onSubmit={handleSubmit}>
        {/* ... (el formulario es el mismo) ... */}
        <div>
          <label>Título de la Clase:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <label>Link o ID de Vimeo:</label>
          <input
            type="text"
            value={linkVimeo}
            onChange={(e) => setLinkVimeo(e.target.value)}
            required
          />
        </div>

        {/* Los botones ahora son dinámicos */}
        <button type="submit" disabled={loading}>
          {loading
            ? "Guardando..."
            : editandoId
            ? "Actualizar Clase"
            : "Añadir Clase"}
        </button>

        {/* Si estamos editando, mostramos un botón de "Cancelar" */}
        {editandoId && (
          <button
            type="button"
            onClick={limpiarFormulario}
            disabled={loading}
            style={{ marginLeft: "10px" }}
          >
            Cancelar Edición
          </button>
        )}
      </form>

      {mensaje && <p>{mensaje}</p>}

      <hr style={{ margin: "20px 0" }} />

      <h2>Clases Existentes</h2>
      {loading && clases.length === 0 && <p>Cargando lista...</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {clases.map((clase) => (
          <li
            key={clase._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{clase.titulo}</h3>
            <p>{clase.descripcion}</p>
            <small>Vimeo ID: {clase.link_vimeo}</small>
            <br />
            {/* ¡Este botón ahora funciona! */}
            <button
              style={{ background: "orange" }}
              onClick={() => handleEditar(clase)} // Llama a la función de editar
              disabled={loading}
            >
              Editar
            </button>
            <button
              style={{ background: "red", color: "white", marginLeft: "10px" }}
              onClick={() => handleDelete(clase._id)}
              disabled={loading}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
