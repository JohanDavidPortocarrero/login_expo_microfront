// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueSweetalert2 from 'vue-sweetalert2';
import App from './App'
import router from './router'

//import BootstrapVue from 'bootstrap-vue'
//Vue.use(VueSweetalert2);

//import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/dropdown';

Vue.config.productionTip = false
//Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
