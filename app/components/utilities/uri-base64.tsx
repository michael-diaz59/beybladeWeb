export default function UriBase(src?: string) {
  if (!src) return "none";

  // Si ya es un data: URI o base64, asegúrate de envolverlo en comillas
  if (src.startsWith("data:")) {
    return `url("${src}")`;
  }

  // Para rutas normales (ej: /assets/fondo1-xxxxx.svg)
  return `url(${src})`;
}