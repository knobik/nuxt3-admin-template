// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    ssr: false,
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    runtimeConfig: {
        platformProxyUrl: ''
    },
    app: {
        head: {
            title: 'nuxt3-admin-template',
            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/aura-light-green/theme.css'
                }
            ]
        }
    },
    modules: ['nuxt-primevue'],
    primevue: {
        options: { ripple: false },
        components: {
            exclude: ['Editor']
        }
    },
    css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss']
});
