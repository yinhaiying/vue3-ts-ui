<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Icon 图标</h1>
    <demo :component="Icon1Demo"></demo>
    <demo :component="Icon2Demo" :isShowAction="false"></demo>
    <Markdown path = "icon.md"></Markdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "@/examples/demo.vue";
import Icon1Demo from "@/examples/icon/Icon1Demo.vue";
import Icon2Demo from "@/examples/icon/Icon2Demo.vue";


export default defineComponent({
  name: "IconDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      Icon1Demo,
      Icon2Demo,
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
