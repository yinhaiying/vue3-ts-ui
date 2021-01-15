
<docs>
  <title>禁用状态</title>
  <desc>Switch不可用状态</desc>
</docs>
<template>
    <Switch  v-model:value="checked" :disabled = "disabled"></Switch>
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
    const disabled = ref(true)
    return {
      checked,
      disabled
    };
  },
});
</script>

