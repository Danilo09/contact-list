import Vue from 'vue'
import App from './App.vue'
import { VueMaskDirective } from "v-mask";

Vue.config.productionTip = false
import VueMask from 'v-mask'
Vue.use(VueMask)
Vue.directive("mask", VueMaskDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')
