export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Martin Molcrette',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: '' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/assets/css/main.css'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/fontawesome',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/strapi', '@nuxt/image', ['nuxt-fontawesome', {
        component: 'fa',
        imports: [{
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
        }]
    }]],
    image: {},
    strapi: {
        entities: ['projets', ],
        url: 'https://strapi-backend-mart1.herokuapp.com'
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}