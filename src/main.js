import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import VuePreview from 'vue-preview';
Vue.use(VuePreview)
import './assets/mui/css/mui.css';
import './assets/mui/css/icons-extra.css';
/* eslint-disable no-new */
import store from "./store"
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
