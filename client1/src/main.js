import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
// import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//agregamos la url base de nuestra api

axios.defaults.baseURL = "http://localhost:3000/api"

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
