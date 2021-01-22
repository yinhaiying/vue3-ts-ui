import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ButtonDemo from "../components/ButtonDemo.vue";
import IconDemo from "../components/IconDemo.vue";
import DocDemo from "../components/DocDemo.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";

import Intro from "../views/Intro.vue";
import GetStarted from "../views/GetStarted.vue";
import Install from "../views/Install.vue";
import Design from "../views/Design.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doc',
    name: 'Doc',
    component: () => import('../views/Doc.vue'),
    children: [
      { path: "", component: DocDemo },
      { path: "get-started", name: "GetStarted", component: GetStarted },
      { path: "install", name: "Install", component: Install },
      { path: "switch", component: SwitchDemo },
      { path: "button", component: ButtonDemo },
      { path: "icon", component: IconDemo },
      { path: "dialog", component: DialogDemo },
      { path: "tabs", component: TabsDemo },
    ],
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue'),
    children: [
      { path: "intro", name:"Intro",component: Intro },
      { path: "design", name: "Design", component: Design },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
