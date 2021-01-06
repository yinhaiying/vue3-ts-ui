<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/doc">About</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { ref, provide,defineComponent } from "vue";
import router  from "./router/index";
export default defineComponent({
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // set
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
})
</script>
