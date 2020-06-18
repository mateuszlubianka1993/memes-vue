import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store/index'

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

axios.defaults.baseURL = 'https://memes-vue.firebaseio.com/'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')