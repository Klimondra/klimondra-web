// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'motion-v/nuxt',
    ],

    css: [
        '~/assets/css/tailwind.css',
    ],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'cs',
                class: 'dark',
            },
        },
    },

    fonts: {
        defaults: {
            weights: ['100 900'],
        },
        families: [
            {name: "Geologica", provider: "google"}
        ]
    },

    i18n: {
        defaultLocale: 'cs',
        restructureDir: "./app/i18n",
        locales: [
            {code: "cs", name: "Čeština", file: "cs.json"},
            {code: "en", name: "English", file: "en.json"},
        ],
        strategy: "no_prefix"
    }
})