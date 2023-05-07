import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/element-ui';
import './style/element-ve.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
