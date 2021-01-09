import { createApp } from 'vue'
import App from './App.vue'
import "./assets/scss/reset.css";
import "./assets/scss/custom.scss";
import router from './router'
import "./lib/index"
const app = createApp(App);
app.use(router);
app.mount('#app')
