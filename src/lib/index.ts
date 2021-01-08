import { App } from "vue";
import Switch from "./switch/Switch.vue";

const componentsList = [Switch]

componentsList.forEach((component) => {
    component.install = (app: App): void => {
        app.component(component.name, component)
    }
});

export {
    Switch
};