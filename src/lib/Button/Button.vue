<template>
    <button v-bind="$attrs" class = "sea-btn" :class = "btnClass">
      <slot></slot>
    </button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
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
      default:"small"
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  setup(props) {
    const btnClass = computed(() => {
      const {theme,size,disabled} = props;
      const classList =[];
      theme && classList.push(`sea-btn-${theme}`);
      size && classList.push(`sea-btn-${size}`);
      disabled && classList.push(`disabled`);
      return classList.join(" ")
    })
    return {
      btnClass
    }
  },
});
</script>
<style lang="scss" scoped>
@import "./_button.scss";
</style>
