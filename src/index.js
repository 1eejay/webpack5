import Vue from 'vue'
import App from './App.vue'

import config from './config'

document.title = config.name

new Vue({
  render: h => h(App)
}).$mount(app)
