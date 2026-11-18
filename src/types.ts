export interface Usuario {
  _id?: string;
  email: string;
  isAdmin?: boolean;
  pago_activo?: boolean;
  token: string;
}

export interface Clase {
  _id: string;
  titulo: string;
  descripcion?: string;
  link_vimeo: string;
}

export type DatosClase = Omit<Clase, "_id">;
