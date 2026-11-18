/**
 * Acepta tanto un ID ("123456789") como un link completo de Vimeo
 * ("https://vimeo.com/123456789") y devuelve siempre una URL reproducible.
 */
export function vimeoUrl(linkOId: string): string {
  const valor = linkOId.trim();
  return /^https?:\/\//i.test(valor) ? valor : `https://vimeo.com/${valor}`;
}
