import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ButtonDemo from "../components/ButtonDemo.vue";
import DocDemo from "../components/DocDemo.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";
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
      { path: "switch", component: SwitchDemo },
      { path: "button", component: ButtonDemo },
      { path: "dialog", component: DialogDemo },
      { path: "tabs", component: TabsDemo },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
