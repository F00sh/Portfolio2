// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // optional: locks Nuxt (and any hosting presets) to a snapshot of behaviour
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  // your global stylesheet (holds the @tailwind directives and plugins)
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      // ✅  ONLY the Tailwind Vite plugin goes here
      tailwindcss(),
    ],
  },
})
