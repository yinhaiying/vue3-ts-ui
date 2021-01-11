import { createApp } from 'vue'
import App from './App.vue'
import "./assets/scss/reset.css";
import "./assets/scss/custom.scss";
import "./assets/scss/github.markdown.css";
import router from './router'
import "./lib/index"
import Markdown from "./components/markdown.vue";
const app = createApp(App);
app.use(router);
app.component("Markdown", Markdown)
app.mount('#app')
