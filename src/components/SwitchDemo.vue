<template>
  <div class="switch-demo">
    <Switch :value = "y" @input = "change"></Switch>
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
    const y = ref(true);
    const change = (value:boolean) => {
      y.value = value;
    };
    return {
      y,
      change
    }
  }
})
</script>
<style lang="scss" scoped>
</style>