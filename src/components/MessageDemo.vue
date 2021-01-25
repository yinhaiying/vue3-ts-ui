<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Message 全局提示</h1>
    <demo :component="Message1Demo"></demo>
    <demo :component="Message2Demo"></demo>
    <!-- <Markdown path = "Message.md"></Markdown> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "@/examples/demo.vue";
import Message1Demo from "@/examples/message/Message1Demo.vue";
import Message2Demo from "@/examples/message/Message2Demo.vue";
export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      Message1Demo,
      Message2Demo,
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
