import axios from "axios";

// 1. Definimos la URL base de tu backend
const API_URL = "http://localhost:5001/api";

// 2. Creamos una "instancia" de axios
const api = axios.create({
  baseURL: API_URL,
});

// 3. Función de Login
export const loginUsuario = async (email, password) => {
  try {
    const response = await api.post("/usuarios/login", { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(
        "No se pudo conectar al servidor. ¿El backend está corriendo?"
      );
    }
  }
};

// 4. Función de Registro
export const registerUsuario = async (email, password) => {
  try {
    const response = await api.post("/usuarios/registrar", { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// 5. Función para crear el link de pago
export const crearLinkDePago = async (token) => {
  try {
    const response = await api.post(
      "/pagos/crear-checkout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// 5.5. Función para obtener el perfil del usuario
export const getPerfilUsuario = async (token) => {
  try {
    const response = await api.get("/usuarios/perfil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// 6. Función para OBTENER las clases
export const getClases = async (token) => {
  try {
    const response = await api.get("/clases", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// 7. Función para AÑADIR una clase nueva
export const addClase = async (token, datosDeLaClase) => {
  try {
    const response = await api.post("/clases", datosDeLaClase, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// 8. Función para BORRAR una clase
export const deleteClase = async (token, idDeLaClase) => {
  try {
    const response = await api.delete(
      `/clases/${idDeLaClase}`, // Llama a DELETE /api/clases/:id
      {
        headers: {
          Authorization: `Bearer ${token}`, // Necesita el token de admin
        },
      }
    );
    return response.data; // Devuelve el mensaje de éxito
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// 9. Función para ACTUALIZAR una clase
export const updateClase = async (token, idDeLaClase, datosNuevos) => {
  try {
    const response = await api.put(
      `/clases/${idDeLaClase}`, // Llama a PUT /api/clases/:id
      datosNuevos, // El "body" con { titulo, descripcion, link_vimeo }
      {
        headers: {
          Authorization: `Bearer ${token}`, // Necesita el token de admin
        },
      }
    );
    return response.data; // Devuelve la clase actualizada
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error("No se pudo conectar al servidor.");
    }
  }
};

// Exportamos la 'api' (el teléfono) por si la necesitamos en otro lado
export default api;
