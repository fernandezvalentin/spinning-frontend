export const WHATSAPP_NUMERO = "5492342465540";
export const INSTAGRAM_URL = "https://www.instagram.com/sitiodeentrenamiento.mb/";

/** Mensajes precargados: así Marina sabe desde qué parte del sitio llega cada consulta. */
export const MENSAJES = {
  general: "¡Hola Marina! Vi tu página y quiero info sobre tus clases.",
  planFuncional: "¡Hola Marina! Quiero pedir mi plan de entrenamiento funcional.",
  plan: (nombre: string) => `¡Hola Marina! Me interesa el plan "${nombre}". ¿Me pasás más info?`,
} as const;

export function whatsappUrl(mensaje: string = MENSAJES.general): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
