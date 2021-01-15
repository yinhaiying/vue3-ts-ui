
<docs>
  <title>扩展的value类型</title>
  <desc>设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。</desc>
</docs>
<template>
  <Switch
    v-model:value="checked"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
  ></Switch>
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
    const activeColor = ref("red");
    const inactiveColor = ref("green");
    return {
      checked,
      activeColor,
      inactiveColor,
    };
  },
});
</script>
