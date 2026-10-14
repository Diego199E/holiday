import { createFileRoute } from '@tanstack/react-router';
import HolidayWebsite from '@/components/HolidayWebsite';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Panadería Holiday | Panadería, Pastelería y Café Gourmet' },
      { name: 'description', content: 'Descubre Panadería Holiday en Suba, Bogotá. Un espacio para disfrutar de panadería, pastelería, café gourmet y almuerzos.' },
      { property: 'og:title', content: 'Panadería Holiday | El gusto de compartir' },
      { property: 'og:description', content: 'Panadería, pastelería y café gourmet en Suba, Bogotá. Descubre Holiday y contáctanos por WhatsApp.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: HolidayWebsite,
});
