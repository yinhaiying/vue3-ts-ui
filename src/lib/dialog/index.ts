import { App } from "vue";
import Dialog from "./Dialog.vue";
Dialog.install = (app: App): void => {
    app.component(Dialog.name, Dialog)
}
export default Dialog;