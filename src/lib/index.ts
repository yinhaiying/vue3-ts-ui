import { App } from "vue";
import Switch from "./switch/Switch.vue";

const componentsList = [Switch]

componentsList.forEach((component) => {
    console.log("component:",component)
    component.install = (app: App): void => {
        app.component(component.name, component)
    }
});

export {
    Switch
};