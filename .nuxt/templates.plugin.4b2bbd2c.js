import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { fab as fortawesomefreebrandssvgicons_fab } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_fab)

    import  { fas as fortawesomefreesolidsvgicons_fas } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_fas)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
