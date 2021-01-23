<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Dialog 对话框</h1>
    <demo :component="Diglog1Demo"></demo>
    <demo :component="Diglog2Demo"></demo>
    <demo :component="Diglog3Demo"></demo>
    <!-- <demo :component="Icon2Demo" :isShowAction="false"></demo> -->
    <!-- <Markdown path = "icon.md"></Markdown> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "@/examples/demo.vue";
import Diglog1Demo from "@/examples/dialog/Dialog1Demo.vue";
import Diglog2Demo from "@/examples/dialog/Dialog2Demo.vue";
import Diglog3Demo from "@/examples/dialog/Dialog3Demo.vue";


export default defineComponent({
  name: "DiglogDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      Diglog1Demo,
      Diglog2Demo,
      Diglog3Demo,
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
