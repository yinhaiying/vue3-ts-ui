
<docs>常规用法</docs>
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
