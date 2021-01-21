<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Button 按钮</h1>
    <demo :component="Button1Demo"></demo>
    <demo :component="Button2Demo"></demo>
    <demo :component="Button3Demo"></demo>
    <demo :component="Button4Demo"></demo>
    <demo :component="Button5Demo"></demo>
    <demo :component="Button6Demo"></demo>
    <!-- <Markdown path = "switch.md"></Markdown> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "@/examples/demo.vue";
import Button1Demo from "@/examples/button/Button1Demo.vue";
import Button2Demo from "@/examples/button/Button2Demo.vue";
import Button3Demo from "@/examples/button/Button3Demo.vue";
import Button4Demo from "@/examples/button/Button4Demo.vue";
import Button5Demo from "@/examples/button/Button5Demo.vue";
import Button6Demo from "@/examples/button/Button6Demo.vue";

export default defineComponent({
  name: "ButtonDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      Button6Demo
    };
  },
});
</script>

<style lang="scss">
$font-family: Lato, "Helvetica Neue For Number", -apple-system,
  BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
.demo-title {
  font-size: 28px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 24px;
  margin-top: 8px;
  font-family: $font-family;
}
</style>
