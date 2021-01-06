<template>
  <div class="switch-page">
    <button :style = "style" :class="{ checked: value }" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,computed } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {
    value: {
      type: Boolean,
      require:true
    },
    activeColor:{
      type:String,
      default:"#0364ff"
    },
    inactiveColor:{
      type:String,
      default:"#ccc"
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    const style = computed(() => {
      return props.value ? {background:props.activeColor} : {background:props.inactiveColor}
    })
    return {
      toggle,
      style
    };
  },
});
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  position: relative;
  & > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: $h2/2;
    transition: left 0.25s;
  }
  &.checked {
    & > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>
