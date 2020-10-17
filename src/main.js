import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss';
import VueRellax from 'vue-rellax'

Vue.use(VueRellax)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')