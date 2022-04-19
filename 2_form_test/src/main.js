import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSimpleAlert from "vue-simple-alert";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/main.css";

Vue.use(VueAxios, axios);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
