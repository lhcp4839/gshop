import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mack'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters'

Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})