<template>
  <div class="tab-panel">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'sea-tab-panel',
  props:{
  }
})
</script>
<style lang="scss" scoped>
</style>