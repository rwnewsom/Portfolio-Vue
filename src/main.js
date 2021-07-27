import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCss3, faHtml5, faVuejs as faViers, faGithub, faJs, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faMicrochip, faRunning, faVial, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faMicrochip, faRunning, faVial, faDatabase )
library.add(faHtml5, faCss3, faViers, faGithub, faJs, faBootstrap)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
