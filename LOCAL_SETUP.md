# Panadería Holiday — ejecución local

1. Instala Bun y ejecuta `bun install` en la carpeta del proyecto.
2. Ejecuta `bun run dev` y abre la dirección indicada en la terminal.
3. Para generar la versión de producción: `bun run build`.

## Contenido y contacto
La información verificable, el número de WhatsApp, las imágenes, los textos y las reseñas están separados en `src/data/holiday.js`. La dirección exacta, los horarios y las redes sociales están pendientes de confirmación. No se han inventado reseñas ni promociones.

El logo es el proporcionado por el negocio. Las otras imágenes son ilustrativas y temporales, no fotografías de Holiday ni de su menú. Sustitúyelas por fotos originales cuando estén disponibles.

## Integración futura con PHP + MySQL
El sitio funciona sin conexión a una base de datos. El servicio `src/services/api.js` prepara la consulta a `testimonials.php`, pero no hace llamadas al cargar la página ni simula resultados. Configura `VITE_API_URL` con la dirección pública de tus endpoints PHP de XAMPP cuando estén disponibles. Los endpoints deben responder con JSON y configurar CORS si el origen es distinto. Las credenciales de MySQL permanecen exclusivamente en PHP.

La plataforma conserva TanStack Start y su configuración de navegación; los componentes del sitio, su contenido y el servicio HTTP están escritos en JavaScript/JSX. No se ha añadido un backend, panel administrativo, autenticación ni operaciones de guardado.
