<template>
  <div class="switch-demo">
    <Switch></Switch>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Switch from  "../lib/Switch.vue"
export default defineComponent({
  name:'SwitchDemo',
  components: {
    Switch
  },
  props: {},
  setup(){
    console.log("11")
  }
})
</script>
<style lang="scss" scoped>
</style>