import Vue from 'vue'
import NuxtImage from '~image/nuxt-image'
import NuxtPicture from '~image/nuxt-picture'
import { createImage } from '~image/image'

import runtime_f80389 from '/Users/martinm/Development/Portfolio/node_modules/@nuxt/image/dist/providers/ipx/runtime.js'

const intersectOptions = {}
const defaultProvider = 'ipx'
const responsiveSizes = [320,420,768,1024,1200]
const presets = []
const providers = {}

// ipx
providers['ipx'] = {
  provider: runtime_f80389,
  defaults: {
  "baseURL": "http://localhost:3000/"
}
}

Vue.component(NuxtImage.name, NuxtImage)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NuxtImg', NuxtImage)
Vue.component('NImg', NuxtImage)
Vue.component('NPicture', NuxtPicture)

// TODO: directly plugin into vue
export default function (context, inject) {
  const image = createImage(context, {
    defaultProvider,
    providers,
    presets,
    intersectOptions,
    responsiveSizes
  })

  inject('img', image)
}
