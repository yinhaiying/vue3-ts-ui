<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Switch开关</h1>
    <demo :component="Switch1Demo"></demo>
    <demo :component="Switch2Demo"></demo>
    <demo :component="Switch3Demo"></demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "@/examples/demo.vue";
import Switch1Demo from "@/examples/switch/Switch1Demo.vue";
import Switch2Demo from "@/examples/switch/Switch2Demo.vue";
import Switch3Demo from "@/examples/switch/Switch3Demo.vue";

export default defineComponent({
  name: "SwitchDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      Switch3Demo
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
