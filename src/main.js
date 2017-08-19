// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as config from './config.js'

axios.defaults.baseURL = config.API_URL
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: config.GA
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
