<template>
    <button v-bind="$attrs" class = "sea-btn" :class = "`sea-btn-${theme} sea-btn-${size}`">
      <slot></slot>
    </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  name: "sea-button",
  components: {},
  props: {
    theme: {
      type: String,
      default: "default",
    },
    size:{
      type:String,
      default:"medium"
    }
  },
  setup(props) {
    console.log("1");
  },
});
</script>
<style lang="scss" scoped>
@import "./_button.scss";
</style>
