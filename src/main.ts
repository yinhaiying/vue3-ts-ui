import { createApp } from 'vue'
import App from './App.vue'
import "./assets/scss/reset.css";
import router from './router'

createApp(App).use(router).mount('#app')
