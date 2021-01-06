<template>
  <div class="switch-page">
    <button>
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup() {
    console.log("1");
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
  background: #0364ff;
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
}
button:hover {
  & > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>
