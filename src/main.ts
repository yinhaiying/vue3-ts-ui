import { createApp } from 'vue'
import App from './App.vue'
// import "./assets/scss/reset.css";
// import "./assets/scss/custom.scss";
// import "./assets/scss/github.markdown.css";

import "./assets/style/index.scss";
import router from './router';
import components from "./lib/index";
console.log("components:",components)
import Markdown from "./components/markdown.vue";
const app = createApp(App);
app.use(router);
const componentsList = Object.values(components);
componentsList.map((item) => {
    app.component(item.name, item);
});

app.component("Markdown", Markdown);
app.component("sea-button", components.Button)

app.mount('#app');
