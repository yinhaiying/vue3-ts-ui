<template>
  <div class="switch-page">
    <button :class="{ checked:value }" @click = "toggle">
      <span></span>
    </button>
    {{value}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {
      value:{
          type:Boolean
      }
  },
  setup(props,context) {
    const checked = ref(false);
    const toggle = () => {
     context.emit("input",!props.value);
    }
    return {
      checked,
      toggle
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
  background: #cccccc;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: #fff;
  border-radius: $h2/2;
  transition:left .25s;
}
button.checked {
  background: #0364FF;
  & > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
