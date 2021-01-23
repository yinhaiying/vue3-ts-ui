import {
    App
} from "vue";
import Tabs from "./Tabs.vue";
Tabs.install = (app: App): void => {
    app.component(Tabs.name, Tabs)
}
export default Tabs;