import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'], // Tus idiomas
  defaultLocale: 'es',
  localePrefix: 'as-needed'  // 🔹 Importante: evita /es en la URL por defecto
});
