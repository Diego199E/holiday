import hero from '@/assets/bakery-hero.jpg';
import bread from '@/assets/bread-story.jpg';
import coffee from '@/assets/coffee-moment.jpg';
import lunch from '@/assets/lunch-moment.jpg';

export const business = {
  name: 'Panadería Holiday',
  whatsapp: '573042789819',
  displayPhone: '+57 304 278 9819',
  area: 'Suba, Bogotá',
  address: null,
  hours: null,
  mapUrl: null,
  socialLinks: [],
};
export const messages = {
  general: 'Hola, Panadería Holiday. Me gustaría obtener más información sobre sus servicios.',
  delivery: 'Hola, Panadería Holiday. Quisiera consultar si tienen servicio de domicilios para mi ubicación.',
  location: 'Hola, Panadería Holiday. ¿Me pueden compartir su ubicación exacta y sus horarios de atención?',
};
export function whatsappUrl(context = 'general') {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(messages[context] || messages.general)}`;
}
export const navigation = [
  ['Inicio', 'inicio'], ['Nosotros', 'nosotros'], ['Nuestra esencia', 'esencia'],
  ['Galería', 'galeria'], ['Experiencias', 'experiencias'], ['Contacto', 'contacto'],
];
export const images = { hero, bread, coffee, lunch };
export const experiences = [
  { number: '01', title: 'Panadería y pastelería', text: 'El placer de una pausa dulce y ese aroma a pan que invita a quedarse.', image: bread, alt: 'Imagen de referencia de panes y croissants sobre una mesa' },
  { number: '02', title: 'Café y buenos momentos', text: 'Una taza de café, una buena conversación y tiempo para disfrutar.', image: coffee, alt: 'Imagen de referencia de café y una porción de torta' },
  { number: '03', title: 'Almuerzos y encuentros', text: 'Un momento para sentarse a la mesa, compartir y hacer una pausa en el día.', image: lunch, alt: 'Imagen de referencia de un almuerzo; no representa el menú actual' },
];
export const gallery = [
  { src: hero, title: 'Una pausa que se disfruta', alt: 'Escena ilustrativa de café y croissant en una panadería' },
  { src: bread, title: 'El encanto del pan', alt: 'Fotografía ilustrativa de panes y croissants' },
  { src: coffee, title: 'Pequeños momentos dulces', alt: 'Fotografía ilustrativa de café y torta con frutos rojos' },
  { src: lunch, title: 'Alrededor de la mesa', alt: 'Fotografía ilustrativa de un plato de almuerzo' },
];
export const testimonials = [];