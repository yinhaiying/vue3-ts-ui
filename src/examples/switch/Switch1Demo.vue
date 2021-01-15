
<docs>
  <title>常规用法</title>
  <desc>用于控制两种状态的开关</desc>
</docs>
<template>
  <Switch v-model:value="checked"></Switch>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Switch from "../../lib/switch/Switch.vue";
export default defineComponent({
  name: "SwitchDemo",
  components: {
    Switch,
  },
  props: {},
  setup() {
    const checked = ref(true);
    return {
      checked,
    };
  },
});
</script>
