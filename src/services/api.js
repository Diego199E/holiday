// Future PHP endpoints must return real JSON content. No calls are made on initial render.
const API_BASE = import.meta.env.VITE_API_URL || '';
export async function fetchTestimonials({ signal } = {}) {
  if (!API_BASE) throw new Error('El servicio de reseñas aún no está configurado.');
  const response = await fetch(`${API_BASE.replace(/\/$/, '')}/testimonials.php`, { signal });
  if (!response.ok) throw new Error('No fue posible consultar las reseñas.');
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error('El formato de las reseñas no es válido.');
  return data;
}