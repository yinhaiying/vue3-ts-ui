<template>
  <div id="page">
    <router-view></router-view>
  </div>
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

<style lang="scss" scoped>
  .page{
    position:relative;
    z-index:10;
  }
</style>
