<template>
  <div>
    <button v-bind = $attrs>
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  name: "",
  components: {},
  props: {},
  setup(props) {
    console.log("1");
  },
});
</script>
<style lang="scss" scoped></style>
