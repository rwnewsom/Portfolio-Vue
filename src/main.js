import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCss3, faHtml5, faVuejs as faViers, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSpinner, faMicrochip, faRunning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faMicrochip, faRunning )
library.add(faHtml5, faCss3, faViers, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
