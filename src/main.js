import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import Vant from 'vant'
import Axios from 'axios'

Vue.use(Vant);
Vue.use(Axios);
Vue.prototype.$axios=Axios;
// Axios.defaults.baseURL = '/api';
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
