import TabPanel from "../tabs/Tab-Panel.vue";
import {
    App
} from "vue";
TabPanel.install = (app: App): void => {
    app.component(TabPanel.name, TabPanel)
}
export default TabPanel;