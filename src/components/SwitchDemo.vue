<template>
  <div class="switch-demo">
    <!-- <Switch :value = "checked" @update:value = "change"></Switch> -->
    <Switch v-model:value = "checked" :active-color = "activeColor" :inactive-color = "inactiveColor"></Switch>
  </div>
</template>

<script lang='ts'>
import {defineComponent,ref} from 'vue'
import Switch from  "../lib/Switch.vue"
export default defineComponent({
  name:'SwitchDemo',
  components: {
    Switch
  },
  props: {},
  setup(){
    const checked = ref(true);
    const activeColor = ref("red");
    const inactiveColor = ref("green");
    return {
      checked,
      activeColor,
      inactiveColor
    }
  }
})
</script>
<style lang="scss" scoped>
</style>